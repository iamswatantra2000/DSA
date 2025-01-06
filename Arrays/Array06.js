// 6.	Move Zeros to End
// Given an array, move all the zeros to the end while maintaining the order of non-zero elements

const arr = [1, 4, 0, 2, 0, 3, 0, 5, 0];

function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log(moveZerosToEnd(arr));
