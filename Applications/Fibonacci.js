// function Fib(n) {
//    if(n <= 1) return n;
//    return Fib(n-2) + Fib(n-1);
// }

// console.log(Fib(10));

// using iterative loop

// function Fib(n) {
//     let sum;
//     let t0 = 0;
//     let t1 = 1;
//     if(n<= 1) sum =n;
//     for(let i = 2; i<= n; i++){
        
//         sum = t0+t1;
//         t0 = t1;
//         t1 = sum;
//     }
//     return sum;
// }

// memoization to reduce number of recursive calls

function Fib(n) {
    let F = [];
    for(let i = 0; i<= n; i++){
        F[i] = -1;
    }

    function recursiveFib(n){
        if(n <= 1) {
            if(F[n] === -1) {
                F[n] = n;
                return n;
            }
          } else {
            if(F[n-2] === -1){
               F[n-2] = recursiveFib(n-2);
    
            }
            if(F[n-1] === -1){
                F[n-1] = recursiveFib(n-1);
            }
            F[n] = F[n-1] + F[n-2];
            return F[n-2] + F[n-1];
          }
    }
  return recursiveFib(n)
     
    
}

console.log(Fib(4))