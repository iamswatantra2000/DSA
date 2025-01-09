// 11.	Pair Sum Problem
// Given an array and a target sum, find all unique pairs in the array that sum up to the target.

const arr = [1, 2, 3, 4, 5, 3, 2, 1];
const target = 4;

function pairSum(arr, target) {
  let arrOfPairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        const pair = [Math.min(arr[i], arr[j]), Math.max(arr[i], arr[j])];

        // Check if this pair already exists in arrOfPairs
        let isDuplicate = false;
        for (let k = 0; k < arrOfPairs.length; k++) {
          if (arrOfPairs[k][0] === pair[0] && arrOfPairs[k][1] === pair[1]) {
            isDuplicate = true;
            break;
          }
        }

        if (!isDuplicate) {
          arrOfPairs.push(pair);
        }
      }
    }
  }

  return arrOfPairs;
}

console.log(pairSum(arr, target));



// efficient approach is set and map.