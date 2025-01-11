// use for counting the frequency of the number from the array

const arr = [1, 2, 3, 4, 2, 1, 2, 2, 2, 4, 5, 4];

function checkFreq(arr) {
  let freqMap = new Map();

  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1); // agar number present hai toh thik hai aur increment kardo warna agar
    // pahli baar value trigger hui hai toh bas undefined ki jagah set 0.
  }

  return freqMap;
}

console.log(checkFreq(arr));
