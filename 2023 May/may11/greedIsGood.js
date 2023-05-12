// problem lives here https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
const { performance } = require('perf_hooks');
function score(dice) {
  let obj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let score = 0;

  for (const el of dice) {
    obj[el]++;
  }

  if (obj[5] >= 3) {
    score += 500;
    obj[5] -= 3;
  }

  if (obj[5] > 0) {
    for (let i = 0; i < obj[5]; i++) {
      score += 50;
    }
  }
  if (obj[1] >= 3) {
    score += 1000;
    obj[1] -= 3;
  }

  if (obj[1] > 0) {
    for (let i = 0; i < obj[1]; i++) {
      score += 100;
    }
  }

  if (obj[2] >= 3) {
    score += 200;
  }
  if (obj[3] >= 3) {
    score += 300;
  }
  if (obj[4] >= 3) {
    score += 400;
  }
  if (obj[6] >= 3) {
    score += 600;
  }

  return score;
}


function timedScore(dice) {
    const start = performance.now();
    const result = score(dice);
    const end = performance.now();
    
    let strResult = (`Execution time for dice: ${dice.toString()} is ${end - start} milliseconds.`);
    
    return strResult;
  }
  
  console.log(timedScore([2, 3, 4, 6, 2])) //0
  console.log(timedScore([5, 1, 3, 4, 1])) //250
  console.log(timedScore([1,1,1,3,1])) //1100
  console.log(timedScore([2,4,4,5,4])) //450
  console.log(timedScore([4, 4, 4, 3, 3])) //400
  console.log(timedScore([2, 4, 4, 5, 4])) //450
  


//   for (let x of dice) {
//     frequency[x] = (frequency[x] || 0) + 1;
//   }