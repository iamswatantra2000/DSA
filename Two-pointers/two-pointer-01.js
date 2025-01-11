// find the pairs which gives the targeted sum of values.

const arr = [1, 2, 3, 4, 5, 6];
const target = 7;

function pairSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let finalArray = [];

  while (start < end) {
    let sum = arr[start]+arr[end];
    if (sum === target) {
      finalArray.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (sum < target) {
      start++;
    } else{
      end--;
    }
  }

  return finalArray;
}

console.log(pairSum(arr, target));
