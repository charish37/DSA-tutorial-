// write  a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be same.

// same([1,2,3], [4,1,9]);
// same([1,2,3], [1,9]);
// same([1,2,3], [4,4,1]);

// check length
// check every number exists
// check freq of square

function same(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    let freqObj1 = {};
    let freqObj2 = {};

    for(let val of arr1){
        freqObj1[val] = (freqObj1[val] || 0) + 1;
    }
    for(let val of arr2){
      freqObj2[val] = (freqObj2[val] || 0) + 1;
    }

    for(let key in freqObj1){
        if(!freqObj2[key**2]) return false;
        else if(freqObj1[key] !== freqObj2[key**2] ) return false;
    }

    return true;

}

console.log(same([1,2,2], [4,1,9]));