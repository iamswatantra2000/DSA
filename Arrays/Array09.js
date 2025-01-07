// 9.	Find the Intersection of Two Arrays
// Given two arrays, find the intersection (common elements) between them.


const arr1 = [1, 6, 3, 4, 5];
const arr2 = [6, 7, 7, 8, 9];


function intersectArrays() {
    return arr1.filter((val) => arr2.includes(val));
}


console.log(intersectArrays(arr1, arr2));