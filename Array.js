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
        return undefined;
    }


}

let arr = new Array();
console.log(arr.push(5));
console.log(arr.push(7));
arr.push(34);
arr.push(342);
arr.push(67);
// console.log(arr.pop());
console.log(arr.shift(), "--> shift")
console.log(arr.unshift(10));
console.log(arr.insert(2,22))
console.log(arr);
