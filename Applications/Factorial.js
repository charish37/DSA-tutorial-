function Factorial(num){
    if(num === 0) return 1;
    else {
        return Factorial(num - 1) * num;
    }
}

console.log(Factorial(5))