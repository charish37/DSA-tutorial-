function BinarySearch(arr,key) {
   let low = 0;
   let high = arr.length - 1;
   

   while(low <= high){
    let mid = Math.floor((low + high) / 2);
      if(arr[key] < arr[mid]){
        high = mid - 1;
      } else if (arr[key] > arr[mid]){
        low = mid + 1;
      } else if (arr[key] === arr[mid]) {
        return mid;
      }
   }

   return -1;
}

console.log(BinarySearch([1,2,4,6,8,10]), 7)