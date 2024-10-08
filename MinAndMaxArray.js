//Traditional way --> TC O(n), SC - O(1)

function MinAndMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i< arr.length; i++){
        min = Math.min(min,arr[i]);
        max = Math.max(max,arr[i]);
    }

    return [min,max];

}

// Divide And Conquer approach -->  TC O(3n/2), SC(O logn)

function MinAndMax(arr,low,high){
    // if there's only one element
    if(low === high){
        return [arr[low],arr[low]]
    }
   
    // If there are two elements
    if(high === low + 1){
       return arr[low] < arr[high] ? [arr[low], arr[high]] : [arr[high], arr[low]]
    }

    //Divide array into two halves

    let mid = Math.floor((low + high) / 2);
    let leftMinMax = MinAndMax(arr,low,mid);
    let rightMinMax = MinAndMax(arr,mid+1,high);

    //combine the results

    let min = leftMinMax[0] < rightMinMax[0] ? leftMinMax[0] : rightMinMax[0];
    let max = leftMinMax[1] > rightMinMax[1] ? leftMinMax[1] : rightMinMax[1];
    

    return [min,max]
}

// pairwise comparison --> TC O(3n/2) space O(1)

function MinAndMax(Arr){
    let min,max;
    let i =0;

    if(arr.length %2 !== 0){
        min = max = arr[0];
        i = 1;
    } else {
        if(arr[0] < arr[1]){
            min = arr[0];
            max = arr[1];
        } else {
            min = arr[1];
            max = arr[0];
        }
        i = 2; // start loop from 3rd element
    }

    // compare ele in pairs

    while(i < arr.length - 1){
        if(arr[i] < arr[i + 1]){
            min = Math.min(min,arr[i])
            max = Math.max(max,arr[i+1])
        } else {
            max = Math.max(max, arr[i])
            min = Math.min(min,arr[i+1])
        }
        i += 2;
    }

    return [min, max]

}

// The pairwise comparison method is efficient with fewer comparisons, while the divide-and-conquer approach may be suitable for a recursive implementation.

let arr = [1,4,5,2,6,4,8,12];

console.log(MinAndMax(arr, 0,arr.length - 1));
