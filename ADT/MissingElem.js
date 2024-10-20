// sinngle missing element

function singleMissingElem(arr) {
    // 1,2,3,4,5,6,7,8,9,11,12

    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum += arr[i];
    }

    let noOfEle = arr[arr.length-1];

    let sumOfNnumbers = (noOfEle) * (noOfEle + 1) / 2;
    console.log(noOfEle, sum,sumOfNnumbers)
    
    return sumOfNnumbers - sum;
}

// console.log(singleMissingElem([1,2,3,4,5,6,7,8,9,11,12]));

// single missing ele with the list not start with 1

function singleMissingElem2(arr) {
   let diff = arr[0] - 0;
   for(let i = 0; i< arr.length; i++){
    if(arr[i] - i !== diff){
        return diff+i;
    } 
   }
}

// console.log(singleMissingElem2([6,7,8,9,11,12]))


// Multiple missing ele

function MissingElem(arr) {
    let diff = arr[0] - 0;
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i] - i !== diff){
           while(diff < arr[i] - i){
            console.log(i+diff);
            diff++;
           }
        }
    }
}

// MissingElem([6,7,8,9,11,12,15,16,17,18,19]);

// In order to reduce the time complexity, hash table is the best solution for searching
// if the element is present the value in the hash table will be 1 and if the value is absent we will 
// make it 0. So by using has table we can reduce the time complexity to O(n).

function MissingElem2(arr) {
    let hashTable = [];
      for(let val of arr){
     hashTable[val] = (hashTable[val] || 0) + 1;
  }
  for(let i = 1; i< hashTable.length; i++){
    if(!hashTable[i]) {
          console.log(i)
    }
  }
}

MissingElem2([3,7,4,9,12,6,1,11,2,10])