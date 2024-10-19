function Merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let arr = [];
  let k  = 0;
  
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        arr[k] = arr1[i];
        i++;
    } else {
       arr[k] = arr2[j];
       j++;
    }
    k++;
  }

  for(; i < arr1.length;i++){
    arr[k] = arr1[i];
    k++;
  }
  for(; j < arr2.length; j++){
    arr[k] = arr2[j];
    k++;
  }
  return arr;
}

console.log(Merge([3,8,16,20,25], [4,10,12,22,23]))