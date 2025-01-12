// container with most water

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function containerWithMostWater(arr){

    let left = 0;
    let right = arr.length-1;
    let container = 0;

    while(left < right){
        let height = Math.min(arr[left], arr[right]);
        let width = right-left;

        let areaOfContainer = height*width;
        container = Math.max(container, areaOfContainer);

        if(arr[left] < arr[right]){
            left++;
        }
        else{
            right--;
        }

    }
return container;
}

console.log(containerWithMostWater(arr));