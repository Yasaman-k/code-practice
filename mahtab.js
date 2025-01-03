const input = readline();

let sum = 0;
for (let index = 1; index < input; index++) {
  if (index % 2 !== 0) {
    sum += index;
  }
}
const result = sum;
console.log(result);
