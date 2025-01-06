// 5.	Find Duplicate Elements
// Given an array of integers, find all the duplicate elements in the array.

const arr = [1, 4, 3, 9, 5, 6, 7, 9];

function checkDuplicate(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (currentElement === arr[j]) {
        duplicates.push(currentElement);
      }
    }
  }

  return duplicates;
}

console.log(checkDuplicate(arr));

// another way of doing is to use hashset....
