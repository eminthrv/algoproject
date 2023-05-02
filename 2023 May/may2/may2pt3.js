function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  if (n >= 10) {
    var digits = n.toString().split('');
    console.log(digits);
    var realDigits = digits.map(Number);
    console.log(realDigits);
    return digitalRoot(realDigits.reduce((partialSum, a) => partialSum + a, 0));
  }
}

const performance = require('perf_hooks').performance;
const startTime = performance.now();
const result = digitalRoot(493193);
const endTime = performance.now();
console.log('Result:', result);
console.log('Time taken:', endTime - startTime, 'milliseconds');

function digitalRootxyz(n) {
  if (n < 10) {
    return n;
  }

  var digits = n.toString().split('');
  console.log(digits);
  var realDigits = digits.map(Number);
  console.log(realDigits);
  n = realDigits.reduce((partialSum, a) => partialSum + a, 0);

  return digitalRootxyz(n);
}

const startTime1 = performance.now();
const result1 = digitalRootxyz(493193);
const endTime1 = performance.now();
console.log('Result:', result1);
console.log('Time taken:', endTime1 - startTime1, 'milliseconds');
