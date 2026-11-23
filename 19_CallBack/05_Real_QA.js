
//***************. Program 1 starts here ***********************************************
//Below program return 15 as output //

function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);

//***************. Program 1 Ends here ***********************************************

