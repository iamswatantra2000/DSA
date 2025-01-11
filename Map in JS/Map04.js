// pair sum problem

const arr = [1,2,3,4];
const target = 4;

function pairSum(arr){
    let pairs = new Set();
    let seen = new Map();

    for(let num of arr){
        let complement = target - num;
        if(seen.has(complement)){
            let foundPair = [num, complement].sort((a,b) => a-b);
            pairs.add(foundPair.toString());
        }


        seen.set(num, true);
    }

    return Array.from(pairs).map(pair => pair.split(",").map(Number));
}

console.log(pairSum(arr));



/*

1. by using hashset
2. by using pairs -> to remove duplicates
3. can also be done by Two pointer approach.

*/