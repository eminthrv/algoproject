function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  if (n >= 10) {
    var digits = n.toString().split('');
    console.log(digits);
    var realDigits = digits.map(Number);
    console.log(realDigits)
    return digitalRoot(realDigits.reduce((partialSum, a) => partialSum + a, 0));
  }
}

const performance = require('perf_hooks').performance
const startTime = performance.now();
const result = digitalRoot(493193);
const endTime = performance.now()
console.log("Result:", result);
console.log("Time taken:", endTime - startTime, "milliseconds");