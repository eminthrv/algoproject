function toWeirdCase(string) {
  let result = '';
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (counter % 2 === 0) { 
        result += string[i].toUpperCase();
      }
      if (counter % 2 === 1) {
        result += string[i].toLowerCase();
      }
      counter++;
    } else {
      counter = 0;
      result += ' ';
    }
  }
  return result
}

const performance = require('perf_hooks').performance
const startTime = performance.now();
const result = toWeirdCase("asdklfasdfjdaasdjds ksadjfklasfasdklfklasfjklafjklsjksdklsdjklf jksdflkajfldasfjkdajkldfjkasdjkdajkl");
const endTime = performance.now()
console.log("Result:", result);
console.log("Time taken:", endTime - startTime, "milliseconds");