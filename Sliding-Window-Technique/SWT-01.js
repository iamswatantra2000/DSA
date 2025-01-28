// sliding window with fixed size array

const arr = [2, 3, 5, 4, 7, 6, 8, 1];
const size = 3;

function checkMaxSumSunArray(arr, size) {
    if (size > arr.length || size < 0) {
        return null;
    }

    let currSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (i >= size - 1) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= arr[i - (size - 1)];
        }
    }

    return maxSum;
}

console.log(checkMaxSumSunArray(arr, size));