// factorial model


function Factorial(num){
    if(num === 0) return 1;
    return num * Factorial(num -1)
}

function Combination(n,r) {
  let num,den;

  num = Factorial(n);
  den = Factorial(r) * Factorial(n-r)

  return num / den;
}

console.log(Combination(5,3))


// using recursion

function Combination1(n,r) {
  
    if(n === r || r === 0) return 1;
    return Combination(n-1,r) + Combination(n-1,r-1);
}

console.log(Combination1(4,2))