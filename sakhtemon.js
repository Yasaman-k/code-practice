// const numOfBuilding = parseInt(readline());
// const h1 = readline().split(' ');
var t = `3
3 1 2`;
const items = t.split('\n');
const numOfBuilding = items[0];
const h1 = items[1].split(' ').map((item) => Number(item));

const sortedArr = h1.sort((a, b) => a - b);
// return totalSunlitUnits;

const find2max = (units) => {
  const firstNum = Math.max(...units);
  const indexToRemove = units.findIndex((item) => item === firstNum);
  let newArr = units.slice(0, indexToRemove).concat(units.slice(indexToRemove + 1));

  const secondNum = Math.max(...newArr);

  const max2Index = newArr.findIndex((item) => item === secondNum);
  let entirArr = newArr.slice(0, max2Index).concat(newArr.slice(max2Index + 1));

  return [firstNum, secondNum, entirArr];
};

// console.log([1, 3, 4, 9, 10].splice(-3));

const sara = (h) => {
  if (numOfBuilding === 1) {
    return h[0];
  } else {
    if (numOfBuilding < 4) {
      return h[h.length - 1] + h[h.length - 2];
    }

    let sum = h[h.length - 1] + h[h.length - 2];

    let o = h.splice(0, h.length - 2);

    sum += o[1] - o[0];
    for (let index = o.length - 1; index > 1; index -= 1) {
      sum += o[index] - o[index - 2];
    }
    return sum;
  }
};
console.log(sara(sortedArr));
