// 7.	Find the Second Largest Element
// Given an array of integers, find the second largest element.


// const arr = [1,4,5,6,8,9,23,3,2,11,234];


// function secondLargestNumber(arr){
//     arr.sort((a,b) => a-b);
//     let findNumberIndex = arr.length-2;
//     return arr[findNumberIndex];
// }


// console.log(secondLargestNumber(arr));


// logic is correct but it takes the large complexity, we need to reduce the complexity of it.

// then the code will be

const arr = [1,4,5,6,8,9,23,3,2,11,234];


function secondLargestNumber(arr){
    let firstLarge = -Infinity;
    let secondLarge = -Infinity;

    for(let i = 0;i < arr.length;i++){
        if(arr[i] > firstLarge){
            secondLarge = firstLarge;
            firstLarge = arr[i];
        }
        else if(arr[i] > secondLarge && arr[i] !== firstLarge){
            secondLarge = arr[i];
        }
    }

    return secondLarge;
}

console.log(secondLargestNumber(arr));

/*

Iteration Breakdown:
	1.	i = 0: arr[i] = 1
	•	arr[i] > firstLarge: 1 > -Infinity → True
	•	Update secondLarge = firstLarge → secondLarge = -Infinity
	•	Update firstLarge = 1
	•	State: firstLarge = 1, secondLarge = -Infinity
	2.	i = 1: arr[i] = 4
	•	arr[i] > firstLarge: 4 > 1 → True
	•	Update secondLarge = firstLarge → secondLarge = 1
	•	Update firstLarge = 4
	•	State: firstLarge = 4, secondLarge = 1
	3.	i = 2: arr[i] = 5
	•	arr[i] > firstLarge: 5 > 4 → True
	•	Update secondLarge = firstLarge → secondLarge = 4
	•	Update firstLarge = 5
	•	State: firstLarge = 5, secondLarge = 4
	4.	i = 3: arr[i] = 6
	•	arr[i] > firstLarge: 6 > 5 → True
	•	Update secondLarge = firstLarge → secondLarge = 5
	•	Update firstLarge = 6
	•	State: firstLarge = 6, secondLarge = 5
	5.	i = 4: arr[i] = 8
	•	arr[i] > firstLarge: 8 > 6 → True
	•	Update secondLarge = firstLarge → secondLarge = 6
	•	Update firstLarge = 8
	•	State: firstLarge = 8, secondLarge = 6
	6.	i = 5: arr[i] = 9
	•	arr[i] > firstLarge: 9 > 8 → True
	•	Update secondLarge = firstLarge → secondLarge = 8
	•	Update firstLarge = 9
	•	State: firstLarge = 9, secondLarge = 8
	7.	i = 6: arr[i] = 23
	•	arr[i] > firstLarge: 23 > 9 → True
	•	Update secondLarge = firstLarge → secondLarge = 9
	•	Update firstLarge = 23
	•	State: firstLarge = 23, secondLarge = 9
	8.	i = 7: arr[i] = 3
	•	arr[i] > firstLarge: 3 > 23 → False
	•	arr[i] > secondLarge && arr[i] !== firstLarge: 3 > 9 && 3 !== 23 → False
	•	State: firstLarge = 23, secondLarge = 9
	9.	i = 8: arr[i] = 2
	•	arr[i] > firstLarge: 2 > 23 → False
	•	arr[i] > secondLarge && arr[i] !== firstLarge: 2 > 9 && 2 !== 23 → False
	•	State: firstLarge = 23, secondLarge = 9
	10.	i = 9: arr[i] = 11
	•	arr[i] > firstLarge: 11 > 23 → False
	•	arr[i] > secondLarge && arr[i] !== firstLarge: 11 > 9 && 11 !== 23 → True
	•	Update secondLarge = 11
	•	State: firstLarge = 23, secondLarge = 11
	11.	i = 10: arr[i] = 234
	•	arr[i] > firstLarge: 234 > 23 → True
	•	Update secondLarge = firstLarge → secondLarge = 23
	•	Update firstLarge = 234
	•	State: firstLarge = 234, secondLarge = 23

*/