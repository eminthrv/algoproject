const uncompress = (s) => {
  let splitString = [];
  let tempStr = '';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (isNaN(char)) {
      // Check if the character is a letter
      tempStr += char;
      splitString.push(tempStr);
      tempStr = '';
    } else {
      tempStr += char;
    }
  }

  for (const el of splitString) {
    let letter = el[el.length - 1];
    let number = Number(el.replace(/\D+/g, ''));
    result += letter.repeat(number);
  }
  return result;
};

console.log(uncompress('3n12e2z'));
