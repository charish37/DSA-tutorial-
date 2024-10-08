// for-loop inplace reversal - TC o(n) and SC - o(1)

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right --;
    }
    return arr;
}



function reverseArray(arr){
    for(let i = 0, j = arr.length -1; i< j; i++, j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// using new array for reversal

function reverseArray(arr) {
    let revArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        revArr.push(arr[i])
    }
    return revArr;
}


// using recursion

function reverseArray(arr){
    if(arr.length ===0) return [];

    return [arr.pop()].concat(reverseArray(arr));
}



console.log(reverseArray([1,2,3,4,5]))