document.addEventListener('DOMContentLoaded', function () {
    class Restaurant {
        constructor(tables) {
            this.tables = tables;  // ذخیره تعداد میزها به تفکیک اندازه
            this.originalTables = { ...tables }; // ذخیره تعداد اصلی میزها
            this.waitingList = [];
            this.reservations = [];
            this.futureReservations = []; // ذخیره رزروهای آینده
            this.logElement = document.getElementById('log');
            this.averageEatingTime = 60000; // 1 دقیقه برای تست
            this.reservationIdCounter = 1; // شمارنده برای ایجاد شناسه رزرو
            this.updateTableStatus(); // اولین بار وضعیت میزها را نمایش می‌دهد
        }

        log(message) {
            const logDiv = document.createElement('div');
            logDiv.textContent = message;
            this.logElement.prepend(logDiv);
        }

        reserveTable(groupSize, priority = false) {
            this.log(`درخواست رزرو برای ${groupSize} نفر در حال پردازش...`);

            let availableTable = this.findExactTableNow(groupSize);
            if (availableTable) {
                this.allocateTablesNow(groupSize, { [availableTable]: 1 });
            } else {
                const tablesUsed = this.findExactTableCombinationNow(groupSize);
                if (tablesUsed) {
                    this.allocateTablesNow(groupSize, tablesUsed);
                } else {
                    this.log(`هیچ ترکیب دقیقی از میزها موجود نیست، اضافه کردن به لیست انتظار.`);
                    this.waitingList.push({ groupSize, priority });
                    this.sortWaitingList();
                }
            }
        }

        allocateTablesNow(groupSize, tablesUsed) {
            const reservationId = this.generateReservationId();

            for (let size in tablesUsed) {
                this.tables[size] -= tablesUsed[size];
            }

            const timerID = setTimeout(() => {
                this.releaseTable(reservationId, true); // آزادسازی خودکار
            }, this.averageEatingTime);

            const startTime = Date.now();
            const endTime = startTime + this.averageEatingTime;

            this.reservations.push({ reservationId, groupSize, tablesUsed, timerID, startTime, endTime });

            const tablesList = Object.entries(tablesUsed)
                .map(([size, count]) => `${count} عدد میز ${size} نفره`)
                .join(' و ');

            this.log(`${tablesList} برای ${groupSize} نفر رزرو شد. شناسه رزرو: ${reservationId}`);

            this.updateTableStatus(); // به‌روزرسانی وضعیت میزها
        }

        releaseTable(reservationId, isAutomatic = false) {
            // جستجو در رزروهای فعلی
            let reservationIndex = this.reservations.findIndex(r => r.reservationId === reservationId);
            let reservationList = this.reservations;

            // اگر در رزروهای فعلی یافت نشد، جستجو در رزروهای آینده
            if (reservationIndex === -1) {
                reservationIndex = this.futureReservations.findIndex(r => r.reservationId === reservationId);
                reservationList = this.futureReservations;
            }

            if (reservationIndex === -1) {
                this.log(`هیچ رزروی با شناسه ${reservationId} یافت نشد.`);
                return;
            }

            const reservation = reservationList.splice(reservationIndex, 1)[0];

            // لغو تایمر در صورت آزادسازی دستی
            if (!isAutomatic && reservation.timerID) {
                clearTimeout(reservation.timerID);
            }

            for (let size in reservation.tablesUsed) {
                // اگر رزرو آینده است، باید زمان فعلی را در نظر بگیریم
                if (reservationList === this.futureReservations) {
                    // کاهش تعداد میزهای آینده
                    // نیازی به تغییر در this.tables نیست، زیرا میزها در زمان فعلی آزاد هستند
                } else {
                    // افزایش تعداد میزهای فعلی
                    this.tables[size] += reservation.tablesUsed[size];
                }
            }

            const tablesList = Object.entries(reservation.tablesUsed)
                .map(([size, count]) => `${count} عدد میز ${size} نفره`)
                .join(' و ');

            if (isAutomatic) {
                this.log(`${tablesList} برای رزرو با شناسه ${reservationId} به صورت خودکار آزاد شد.`);
            } else {
                this.log(`${tablesList} برای رزرو با شناسه ${reservationId} آزاد شد.`);
            }

            this.updateTableStatus();
            this.checkWaitingList();
        }

        findExactTableNow(groupSize) {
            return Object.keys(this.tables).find(tableSize => {
                return this.getAvailableTableCountNow(parseInt(tableSize)) > 0 && parseInt(tableSize) === groupSize;
            });
        }

        findExactTableCombinationNow(groupSize) {
            const tableSizes = Object.keys(this.tables).map(Number).sort((a, b) => b - a);
            const combinations = this.getAllCombinations(tableSizes, groupSize);

            if (!combinations || combinations.length === 0) {
                return null;
            }

            // مرتب‌سازی ترکیبات براساس تعداد میز کمتر
            combinations.sort((a, b) => {
                return Object.keys(a).reduce((sum, key) => sum + a[key], 0) -
                    Object.keys(b).reduce((sum, key) => sum + b[key], 0);
            });

            // پیدا کردن اولین ترکیبی که میزهای مورد نیاز آن در دسترس هستند
            for (let tablesUsed of combinations) {
                let isAvailable = true;
                for (let size in tablesUsed) {
                    const availableCount = this.getAvailableTableCountNow(parseInt(size));
                    if (tablesUsed[size] > availableCount) {
                        isAvailable = false;
                        break;
                    }
                }
                if (isAvailable) {
                    return tablesUsed;
                }
            }

            return null;
        }

        getAvailableTableCountNow(tableSize) {
            let totalTables = this.tables[tableSize];

            // کاهش تعداد میزها با توجه به رزروهای آینده
            const currentTime = Date.now();
            const endTime = currentTime + this.averageEatingTime;

            this.futureReservations.forEach(reservation => {
                if (reservation.tablesUsed[tableSize]) {
                    if (this.timeOverlap(currentTime, endTime, reservation.startTime, reservation.endTime)) {
                        totalTables -= reservation.tablesUsed[tableSize];
                    }
                }
            });

            return totalTables;
        }

        reserveTableForFuture() {
            const groupSize = parseInt(document.getElementById('futureGroupSize').value);
            const futureTimeInput = document.getElementById('futureTime').value;
            const priority = document.getElementById('futurePriority').checked;

            if (!groupSize || groupSize < 1 || !futureTimeInput) {
                alert('لطفا اطلاعات معتبر وارد کنید.');
                return;
            }

            const futureTime = new Date(futureTimeInput).getTime();
            if (isNaN(futureTime) || futureTime <= Date.now()) {
                alert('لطفا زمان معتبر در آینده وارد کنید.');
                return;
            }

            this.log(`درخواست رزرو برای ${groupSize} نفر در زمان ${new Date(futureTime).toLocaleString()} در حال پردازش...`);

            let availableTable = this.findExactTableForFuture(groupSize, futureTime, futureTime + this.averageEatingTime);
            if (availableTable) {
                const tablesUsed = { [availableTable]: 1 };
                this.allocateTablesForFuture(groupSize, tablesUsed, futureTime);
            } else {
                const tablesUsed = this.findExactTableCombinationForFuture(groupSize, futureTime, futureTime + this.averageEatingTime);
                if (tablesUsed) {
                    this.allocateTablesForFuture(groupSize, tablesUsed, futureTime);
                } else {
                    this.log(`در زمان مورد نظر، هیچ ترکیب دقیقی از میزها موجود نیست.`);
                }
            }

            this.updateTableStatus();
        }

        allocateTablesForFuture(groupSize, tablesUsed, futureTime) {
            const reservationId = this.generateReservationId();
            const startTime = futureTime;
            const endTime = futureTime + this.averageEatingTime;

            const timerID = setTimeout(() => {
                // در زمان رزرو، میزها را به رزروهای فعلی منتقل می‌کنیم
                this.moveFutureReservationToCurrent(reservationId);
            }, futureTime - Date.now());

            // تنظیم تایمر برای آزادسازی میزها پس از اتمام زمان رزرو
            const releaseTimerID = setTimeout(() => {
                this.releaseTable(reservationId, true);
            }, endTime - Date.now());

            this.futureReservations.push({ reservationId, groupSize, tablesUsed, timerID, releaseTimerID, startTime, endTime });

            const tablesList = Object.entries(tablesUsed)
                .map(([size, count]) => `${count} عدد میز ${size} نفره`)
                .join(' و ');

            this.log(`رزرو آینده: ${tablesList} برای ${groupSize} نفر رزرو شد. شناسه رزرو: ${reservationId}`);
        }

        moveFutureReservationToCurrent(reservationId) {
            const reservationIndex = this.futureReservations.findIndex(r => r.reservationId === reservationId);
            if (reservationIndex === -1) {
                return;
            }

            const reservation = this.futureReservations.splice(reservationIndex, 1)[0];

            for (let size in reservation.tablesUsed) {
                this.tables[size] -= reservation.tablesUsed[size];
            }

            this.reservations.push(reservation);

            this.log(`رزرو با شناسه ${reservationId} اکنون فعال است.`);

            this.updateTableStatus();
            this.checkWaitingList();
        }

        findExactTableForFuture(groupSize, startTime, endTime) {
            return Object.keys(this.tables).find(tableSize => {
                const availableCount = this.getAvailableTableCountAtTime(parseInt(tableSize), startTime, endTime);
                return availableCount > 0 && parseInt(tableSize) === groupSize;
            });
        }

        findExactTableCombinationForFuture(groupSize, startTime, endTime) {
            const tableSizes = Object.keys(this.tables).map(Number).sort((a, b) => b - a);
            const combinations = this.getAllCombinations(tableSizes, groupSize);

            if (!combinations || combinations.length === 0) {
                return null;
            }

            // مرتب‌سازی ترکیبات براساس تعداد میز کمتر
            combinations.sort((a, b) => {
                return Object.keys(a).reduce((sum, key) => sum + a[key], 0) -
                    Object.keys(b).reduce((sum, key) => sum + b[key], 0);
            });

            // پیدا کردن اولین ترکیبی که میزهای مورد نیاز آن در دسترس هستند
            for (let tablesUsed of combinations) {
                let isAvailable = true;
                for (let size in tablesUsed) {
                    const availableCount = this.getAvailableTableCountAtTime(parseInt(size), startTime, endTime);
                    if (tablesUsed[size] > availableCount) {
                        isAvailable = false;
                        break;
                    }
                }
                if (isAvailable) {
                    return tablesUsed;
                }
            }

            return null;
        }

        getAvailableTableCountAtTime(tableSize, startTime, endTime) {
            let totalTables = this.originalTables[tableSize];

            // کاهش تعداد میزها با توجه به رزروهای فعلی
            this.reservations.forEach(reservation => {
                if (reservation.tablesUsed[tableSize]) {
                    if (this.timeOverlap(startTime, endTime, reservation.startTime, reservation.endTime)) {
                        totalTables -= reservation.tablesUsed[tableSize];
                    }
                }
            });

            // کاهش تعداد میزها با توجه به رزروهای آینده
            this.futureReservations.forEach(reservation => {
                if (reservation.tablesUsed[tableSize]) {
                    if (this.timeOverlap(startTime, endTime, reservation.startTime, reservation.endTime)) {
                        totalTables -= reservation.tablesUsed[tableSize];
                    }
                }
            });

            return totalTables;
        }

        getAllCombinations(tableSizes, targetSum) {
            const results = [];

            const findCombinations = (currentCombination, currentSum, startIndex) => {
                if (currentSum === targetSum) {
                    const combinationCount = {};
                    currentCombination.forEach(size => {
                        combinationCount[size] = (combinationCount[size] || 0) + 1;
                    });
                    results.push(combinationCount);
                    return;
                }
                if (currentSum > targetSum) {
                    return;
                }

                for (let i = startIndex; i < tableSizes.length; i++) {
                    const size = tableSizes[i];
                    currentCombination.push(size);
                    findCombinations(currentCombination, currentSum + size, i);
                    currentCombination.pop();
                }
            };

            findCombinations([], 0, 0);

            return results;
        }

        timeOverlap(start1, end1, start2, end2) {
            return Math.max(start1, start2) < Math.min(end1, end2);
        }

        sortWaitingList() {
            this.waitingList.sort((a, b) => b.priority - a.priority);
        }

        checkWaitingList() {
            if (this.waitingList.length === 0) return;

            for (let i = 0; i < this.waitingList.length; i++) {
                const request = this.waitingList[i];

                let availableTable = this.findExactTableNow(request.groupSize);
                if (availableTable) {
                    this.allocateTablesNow(request.groupSize, { [availableTable]: 1 });
                    this.waitingList.splice(i, 1);
                    i--; // تنظیم اندیس پس از حذف
                } else {
                    const tablesUsed = this.findExactTableCombinationNow(request.groupSize);
                    if (tablesUsed) {
                        this.allocateTablesNow(request.groupSize, tablesUsed);
                        this.waitingList.splice(i, 1);
                        i--; // تنظیم اندیس پس از حذف
                    }
                }
            }
        }

        updateTableStatus() {
            const tableStatusElement = document.getElementById('tableStatus');
            tableStatusElement.innerHTML = ''; // خالی کردن محتوا

            const tableSizes = Object.keys(this.tables).map(Number).sort((a, b) => a - b);

            tableSizes.forEach(tableSize => {
                const availableNow = this.getAvailableTableCountNow(tableSize);
                const total = this.originalTables[tableSize];
                const statusDiv = document.createElement('li');
                statusDiv.textContent = `میز ${tableSize} نفره: ${availableNow} از ${total} عدد باقی مانده`;
                tableStatusElement.appendChild(statusDiv);
            });
        }

        generateReservationId() {
            return `${this.reservationIdCounter++}`;
        }
    }

    const restaurant = new Restaurant({
        2: 3,  // تعداد میزهای ۲ نفره
        3: 3,  // تعداد میزهای ۳ نفره
        4: 2,  // تعداد میزهای ۴ نفره
        5: 1   // تعداد میزهای ۵ نفره
    });

    window.reserve = function () {
        const groupSize = parseInt(document.getElementById('groupSize').value);
        const priority = document.getElementById('priority').checked;

        if (!groupSize || groupSize < 1) {
            alert('لطفا تعداد نفرات معتبر وارد کنید.');
            return;
        }

        restaurant.reserveTable(groupSize, priority);
    }

    window.reserveTableForFuture = function () {
        restaurant.reserveTableForFuture();
    }

    window.release = function () {
        const reservationId = document.getElementById('releaseReservationId').value.trim();
        if (!reservationId) {
            alert('لطفا شناسه رزرو معتبر وارد کنید.');
            return;
        }
        restaurant.releaseTable(reservationId);
    }

    // توابع برای باز و بسته کردن مدال‌ها
    window.openModal = function (modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    window.closeModal = function (modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    // تنظیم رویداد کلیک برای بستن مدال در صورت کلیک خارج از آن
    window.onclick = function (event) {
        const modals = ['reserveModal', 'futureReserveModal', 'releaseModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // به‌روزرسانی توابع موجود برای بستن مدال پس از اقدام
    window.reserve = function () {
        const groupSize = parseInt(document.getElementById('groupSize').value);
        const priority = document.getElementById('priority').checked;

        if (!groupSize || groupSize < 1) {
            alert('لطفا تعداد نفرات معتبر وارد کنید.');
            return;
        }

        restaurant.reserveTable(groupSize, priority);
        closeModal('reserveModal');
    }

    window.reserveTableForFuture = function () {
        restaurant.reserveTableForFuture();
        closeModal('futureReserveModal');
    }

    window.release = function () {
        const reservationId = document.getElementById('releaseReservationId').value.trim();
        if (!reservationId) {
            alert('لطفا شناسه رزرو معتبر وارد کنید.');
            return;
        }
        restaurant.releaseTable(reservationId);
        closeModal('releaseModal');
    }
});
