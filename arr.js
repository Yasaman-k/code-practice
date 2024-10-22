//const large = new Array(100).fill('nemo');

// const lar = ['1', 'nemo', 'p', 'p'];

// function findNemo(arr) {
//   arr.some((value, index) => {
//     console.log('running');
//     return value === 'nemo';
//   });
// }

// findNemo(lar);

// const t1 = performance.now();
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve('success');
//   } else if (a == 3) {
//     resolve('success2');
//   } else {
//     reject(new Error('failed'));
//   }
//   return 'hi';
// });

// p.then((message) => {
//   console.log(message);
// })
//   .catch((message) => {
//     console.log(message);
//   })
//   .finally(() => {
//     console.log('com');
//   });

// const a = Math.floor(11.6 / 2);
// console.log(a);

// const t2 = performance.now();

// const func2 = new Promise((resolve, reject) => {
//   let x = 2 + 2 + 6;
//   if (x === 10) {
//     resolve('#####');
//   } else {
//     reject('not ok!!!');
//   }
// });

// var x = 7;

// func2
//   .then((value) => {
//     console.log(value);
//     console.log(x);
//   })
//   .catch((x) => {
//     console.log(x);
//   });

// console.log(t2 - t1);

// const exist = 'سلام)()';
// const t = exist.replace(/\s/g, '');
// const word = 'سلام';
// const regex = new RegExp(`\\b${word}\\b`);

// console.log(regex.test(t));

// let a = [1, 2, 3];
// // a = a.entries();
// // console.log(a);
// for (const user of a) {
//   console.log(user);
// }

// var a = 5;

// if (true) {
//   var a = 10;
// }

// console.log(a);

// const x = new Date('2024-09-07T19:46:55.164+00:00').toLocaleString();
// console.log(x);

// console.log(true && false);

// const arr = [1, 2, 3, 4];
// const removeArr = arr.splice(1, 2, 'hi');
// console.log(arr, removeArr);
const names = ['Alice', 'Bob', 'nemo', 'Charlie', 'David', 'Eve'];
function findNimo() {
  let value = 'yasaman';
  switch (value) {
    case 'yasaman':
      for (let index = 0; index < names.length; index++) {
        console.log(index);
        const element = names[index];
        if (element === 'nemo') {
          console.log('find nemo');
          break;
        }
      }
      console.log('hi');

      break;

    default:
      break;
  }
}
//const x = names.includes('nemo');

// findNimo();
// console.log(t2 - t1);

// const newArr = x.split('');
// newArr.forEach((item, index) => {
//   const charCode = item.charCodeAt(0);
//   //  zero-width non-joiner
//   if (charCode === 8204) {
//     newArr.splice(index, 1, ' '); // Replace with space
//   }
// });

// console.log(newArr.join(''));

//console.log(names);

// findNimo();
// console.log(t2 - t1);
function fruit() {
  if (true) {
    var skin = 'yellow';
    if (true) {
      console.log(skin);
    }
  }

  if (true) {
    var skin = 'red';
    console.log(skin);
  }
}
// fruit();

function names1() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  console.log(array.length / 3);

  if (true) {
    let yas = '8';
    while (true) {
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element == 3) {
          console.log(element);
          return yas;
          // az toye akharin loop biad biron faqat
        }
        console.log(i);
      }
      console.log('s');
    }
    console.log('hi');
  }
  console.log('ha');
}
// let y = 2;
// console.log(this.y, 'foot');

// arr.forEach(function (arr3) {
//   console.log(arr);
// });

// arr.forEach((val) => {
//   console.log(val);
// });

// const convertArrayToNColumn = (array, n) => {
//   const symbolList = Object.values(array);
//   let arr = [];
//   symbolList.forEach((item, index) => {
//     if (Math.floor(index / n) >= arr.length) {
//       const arr1 = [];
//       arr.push(arr1);
//     }
//     arr[arr.length - 1].push(item);
//   });
//   return arr;
// };

// console.log(
//   convertArrayToNColumn(arr, 2).map((item) =>
//     item.map((item) => ({
//       text: 1,
//       callback_data: 1,
//     })),
//   ),
// );

// console.log(4 ** 2);
// let x = ['hi'];
// x = x.concat(['good']);

// const o = { a: 0 };
// const y = Object.assign({}, { k: 2 }, o);
// console.log(y);
// // const z = structuredClone(o);
// // console.log(z);

// const xx = y.s || 'o';
// console.log(xx);
///
// const arr = [];
// arr[4] = 'hi';
// console.log(arr[1]);
//
// const arr = [{ 2: 3 }, { 1: 'k' }, { 4: 5 }, { 3: 4 }];
// const t1 = performance.now();
// // for (let fish of arr) {
// //   console.log(fish);
// // }
// arr.forEach((fish) => {
//   console.log(fish);
// });

// const t2 = performance.now();
// console.log(t2 - t1);

// for (let fish in arr) {
//   console.log(fish);
// }

let arr = [{ active: true, cat: 0n }, { active: false, cat: null }, { chat: false }, { chat: true, cat: 'w' }];
let obj = {};
// arr = arr.filter((x) => (x.active === undefined || x.active === true) && x.chat === 3);
// const x = '';
// if (obj.state === undefined) {
//   console.log('hi');
// }
arr = arr.filter((x) => !!x.cat);
// let forDeletion = [2, 3, 5];
// let arr = [1, 2, 3, 4, 5, 3];
// arr = arr.filter((item) => !forDeletion.includes(item));

// 2 parameters - arrays - no size limit
// return true or false
function isContainCommonItem(arr1, arr2) {
  for (item1 of arr1) {
    //  if (secondArr.includes(item)) return true;
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === item1) {
        return true;
      }
    }
  }
  return false;
}
// time complexity: o(a*b)
// space complexity: o(1)

//HASH TABLE // SEARCH
// arr2=> obj{
//a:true
//}
// arr2[index]===obj.properties
// what if pass number as argument?
const mapArrayToObject = (arr) => {
  let map = {};
  arr.forEach((item, i) => {
    if (!map[arr[i]]) {
      map[item] = true;
    }
  });
  return map;
};

const isContainCommonItem2 = (arr1, arr2) => {
  // handle edge case
  if (!Array.isArray(arr1)) {
    throw new Error('First argument must be an array');
  }

  if (!Array.isArray(arr2)) {
    throw new Error('Second argument must be an array');
  }

  if (arr1.length === 0) {
    throw new Error('First array is empty');
  }

  if (arr2.length === 0) {
    throw new Error('Second array is empty');
  }
  //modulrize
  const map = mapArrayToObject(arr1);
  // loop through first array and create object where properties === items in the array

  //or return arr2.some((elemet) => map[elemet]);
  //loop through second array and check if item in second array exists on created object
  for (item of arr2) {
    if (map[item]) {
      return true;
    }
  }
  return false;
};
// time: o(a+b)
// space: o(a)

const isContainCommonItem3 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

// console.log(isContainCommonItem2([1, 2, []], [[]]));

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log('index:', i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set('jadi', 'yasaman');
table.set('jida', 'ali');
// table.display();
// table.set('age', 25);
// table.display();
// console.log(table.get('red'));
// table.remove('yellow');
// table.display();

const testReducer = [1, 8, 3, 4];
let t = testReducer.reduce((max, curr) => {
  // console.log(pre, curr);
  if (max > curr) {
    return max;
  } else {
    return curr;
  }
}, 20);
let x = testReducer.reduce((max, curr) => {
  return max + curr;
});
// set
const people = new Set();
const people2 = new Set([1, 2, 3, 4]);
people2.add([9]);
const num = [1, 2, 3, 3, 3, 3];
const numWithout = [...new Set(num)];

// console.log(people2.has(3));
const hasPairWithSum = () => {
  for (item of [1, 2, 3]) {
    console.log(item);

    if (item === 1) {
      return true;
    }
    console.log('sara');
  }
};
hasPairWithSum();
