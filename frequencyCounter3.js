// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// time complexity O(N)
// sameFrequency(182,281)


function sameFrequency(num1,num2) {
   let str1 = num1.toString();
   let str2 = num2.toString();
   if(str1.length !== str2.length) return false;

   let freqObj1 = {};
   let freqObj2 = {};

   for(let value of str1){
     freqObj1[value] = (freqObj1[value] || 0) + 1;
   
   }

   for(let value of str2){
    freqObj2[value] = (freqObj2[value] || 0) + 1;
   }

   for(let key in freqObj1){
    if(!key in freqObj2) return false;
    if(freqObj1[key] !== freqObj2[key]) return false;
   }
   return true;
}

console.log(sameFrequency(1822,2813));