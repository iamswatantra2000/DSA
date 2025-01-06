// 9.	Find the Intersection of Two Arrays
// Given two arrays, find the intersection (common elements) between them.


const arr1 = [1,2,3,4,5];
const arr2 = [6,7,7,8,9];


function intersectArrays(){
    let arr3 = arr1.concat(arr2);
    return arr3;
}


console.log(intersectArrays(arr1, arr2));