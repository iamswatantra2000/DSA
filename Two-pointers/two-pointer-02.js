// finding the triplet sum (similar to pair sum problem)

const arr = [3, 2, 22, 14, 5, 61, 71, 8];
const target = 10;

function tripletSum(arr, target) {
  arr.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < arr.length-2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(tripletSum(arr, target));
