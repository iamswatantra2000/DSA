// 4.	Check if Array is Sorted
// Given an array of integers, check if the array is sorted in ascending order.

const arr = [1,3,6,7,8];

function checkSorted(arr){
    for(let i = 0;i < arr.length-1;i++){
        let start = arr[i];
        let next = arr[i+1];

        if(start > next){
            return false;
        }
    }

    return true;
}

if(checkSorted(arr)){
    console.log("Array is sorted!");
}
else{
    console.log("Array is not sorted!");
}


//when we are taking conditions like arr[i+1], we need to take care of conditions to run till arr.length-1 like that