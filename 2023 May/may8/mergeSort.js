// Challenge: You are given a list of objects, each containing a name and a timestamp. 
//Your task is to sort the list of objects based on the timestamp (ascending order) and, at the same time, 
//find the number of instances where an object with a later timestamp appears before an object with an earlier timestamp (inversions).

// Input: An array of objects with the following structure:
// [
//   { name: 'A', timestamp: 1620650000 },
//   { name: 'B', timestamp: 1620620000 },
//   { name: 'C', timestamp: 1620640000 },

// ]
// Output: A sorted array of objects and the number of inversions.

// Now you can try implementing the merge-sort algorithm to solve this problem efficiently. Good luck!

const inputArray = [
    { name: 'A', timestamp: 1620650000 },
    { name: 'B', timestamp: 1620620000 },
    { name: 'C', timestamp: 1620640000 },
    { name: 'D', timestamp: 1620630000 },
    { name: 'E', timestamp: 1620610000 },
    { name: 'F', timestamp: 1620680000 },
    { name: 'G', timestamp: 1620670000 },
    { name: 'H', timestamp: 1620690000 },
    { name: 'I', timestamp: 1620700000 },
    { name: 'J', timestamp: 1620660000 },
  ];

