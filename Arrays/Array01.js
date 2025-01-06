// 1.	Find the Largest Element in an Array
// Given an array of integers, find the largest number in the array.

let arr = [2, 5, 1, 3, 54, 8, 12, 44, 0, 7];

const findLargestElement = (arr) => {
  let maxElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

console.log(findLargestElement(arr));
