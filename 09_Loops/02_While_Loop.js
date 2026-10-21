//Use while loop, when you don't know how many times you want to loop through a block of code:

let age = 10;
while (true) {
    if (age > 13) {
        break;
    }
    else {
        console.log(age+" - printed age");
    }
    age++;
}

