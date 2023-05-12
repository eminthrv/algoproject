// Write a function, fiveSort, that takes in an array of numbers as an argument. 
//The function should rearrange elements of the array such that all 5s appear at the end. 
//Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// test_00

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
      if (nums[j] === 5) {
        j -= 1;
      } else if (nums[i] === 5) {
        [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
        i += 1; 
      } else {
        i += 1;
      }
    }
  
    return nums;
  };


 // This function is designed to move all instances of the number 5 to the end of an array.

function fiveSort2 (nums) {
    // Initialize two pointers, one at the beginning (i) and one at the end (j) of the array
    let i = 0;
    let j = nums.length - 1;
  
    // While the start pointer is less than the end pointer, continue to iterate
    while (i < j) {
      // If the number at the end pointer is 5, move the end pointer one position to the left
      // This is done because we want to move all 5's to the end, and we have just encountered one at the end
      if (nums[j] === 5) {
        j -= 1;
      } 
      // If the number at the start pointer is 5, swap the start and end elements
      // Then, move the start pointer one position to the right
      // This is done because we want to move the 5 at the start to the end
      else if (nums[i] === 5) {
        [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
        i += 1;
      } 
      // If the number at the start pointer is not 5, move the start pointer one position to the right
      // This is done because we want to find the next 5 in the array, if it exists
      else {
        i += 1;
      }
    }
  
    // After the while loop, all 5's have been moved to the end of the array
    // Return the sorted array
    return nums;
  }; 


console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5]

console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
// -> [4, 1, 1, 1, 5, 5, 5] 

console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]));
// -> [6, 5, 5, 5, 5, 5, 5] 

console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]));
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]    

const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
console.log(fiveSort(nums));
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]