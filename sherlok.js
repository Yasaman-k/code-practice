// https://quera.org/problemset/236442
const inputString = `Tuesday
53
67
32
73
88
59
78
3
30
15
31
56
32
79
83
17
50
4
49
97
75
2
56
62
77
98
47
97
56
62`;

const daysOfWeek = `Saturday
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday`;

const converToArr = (input) => input.split('\n');
const mainArr = converToArr(inputString);
const daysArr = converToArr(daysOfWeek);
const mainArrNumbers = mainArr.slice(1).map((x) => Number(x));

const generateDaysWeekNumber = () => {
  const dayIndex = daysArr.findIndex((x) => x === mainArr[0]);
  return mainArrNumbers.map((x, index) => {
    return { [daysArr[(dayIndex + index) % 7]]: x };
  });
};

const generateAveDay = daysArr.map((day) => {
  const arrOfObjects = generateDaysWeekNumber().filter((obj) => {
    return obj[day];
  });
  const arrOfNumbers = arrOfObjects.map((x) => Object.values(x)[0]);
  const ave = arrOfNumbers.reduce((pre, cur) => pre + cur, 0) / arrOfNumbers.length;
  return [day, ave];
});

const result = generateAveDay
  .sort((a, b) => a[1] - b[1])[0]
  .toString()
  .split('.')[0];

console.log(result);
