function Sum(num){
    if( num === 0) {
       return 0
    } 
        return num + Sum(num-1);
}

console.log(Sum(5))