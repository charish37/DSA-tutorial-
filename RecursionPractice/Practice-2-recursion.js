function Power(base,pow){  
   if(pow === 1) return base;
   else {
    return base * Power(base, pow -1)
   }
}

// console.log(Power(2,5));

function factorial(num) {
    if( num <= 1) return 1;
    else {
       return num * factorial(num -1);
    }


}

// console.log(factorial(5));

function ProductOfArray(arr){
    let result = 1;
    function recursiveProd(arr){
        if(arr.length > 0){
            result *= arr.pop();
            recursiveProd(arr)
        }    
        return result;
    }
    return recursiveProd(arr);
    
    
}

// console.log(ProductOfArray([1,2,3,4,5]))

function RecursiveRange(n) {

     if(n <= 1) return 1;
     else {
        return  n + RecursiveRange(n - 1);
     }
}

// console.log(RecursiveRange(3))

function fib(n) {
   if(n <= 1) return 1;
   
   return fib(n-2) + fib(n-1);
}

// console.log(fib(5))

function fibonacci(n) {
  let arr = [];
  for(let i = 0; i<= n; i++){
    arr[i] = -1;
  }

  function recursiveFib(n) {
    if(n <= 1) {
        if(arr[n] === -1){
            arr[n] = n;
            return n;
        } 
      }
      else {
        if(arr[n-2] === -1){
            arr[n-2] = recursiveFib(n-2);
            
        }
         if(arr[n-1] === -1){
            arr[n-1] = recursiveFib(n-1);
        }

        arr[n] = arr[n-2] + arr[n-1]
       return arr[n-2] + arr[n-1];
    }
  }
  return recursiveFib(n)

}

// console.log(fibonacci(0))

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if(str.length > 1){
    return reverse(str.slice(1)) + str[0];
  } else {
    return str
  }
}

// console.log(reverse("string"))

//palindrome using recursion

function isPalindrome(str) {
   let i = 0;
   let j = str.length-1;
   while(i < j){
    if(str[i] !== str[j]){
      return false;
    }
    i++;
    j--;
   }
   return true;
}

// console.log(isPalindrome("baoob"))

//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindromeRec(str) {
  let reverse;
  function recPalindrome(str){
    if(str.length <= 1) return str;
    return recPalindrome(str.slice(1))+str[0];
  }
  reverse = recPalindrome(str);
  if(str === reverse) return true;
  return false;
}

// console.log(isPalindrome("baoab"))

function isOdd(n){
  if(n % 2 === 0){
    return false
  }  return true;
}

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr,cb) {
  if(arr.length > 0) {
    if(cb(arr[0])) {
      return true
    }
    return someRecursive(arr.slice(1),cb)
  }
    return false;
}

// console.log(someRecursive([4,1,2,3], isOdd));

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
 
  let flattened = [];
  function recuFlatten(arr){
    if(arr.length > 0){
      if(!Array.isArray(arr[0])){
        flattened.push(arr[0])
        recuFlatten(arr.slice(1))
       }
       else {
         recuFlatten([...arr[0],...arr.slice(1)])
      }
    }
    return flattened;
  }
  return recuFlatten(arr);
}

// console.log(flatten([1, [2, [3, 4], [[5]]]]))

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function Capitalize(arr) {
  let finaliseArray = [];

for(let i = 0; i< arr.length; i++){

   let str = arr[i];
    str = str[0].toUpperCase();

  for(let j = 1; j< arr[i].length; j++){
    str = str+arr[i][j] 
  }
 finaliseArray.push(str)
}
return finaliseArray;
}
// console.log(Capitalize(["cars","rome","jack","devil"]));

function Capitalize(arr) {
  let finaliseArray = [];
  function recursiveCap(arr) {
    if(arr.length > 0){
      let val = arr[0];
      val = val[0].toUpperCase()+ val.slice(1)
    
      finaliseArray.push(val);
      recursiveCap(arr.slice(1))
    }
  }
  recursiveCap(arr)
  return finaliseArray;
}

// console.log(Capitalize(["cars","rome","jack", "bats"]))

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum (obj1) {
  let total = 0;
  
  function recursiveSum(obj1) {
    for(let key in obj1){
      if(typeof obj1[key] === 'object' && obj1[key] !== null && !Array.isArray(obj1[key])){
        recursiveSum(obj1[key])
      }
      else if(obj1[key] % 2 === 0){
        total = total + obj1[key];
      }
    }
  }
  recursiveSum(obj1);
  return total;
  
}


var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2))

