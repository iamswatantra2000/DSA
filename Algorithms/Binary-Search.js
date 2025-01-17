const arr = [1, 4, 2, 3, 7, 6, 4, 12, 5, 77, 41, 32];
const target = 12;

arr.sort((a, b) => a - b); // array sorted hona chaiye

function BinarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

if (BinarySearch(arr, target)) {
  console.log("Element found!!");
} else {
  console.log("Element not found!!");
}
