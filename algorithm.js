const arr = [10, 3, 21, 4, 7, 23, 6];
const arrName = ['nemo', 'yas', 'javad', 'sara', 'nemo', 'taher'];

//simple search , linear search
const simpleSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return arr[i];
  }
  return null;
};
// o(n)
//console.log(simpleSearch(arrName, 'neo'));

//selection sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // swap
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
      //or
      // const temp = arr[i];
      // arr[i] = arr[j];
      // arr[j] = temp;
    }
  }
  return arr;
};
console.log(selectionSort(arr));
//Binary search
// just in sorted array!, you must sort by num, alphabetic, fa,en
const binarySearch = () => {};

//fibonachi
// recurssion
// find max!
// filter
