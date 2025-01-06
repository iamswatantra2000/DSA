// 2.	Reverse an Array
// Reverse the elements of an array without using the built-in reverse() method.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArray(arr) {
  let start, end;
  
  // Loop through half of the array
  for (let i = 0; i < arr.length / 2; i++) {
    start = arr[i]; // Element from the start
    end = arr[arr.length - 1 - i]; // Element from the end
    
    // Swap the elements
    arr[i] = end;
    arr[arr.length - 1 - i] = start;
  }

  return arr; // Return the reversed array
}

console.log(reverseArray(arr)); // Output: [8, 7, 6, 5, 4, 3, 2, 1]



// ek aur method hai - two pointer approach