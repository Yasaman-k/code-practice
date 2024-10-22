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

//selection sort traditional
const oldSelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let minValue = arr[minIndex];
      arr.splice(minIndex, 1); // delete that item
      arr.splice(i, 0, minValue); // add it to index minIndex
    }
  }
  return arr;
};
//o(n^2)
// console.log(oldSelectionSort(arr));

//selection sort improvement
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
// o(n^2)
//console.log(selectionSort(arr));

// quick sort
// merge sort
// bubble sort
//Binary search
// just in sorted array!, you must sort by num, alphabetic, fa,en
const binarySearch = () => {};

//fibonachi
// recurssion
// find max!
// filter
//https://www.w3schools.com/dsa/dsa_algo_bubblesort.php
