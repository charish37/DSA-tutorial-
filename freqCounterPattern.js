function same(arr1,arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i]**2);
        console.log(arr1[i] ** 2, "power")
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1);
        console.log(arr2);
    }
    return true;
}

console.log(same([1,2,3,2],[4,9,1]));