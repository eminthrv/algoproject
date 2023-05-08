const pairProduct = (numbers, targetProduct) => {
    const hashMap = {};
    for (let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        let compliment = targetProduct / num;
        if (compliment in hashMap){
            return [hashMap[compliment], i]
        }
        hashMap[num] = i;
    }
  };



console.log(pairProduct([3, 2, 5, 4, 1], 8))// -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10))// -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5))// -> [4, 5]