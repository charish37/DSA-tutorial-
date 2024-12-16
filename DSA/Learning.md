# Data Structures

## Arrays

### Declaration

**Using Square Brackets**
* let arr = []; // empty array 
* let arr = [2,3,4,5];
* let arr = ["sads","sadsad","asads"]

**Using Array Constructor**
Behavior of Empty Slots
Not undefined: While arr[0] may log as undefined, the slot is technically empty, which is different from explicitly setting arr[0] = undefined.
Not Iterable: You cannot use array methods like .map() or .forEach() on these empty slots because they are uninitialized.
Using new Array(length) is best suited for cases where:
You know the exact length of the array.
You plan to initialize the array immediately using methods like .fill() or Array.from().

* let arr = new Array(); // []
* let arr = new Array(5); // [<5 empty slots>]
* let arr = new Array(5).fill(0); // [0,0,0,0,0]
* let arr = new Array(5).fill(() => Math.random()); // [
* let arr = new Array(1,2,3,4); // [1,2,3,4]

**Using Array.of()**
* let arr = Array.of(5); //[5]

**Array.from()**
* let arr1 = Array.from([1,2,3], x => x*2); //[2,4,6]
* let arr2 = Array.from("hello"); // ["h", "e", "l", "l", "o" ]
* let arr3 = Array.from(new Set([1,2,4,2]) // [1,2,4]

Row Major Implementation --> [[1,2,3],[4,5,6]] in row major elements are copied in series in the memory i.e 1 is stored in 100, 2 in 104, 3 in 108, 4 in 112, 5 in 116, 6 in 120 like that it continues. To get size of row major ele Base + ((i * columnSize) + j) * 4
Column Major Implementation --> [1,2,3,4,5,6] --> stored as [1,4,2,5,3,6] i.e 1 in 100, 4 in 104, 2 in 108 and so on.., size of column major is base + ((j * rowSize) + i) * size of dataByte
Row-Major Order:

Data is stored row by row in memory.
Example: For a 2D array, [1, 2, 3] and [4, 5, 6] are stored as [1, 2, 3, 4, 5, 6].
Column-Major Order:

Data is stored column by column in memory.
Example: For the same 2D array, [1, 2, 3] and [4, 5, 6] are stored as [1, 4, 2, 5, 3, 6].

