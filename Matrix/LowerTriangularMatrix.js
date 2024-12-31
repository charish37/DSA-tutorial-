// [1,0,0,0,0
//  2,3,0,0,0
//  8,9,2,0,0
//  1,3,5,4,0
//  4,5,6,3,2] represented as [a11,a21,a31,a41,a51,a22,a32,a42,a54,a33,a43,a53,a44,a54,a55];

// to find index of a low triangular column major matrix element 

// for eg: for a44 --> [5+4+3]+0
//             a54 --> [5+4+3] + 1
//             a43 --> [5+4] + 1;
//             n+n-1+n-2+...(n-(j-2))+ i-j;
//             first term, a = n, lastterm, l = n-(j-2); middle terms, m = j-1
//             sum of n terms = m/2(a+l) ==> ((j-1)/2)*(n+n-j+2) ==> ((j-1)/2)*(2n-j+2)+(i-j);

class matrix{
    constructor(){
        this.Arr = [];
    }
}

class ColumnMajorLowerTriang{
    constructor(){
        this.myMatrix = new matrix();
        this.size = 3;
    }

    findIndex(i,j,n){
        return ((j-1)/2)*(2*n-j+2)+(i-j)
    }

    set(i,j,val){
        let index = this.findIndex(i,j,this.size)
        if(i>= j) this.myMatrix.Arr[index] = val;
    }

    get(i,j){
        let index = this.findIndex(i,j,this.size);
        if(i>=j) return this.myMatrix.Arr[index];
        else return 0;
    }

    display(){
        console.log(this.myMatrix.Arr)
        for(let i = 1; i<=this.myMatrix.Arr.length/2; i++){
            for(let j=1; j<=this.myMatrix.Arr.length/2;j++){
                // let index = this.findIndex(i,j);
               
                console.log(this.get(i,j))
            }
            console.log(" ")
        }
    }
}

class RowMajorLowerTriang{
    constructor(){
        this.myMatrix = new matrix();
    }

    findIndex(i,j){
        return (i*(i-1)/2+j-1)
    }

    set(i,j,val){
        let index = this.findIndex(i,j)
        if(i>= j) this.myMatrix.Arr[index] = val;
    }

    get(i,j){
        let index = this.findIndex(i,j);
        if(i>=j) return this.myMatrix.Arr[index];
        else return 0;
    }

    display(){
       
        for(let i = 1; i<=this.myMatrix.Arr.length/2; i++){
            for(let j=1; j<=this.myMatrix.Arr.length/2;j++){
                // let index = this.findIndex(i,j);
                console.log(this.get(i,j))
            }
            console.log(" ")
        }
    }
}

// let myColumn = new ColumnMajorLowerTriang();
let myColumn = new RowMajorLowerTriang();
myColumn.set(1,1,1);
myColumn.set(2,1,2);
myColumn.set(2,2,3);
myColumn.set(3,1,4);
myColumn.set(3,2,5);
myColumn.set(3,3,6);

myColumn.display();
