// 3.	Sum of All Elements
// Given an array of integers, find the sum of all the elements in the array.

const arr = [1,4,6,8,9,12,44];

function sumOfArray(arr){
    let totalSum = 0;
    for(let i = 0;i < arr.length;i++){
        totalSum += arr[i];
    }

    return totalSum;
}


console.log(sumOfArray(arr));



// we can do it with javascript's reduce functionality
