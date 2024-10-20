class Array{
    constructor(){
        this.data = [];
        this.length = 0;
    }

    push(val){
       this.data[this.length] = val;
       this.length++;
       return this.length; 
    }

    pop(){
        if(this.length === 0) return undefined;
        else {
            let removedElement = this.data[this.length - 1];
            this.length --;
            this.data.length = this.length; // remove deleted element from array
            return removedElement;
        }
    }

    get(index) {
        if(index >= 0 && index < this.length){
            return this.data[index]
        } 
        return undefined;
    }

    set(index,value) {
        if(index >= 0 && index < this.length){
            this.data[index] = value;
            return true; // true for success
        } 
        return false;
    }

    size() {
        return this.length;
    }

    insert(index,value){ // O(n)
        if(index >= 0 && index < this.length){
            for(let i = this.length; i >= index; i--){
                this.data[i] = this.data[i-1];
            }
            this.data[index] = value;
            this.length ++;
            return this.length;
        }
    }

    removeAt(index) {    // O(n)
       if(index >= 0 && index < this.length){
         const removedElement = this.data[index];
         for(let i = index; i< this.length ; i++){
            this.data[i] = this.data[i + 1];
         }
         this.length --;
         this.array.length = this.length;
         return removedElement;
       } 
       return undefined;
    }

    display() {
        for(let i = 0; i< this.length; i++){
            console.log(this.data[i])
        }
    }

    shift(){
        if(this.length > 0) {
          let removedElement = this.data[0];
          for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i+1];
          }
          this.length --;
          this.data.length = this.length;
          console.log(this)
          return removedElement;
        }
        return undefined;
    }

    unshift(value){
        for(let i = this.length; i >= 0; i--){
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = value;
        this.length++;
        return true;
    }

    max() {
        let maxVal = this.data[0];
        for(let i = 1; i< this.length; i++){
            if(this.data[i] > maxVal) maxVal = this.data[i]
        }
        return maxVal;
    }

    min() {
        let minVal = this.data[0];
        for(let i = 1; i< this.length; i++){
            if(this.data[i] < minVal) minVal = this.data[i]
        }
        return minVal;
    }

    sum() {
        let total = 0;
        for(let i = 0; i< this.length; i++){
            total += this.data[i];
        }
        return total;
    }

    sum(Array,n){
        if(n < 0) return 0
        return Array[n] + sum(Array, n-1)
    }

    avg(){
        return sum() / this.length;
    }

    search(key){
        for(let i = 0; i< this.length; i++){
            if(key == this.data[i]){
                // Transposition
                // temp = this.data[i];
                // this.data[i] = this.data[i-1];
                // this.data[i - 1] = temp;
                // return i-1;

                // Move to Front 

                // temp = this.data[i];
                // this.data[i] = this.data[0];
                // this.data[0] = temp;
                // return 0;

                return i;
            }
        }
        return -1;
    }

    reverseOne() {
        let temp = [];
        for(let i = 0, j = this.length; j >= 0; i++, j-- ){
            temp[i] = this.data[j]
        }
        for(let i = 0; i< this.length; i++){
            this.data[i] = temp[i]
        }
        return this.data;
    }

    reverse2() {
        for(let j = this.length - 1, i = 0; i<j; j--, i++){
           let temp = this.data[i];
           this.data[i] = this.data[j];
           this.data[j] = temp;
        }
        return this.data;
    }

    // Inserting an element in a sorted array

    insertInSortedArray(arr,val){
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] > val){
                arr[i+1] = arr[i];
                arr[i] = val
            } 
        }
        return arr;
    }

    isSortedArray(arr) {
     for(let i = 0; i< arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
     }
     return true;
    }

    negativeOnLeft(arr) {
        let i = 0;
        let j = arr.length - 1;
        while(i < j){
           
           while(arr[i] < 0) i++;
           while(arr[j] >= 0) j--;
           console.log(arr[i] , arr[j], i ,j)
           if(i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
           }
        }

        return arr;
    }
}

let arr = new Array();
console.log(arr.push(5));
console.log(arr.push(7));
arr.push(34);
arr.push(342);
arr.push(67);
arr.push(45)
// console.log(arr.pop());
console.log(arr.shift(), "--> shift")
console.log(arr.unshift(10));
console.log(arr.insert(2,22))
console.log(arr.max(), "----> max")
console.log(arr);
console.log(arr.reverse2(), "---> reverse")
console.log(arr.insertInSortedArray([1,4,7,9],5))
console.log(arr.isSortedArray([1,2,3,4,5,7]), "is sorted array");
console.log(arr.negativeOnLeft([-1,3,-2,4,-5,1,-9,8]))
