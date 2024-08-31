const t0 = performance.now();
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const t1 = performance.now();
console.log(last4Digits.padStart(5, '*'));
console.log(t1 - t0);
