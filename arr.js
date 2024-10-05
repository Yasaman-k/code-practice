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

var t1 = performance.now();
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
var t2 = performance.now();
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

const arr = [{ 2: 3 }, { 1: 'k' }, { 4: 5 }, { 3: 4 }];
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
let x = ['hi'];
x = x.concat(['good']);

const o = { a: 0 };
const y = Object.assign({}, { k: 2 }, o);
console.log(y);
// const z = structuredClone(o);
// console.log(z);
