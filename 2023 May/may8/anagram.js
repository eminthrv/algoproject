// Define a function named 'anagrams' that takes two string arguments, 's1' and 's2'.
function anagrams(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const s1Arr = [...s1].sort();
  const s2Arr = [...s2].sort();

  console.log(s1Arr);
  console.log(s2Arr);
  if (JSON.stringify(s1Arr) === JSON.stringify(s2Arr)) {
    return true;
  } else return false;
}

console.log(anagrams('listen hello', 'silent hello')); // true
console.log(anagrams('hello', 'world')); // false
