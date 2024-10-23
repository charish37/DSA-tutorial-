// maximum value in the array

// function maxVal(arr,n){
//    let x;
//    if(n === 1){
//     return arr[0];
//    } else {
//     x = maxVal(arr,n-1);
//     if(x > arr[n-1]){
//         return x
//     } else {
//         return arr[n-1];
//     }
//    }
// }

// let arr = [10,20,30,50,100];
// console.log(maxVal(arr,5))

function fun(i)
{
   // The statement “return i++;” returns the value of i only as it is a post-increment. 
    if (i % 2 == 1) 
        return (i++);
    else
        return fun(fun(i - 1));
}
 
// Driver code
// console.log(fun(200)); // 199

function MergedList(list1, list2) {
    let i = 0;
    let j = 0;
    let mergedList = [];
    if(list1.length === 0){
        if(list2.length === 0){
            return mergedList;
        } else return list2;
    }
    if(list2.length === 0 && list1.length !== 0) return list1;
    while(i < list1.length && j < list2.length) {
        if(list1[i] < list2[j]){
      mergedList.push(list1[i]);
      i++;
    } else {
        mergedList.push(list2[j]);
        j++;
    }
    }

    for(; i< list1.length; i++ ){
        mergedList.push(list1[i])
    }

    for(; j < list2.length; j++) {
        mergedList.push(list2[j])
    }

    return mergedList;
   
};

// console.log(MergedList([3,4,5],[1,2,4]));

function SumOfVal(arr){
    let sum = 0;
    function Sum(arr) {
        if(arr.length > 0){
          
          sum = sum + arr.pop();
          Sum(arr)
        }
        return sum;
      }
     return Sum(arr)
}


// console.log(SumOfVal([1,2,3,4,5,6]))

function FindTriplets(arr){
    for(let i = 0; i< arr.length; i++){
        
    }

    return false;
}

// console.log(FindTriplets([1,3,6,5,8]));

function NaiveString(str, word) {
    let strIndex = 0;
    let i = 0;
  while( i < str.length){
    if(str[i] === word[strIndex]) {
        
       strIndex++;
       i++;
    }  else {
        i++;
        strIndex = 0;
    }

   if(strIndex === word.length){
        return true;
    }
  }
  return false;
}

console.log(NaiveString("wzomzomg","omg"))