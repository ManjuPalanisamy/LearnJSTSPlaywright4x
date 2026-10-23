let fruits = ["bananna", "cherry", "apple"];
console.log(fruits);

//*************************** SORT *****************************************************************************
console.log(fruits.sort()); // Output: [ 'apple', 'bananna', 'cherry' ])

let nums = [10, 5, 20, 15];
console.log(nums);
console.log(nums.sort()); // Output: [ 10, 15, 20, 5 ]
//natual sorting or lexicographic sorting is the default behavior of the sort() method.When you call sort() without any arguments

console.log(nums.sort((a, b) => a - b)); // Output: [ 5, 10, 15, 20 ]) 
//we try to say a - b should be positive value until then sorting should be done.
//How to have reverse sorting order? We can use the same compare function but swap the order of a and b:\
console.log(nums.sort((a, b) => b - a)); // Output: [ 20, 15, 10, 5 ])

let fruits2 = ["banana", "cherry", "apple"];
console.log(fruits2.sort((a, b) => a.localeCompare(b))); // Output: [ 'apple', 'banana', 'cherry' ])

//In above examples, please note, () is added for a,b

//*************************** SLICE *****************************************************************************
console.log("Before SLICE: ", nums);    // Output: Before SLICE:  [ 20, 15, 10, 5 ]
console.log(nums.slice(1, 3)); // Output: [ 15, 10 ], how output is [15, 10], starting from index 1, and ending at index 3, but not including index 3.
console.log(nums.slice(2, 3)); //  output: [ 10 ]  , how output is [10], starting from index 2, and ending at index 3, but not including index 3.
//slice returns 
console.log(nums.slice(1)); // output: [ 15, 10, 5 ]
console.log(nums.slice(-1)); // Output: [ 5 ]
//slice only moves forward, it does not move backward. If you want to move backward, you can use negative indexing.
//For example, nums.slice(-2) will return the last two elements of the array.
