// Implement a func called countUniqueVaues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will be always be sorted.

// countUniqueValues([1,1,1,1,1]); // 1
                     
//countUniqueValues([1,2,3,4,4,4,7,7,12,12]); //6
// countUniqueValues([]) // 0

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
   
    let i =0;
    let j = 1;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
       
        }
        j++;
    }

    return i+ 1;
}

console.log(countUniqueValues([-2,-1,-1,0,1]))