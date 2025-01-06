// 8.	Find the Missing Number in an Array
// Given an array containing n distinct numbers taken from the range 1 to n+1,
// find the missing number.

// const arr = [1,2,3,4,6,7,9,10];

// function checkMissing(arr){
//     let missing = [];

//     for(let i = 0;i < arr.length-1;i++){
//         if(arr[i+1] !== arr[i]+1){
//             missing.push(arr[i]+1);
//         }
//     }

//     return missing;
// }

// console.log(checkMissing(arr));

// the actual approach is :

/*

Formula for sum of first n numbers:

sum of all number upto (n+1): then, S = (n *(n+1))/2;

*/
const arr = [1, 2, 3, 4, 6, 7, 9, 10];

function findMissingNumber(arr) {
    let n = arr.length + 1; // Because the array is missing 1 element, n should be one more than length.
    let totalSum = (n * (n + 1)) / 2; // Sum of first n+1 natural numbers
    let actualSum = arr.reduce((acc, num) => acc + num, 0); // Sum of numbers in the given array
    return totalSum - actualSum; // The difference will give the missing number
}

console.log(findMissingNumber(arr)); // Output: 5