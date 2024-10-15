// 1 + x + (x^2 / 2!) + (x^3 / 3!) + (x^4 / 4!) + ......(x^n / n!)

// function taylorSeries(x, n) {
//     let p = 1, f = 1;
    
//     function recursiveTaylor(x, n) {
//         if (n === 0) return 1;
//         let r = recursiveTaylor(x, n - 1);
//         p = p * x;
//         f = f * n;
//         console.log(`p: ${p}, f: ${f}`);
//         return r + (p / f);
//     }
    
//     return recursiveTaylor(x, n);
// }

// using horn's method
// 1+ x (1 + x/2 (1 + x/3 (1 + x/4)))

function taylorSeries(x,n){
    let s = 1;
    function recursiveTaylor(x,n){
        if(n === 0) return s;
        s = 1 + x/n * s
        return recursiveTaylor(x,n-1);
    }
   return recursiveTaylor(x,n)
}

console.log(taylorSeries(1,10));




