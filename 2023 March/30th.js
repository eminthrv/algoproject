// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0

// Constraints:

// 0 <= n <= 104


const x = 4.2069;
console.log();
/**
 * @param {number} n
 * @return {number}
 */

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact
}
console.log(factorial(2))



var trailingZeroes = function (n) {
  let fact = n;
  let sum = 0;
  while (fact >= 1){
    sum = sum + 2
  }
  return counter
};

// console.log(trailingZeroes(4617))
// trailingZeroes(6);

