// a1 a2 a3 a4 a5
// a1[4,5,6,3,2
// a2 0,1,3,5,4
// a3 0,0,8,9,2
// a4 0,0,0,2,3
// a5 0,0,0,0,1] represented as [a11,a12,a13,a14,a15,a22,a23,a24,a25,a33,a34,a35,a44,a45,a55];

// to find index of a upper triangular row major matrix element 

// for eg: for a44 --> [5+4+3]+0
//             a45 --> [5+4+3] + 1
//             a34 --> [5+4] + 1;
//             n+n-1+n-2+...(n-(j-2))+ j-i;
//             first term, a = n, lastterm, l = n-(j-2); middle terms, m = j-1
//             sum of n terms = m/2(a+l) ==> ((j-1)/2)*(n+n-j+2) ==> ((j-1)/2)*(2n-j+2)+(j-i);

class matrix{
    constructor(){
        this.Arr = [];
    }
}

class RowMajorUpperTriang{
    constructor(){
        this.myMatrix = new matrix();
        this.size = 3;
    }

    findIndex(i,j,n){
        return ((i-1)/2)*(2*n-i+2)+(j-i)
    }

    set(i,j,val){
        let index = this.findIndex(i,j,this.size)
        if(i<= j) this.myMatrix.Arr[index] = val;
    }

    get(i,j){
        let index = this.findIndex(i,j,this.size);
        if(i<=j) return this.myMatrix.Arr[index];
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

class ColumnMajorUpperTriang{
    constructor(){
        this.myMatrix = new matrix();
    }

    findIndex(i,j){
        return (j*(j-1)/2+i-1)
    }

    set(i,j,val){
        let index = this.findIndex(i,j)
        if(i<= j) this.myMatrix.Arr[index] = val;
    }

    get(i,j){
        let index = this.findIndex(i,j);
        if(i<=j) return this.myMatrix.Arr[index];
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

 let myColumn = new ColumnMajorUpperTriang();
// let myColumn = new RowMajorUpperTriang();
myColumn.set(1,1,1);
myColumn.set(1,2,2);
myColumn.set(1,3,4);
myColumn.set(2,2,3);
myColumn.set(2,3,5);
myColumn.set(3,3,6);

myColumn.display();
