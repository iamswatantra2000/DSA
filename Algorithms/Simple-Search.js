const arr = [1, 3, 4, 2, 6, 5, 9, 11, 10];
const target = 23;

function BinarySearch(arr) {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }

  return false;
}

if (BinarySearch(arr, target)) {
  console.log("Element found !!!");
} else {
  console.log("Element not found !!!");
}
