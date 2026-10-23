//************************ SEARCH *********************************/
let results = ["pass", "fail", "pass", "error"];


console.log(results.indexOf("fail")); //1)
console.log(results.indexOf("skip")); //-1
// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail"));  //1
console.log(results.lastIndexOf("pass"));  //2
// includes — returns boolean 
console.log(results.includes("error")); // true

//************************ FIND *********************************/

let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp > 20);
console.log(result); //output: 25 => returns the first find

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index); //output: 1 => returns the first find

console.log(nums.findLast(n => n > 20)); //  45
console.log(nums.findLastIndex(n => n > 20)); // 3