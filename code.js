var t = `2
#000000
#123459`;
// const t = readline();
const items = t.split('\n');
// delete fist number
const colors = items.filter((item) => item !== items[0]);

let result = colors.map((color) => {
  const s = color
    .replace('#', '')
    .match(/.{1,2}/g)
    .map((num) => {
      return (255 - parseInt(num, 16)).toString(16).toLocaleUpperCase();
    });
  return '#' + s.join('');
});
console.log(result.join('\n'));
