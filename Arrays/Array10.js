// 10.	Find the Majority Element
// Given an array, find the element that appears more than n/2 times, where n is the length of the array.


const arr = [1,2,3,4,4,4,6,5,4,4,4,6,4,4,4]

function checkMajorityElement(arr){

    for(let i = 0;i < arr.length;i++){
        let count = 0;
        for(let j = 0;j < arr.length;j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > (arr.length)/2){
            return arr[i];
        }
    }
    return -1;
}

console.log(checkMajorityElement(arr));


// efficient approach is Moore's voting algorithm