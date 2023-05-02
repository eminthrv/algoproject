function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  if (n >= 10) {
    var digits = n.toString().split('');
    console.log(digits);
    var realDigits = digits.map(Number);
    return digitalRoot(realDigits.reduce((partialSum, a) => partialSum + a, 0));
  }
}

console.log(digitalRoot(132189));
