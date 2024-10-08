// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letter of another, such as cinema formed by iceman.

function ValidAnagram(str1, str2){
 if(str1.length !== str2.length) {
    return false;
 }

 let freqObj1 = {};
 let freqObj2 = {};

 for(let val of str1){
    freqObj1[val] = (freqObj1[val] || 0) + 1;
 }

 for(let val of str2){
    freqObj2[val] = (freqObj2[val] || 0) + 1;
 }

 for(let key in freqObj1){
    if(! key in freqObj2) return false;
    else if(freqObj1[key] !== freqObj2[key]) return false
 }
 return true;
}

console.log(ValidAnagram('texttwisttime', 'timetwisttext'))