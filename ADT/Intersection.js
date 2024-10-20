// If lists passed are not sorted

function Intersection1(arr1, arr2){
  let arr = [];

  for(let i =0; i< arr1.length; i++) {
    for(let j =0; j< arr2.length; j++) {
        if(arr1[i] === arr2[j]){
            arr.push(arr1[i])
        }
    }
  }
  return arr;
}

// console.log(Intersection1([3,5,10,4,6], [12,4,7,2,5]))

// If the lists passed are sorted

function Intersection2(arr1,arr2) {
    let i =0;
    let j = 0;
    let arr = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            i++;
        } else if(arr1[i] === arr2[j]){
            arr.push(arr1[i]);
            i++;
            j++;
        } else {
            j++;
        }
    }
    return arr;
}

console.log(Intersection2([3,4,5,6],[2,4,5,7,6]))