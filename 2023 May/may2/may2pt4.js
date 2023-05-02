const compress = (s) => {
  let splitString = [];
  let tempStr = '';
  let output = '';

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      tempStr += s[i];
    }
    if (i > 0 && s[i - 1] === s[i]) {
      tempStr += s[i];
    }
    if (i > 0 && s[i - 1] !== s[i]) {
      splitString.push(tempStr);
      tempStr = s[i];
    }
    if (s[i + 1] === undefined) {
      splitString.push(tempStr);
      tempStr = s[i];
    }
  }
  console.log(splitString);
  for (e of splitString) {
    let length = e.length.toString();
    let stringElement = length + e[0];
    output += stringElement;
  }
  return output;
};

console.log(compress('annneseeeeeeeeeeezzffffssa'));
//console.log(compress('nnneeeeeeeeeeeezz'));
//console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'));
