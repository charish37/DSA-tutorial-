function LinearSearch(arr, key){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === key){
                return i;
        }
    }
    return -1
}
 
 
 
 
 // Improvements in linear search
 
 // Transposition

function LinearSearch(arr, key){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === key){
                temp = this.data[i];
                this.data[i] = this.data[i-1];
                this.data[i - 1] = temp;
                return i-1;
        }
    }
    return -1
}

// Move to Head 

function LinearSearch(arr, key){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === key){
            temp = this.data[i];
                this.data[i] = this.data[0];
                this.data[0] = temp;
                return 0;

        }
    }
}