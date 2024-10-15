function Hanoi(n,A,B,C) {
   if(n > 0) {
    Hanoi(n-1,A,C,B);
    console.log(A, "to", C)
    Hanoi(n-1,B,A,C)
   }
}

console.log(Hanoi(3,1,2,3));