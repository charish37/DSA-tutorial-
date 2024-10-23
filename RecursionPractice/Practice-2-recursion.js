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

// Flattened the array

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

function CapitalizeFirst(arr) {
  return arr.map((item) => {
    return [(item[0].toUppercase)+item.slice(1),CapitalizeFirst(arr.slice(1))] 
  })
}

console.log(CapitalizeFirst(["shdj","ASafs"]))