
const browsers = ["Chrome", "Firefox", "WebKit"];
console.log(browsers[0]); // Output: Chrome
console.log(browsers.at(0)); // Output: Chrome
console.log(browsers.at(1)); // Output: Firefox
console.log(browsers.at(2)); // Output: WebKit
console.log(browsers.length); // Output: 3
console.log(browsers.at(-1));  // Output: WebKit
console.log(browsers.at(-2));  // Output: Firefox))
console.log(browsers[-2]); // This will return "undefined" because negative indexing is not supported in JavaScript arrays.
console.log(typeof browsers); // Output: object


//Another way of define: using let
let browsers2 = new Array("Chrome", "Firefox", "WebKit");
console.log(browsers2[0]); // Output: Chrome
console.log(browsers2[1]); // Output: Firefox
console.log(browsers2[2]); // Output: WebKit

//Modifying an array element
browsers2[1] = "Safari"; 
console.log(browsers2[1]); // Output: Safari

console.log(browsers2); //output: [ 'Chrome', 'Safari', 'WebKit' ]

browsers.push(5);
console.log(browsers); //output: [ 'Chrome', 'Firefox', 'WebKit', 5 ]

browsers.pop();
console.log(browsers); //output: [ 'Chrome', 'Firefox', 'WebKit' ]

browsers.shift();
console.log(browsers); // output: [ 'Firefox', 'WebKit' ]

browsers.unshift("Edge");
console.log(browsers); // output: [ 'Edge', 'Firefox', 'WebKit' ]

//For each element in the array, we can use a for loop to iterate through the array and print each element:
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Alternative way to iterate through an array using forEach:
arr.forEach(element => {
    console.log(element);
});

// Using splice to remove elements from an array:
arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log(arr); // Output: [1, 4, 5]
//map
let scores = [10, 20, 30, 40, 50];


//filter

