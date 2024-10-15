function Exponential(num,power){
    if(power === 0) return 1;
    else {
       return num * Exponential(num,power -1)
    }
}

console.log(Exponential(2,1))