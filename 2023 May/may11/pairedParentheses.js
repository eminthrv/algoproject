const pairedParentheses = (str) => {
  let count = 0;

  for (let char of str) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      if (count === 0) {
        return false;
      }

      count--;
    }
  }

  if (count === 0) {
    return true;
  }
  return false;
};

console.log(pairedParentheses('(david)((abby))')); // -> true
console.log(pairedParentheses('()rose(jeff')); // -> false
console.log(pairedParentheses(')(')); // -> false
console.log(pairedParentheses('(())(water)()')); // -> true
console.log(pairedParentheses('(((potato())))')); // true
console.log(pairedParentheses('(())(water)()')); // -> true
