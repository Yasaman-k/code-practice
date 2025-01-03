const numOfBuilding = parseInt(readline());
const h1 = readline().split(' ');
var t = `4
1 3 3 1`;
// const items = t.split('\n');
// const numOfBuilding = items[0];
// const h1 = items[1].split(' ').map((item) => Number(item));

// return totalSunlitUnits;

// const find2max = (units) => {
//   const firstNum = Math.max(...units);
//   const indexToRemove = units.findIndex((item) => item === firstNum);
//   let newArr = units.slice(0, indexToRemove).concat(units.slice(indexToRemove + 1));

//   const secondNum = Math.max(...newArr);

//   const max2Index = newArr.findIndex((item) => item === secondNum);
//   let entirArr = newArr.slice(0, max2Index).concat(newArr.slice(max2Index + 1));
//   //   console.log(firstNum, secondNum);
//   if (isFinite(firstNum)) {
//     return [firstNum, secondNum, entirArr];
//   }
// };

// const sara = (h) => {
//   let arrObj = find2max(h);

//   if (numOfBuilding == 1) {
//     return h[0];
//   } else {
//     if (numOfBuilding < 4) {
//       return arrObj[0] + arrObj[1];
//     }
//     let sum = arrObj[0] + arrObj[1];
//     const o = arrObj[2].sort((a, b) => a - b);

//     sum += o[1] - o[0];
//     for (let index = o.length - 1; index > 1; index -= 1) {
//       sum += o[index] - o[index - 2];
//     }
//     return sum;
//   }
// };
// console.log(sara(h1));
