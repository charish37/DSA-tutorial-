class Matrix {
    constructor() {
        this.Arr = [];
    }
}

class DiagonalMatrix{
    constructor() {
        this.myMatrix = new Matrix();
    }
   
    set(i,j, val){
      if(i == j) {
        this.myMatrix.Arr[i-1] = val;
      }
    }

    get(i,j){
        if(i==j) return this.myMatrix.Arr[i-1];
        return 0;
    }

    display(){
        let n = this.myMatrix.Arr.length;
        for(let i = 1; i<= n; i++){
            for(let j = 1; j<= n; j++){
                if(i == j) console.log(this.get(i,j));
                else console.log(0)
            }
            console.log(" ")
        }
    }
}

let myDiagonalMatrix = new DiagonalMatrix();

myDiagonalMatrix.set(1,1,4);
myDiagonalMatrix.set(2,2,5);
myDiagonalMatrix.set(3,3,7);

console.log(myDiagonalMatrix.display());
