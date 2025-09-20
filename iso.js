const x = '2024-12-30T06:10:25.794+00:00';

console.log(new Date(x).toDateString());
const arr = [0, 1, 2];
console.log(arr.length);
const newPerson = () => {
  const statusChance = Math.random();
  return {
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
  };
};
