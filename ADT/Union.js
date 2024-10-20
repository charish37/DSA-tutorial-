// if the list or both arrays passed to the function are not sorted - O(m*n)
// if the lists are sorted then we can do merging - O(m+n)

function Union(arr1,arr2) {
  let i = 0;
  let j = 0;
  let arr = [];

  function findIndex(arr,val){
    for(let i =0; i< arr.length; i++){
        if(arr[i] === val){
            return i;
        } 
       
    }
    return -1;
  }

  for(let i = 0; i< arr1.length; i++){
    arr.push(arr1[i]);
  }

  while( j < arr2.length){
        let index = findIndex(arr, arr2[j]);
        if(index === -1){
            arr.push(arr2[j]);
        }
        j++;
  }
  return arr;
}

// console.log(Union([3,5,10,4,6],[12,4,7,2,5]));

function Union2(arr1, arr2) {
   let i= 0, j = 0, k;
   let arr = [];
   while( i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        if(arr.length === 0 || arr[arr.length - 1] !== arr1[i]){
            arr.push(arr1[i]);
        }  
        i++;
    } else if(arr1[i] > arr2[j]){
        if(arr.length === 0 || arr[arr.length - 1] !== arr2[j]){
            arr.push(arr2[j]);
        }  
        j++;
    } else {
        if(arr.length === 0 || arr[arr.length - 1] !== arr1[i]){
            arr.push(arr1[i]);
        }  
        i++;
        j++;
    }
   }

   while(i < arr1.length) {
    if (arr.length === 0 || arr[arr.length - 1] !== arr1[i]) {
        arr.push(arr1[i]);
    }
    i++;
   }

   while (j < arr2.length) {
    if (arr.length === 0 || arr[arr.length - 1] !== arr2[j]) {
        arr.push(arr2[j]);
    }
    j++;
}

   return arr;
}
                  
console.log(Union2([1,2,4,5,7], [2,4,4,6,8,9]))