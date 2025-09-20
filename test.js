// var yasaman = 2;

// function namesara(params) {
//   //   console.log(yasaman);
//   yasaman += 2;
// }
// namesara();
// console.log(yasaman);

// console.log('اول');

// setTimeout(() => {
//   console.log('وسط');
// }, 4000);

// setTimeout(() => {
//   console.log('سارا');
// }, 1000);

// console.log('آخر');
// console.log('آ۲خر');

// const arr = [1, 2, 3, 9];
// const jj = arr;
// const newarr = arr.push(8);
// console.log(jj);

function divide(a, b) {
  if (b === 0) {
    throw new Error('تقسیم بر صفر امکان‌پذیر نیست');
  }
  return a / b;
}
divide(2, 2);
