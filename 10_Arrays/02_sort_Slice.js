let fruits = ["bananna", "cherry", "apple"];
console.log(fruits);
console.log(fruits.sort()); // Output: [ 'apple', 'bananna', 'cherry' ])

let nums = [10, 5, 20, 15];
console.log(nums);
console.log(nums.sort()); // Output: [ 10, 15, 20, 5 ]
//(sorts as strings by default) This is because the default sort order is according to string Unicode code points.To sort numbers correctly, you need to provide a compare function.natual sorting or lexicographic sorting is the default behavior of the sort() method.When you call sort() without any arguments, it converts the elements to strings and compares their sequences of UTF - 16 code unit values.

console.log(nums.sort((a, b) => a - b)); // Output: [ 5, 10, 15, 20 ]) we try to say a-b should be positive value until then sorting should be done.
//How to have reverse sorting order? We can use the same compare function but swap the order of a and b:\
console.log(nums.sort((a, b) => b - a)); // Output: [ 20, 15, 10, 5 ])

let fruits2 = ["banana", "cherry", "apple"];
console.log(fruits2.sort((a, b) => a.localeCompare(b))); // Output: [ 'apple', 'banana', 'cherry' ])

//In above examples, please note, () is added for a,b

console.log(nums.slice(1, 3)); // Output: [ 10, 15 ] (slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.))
console.log(nums.slice(1)); // output: [ 10, 15, 20 ] (slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.))
console.log(nums.slice(-1)); // Output: [ 5 ] (slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.)
//slice only moves forward, it does not move backward. If you want to move backward, you can use negative indexing. For example, nums.slice(-2) will return the last two elements of the array.