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

toWeirdCase('String'); //=> returns "StRiNg"
toWeirdCase('Weird string case'); //=> returns "WeIrD StRiNg CaSe"

console.log(toWeirdCase('String'))
console.log(toWeirdCase('Weird string case'))