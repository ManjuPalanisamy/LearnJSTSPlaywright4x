function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}


// // First Way
// function CompleteOrderPrint(){
//     console.log("Normal Fn");
// }

// placeOrder("Burger", CompleteOrderPrint);


// Second Way - Anonymous Fn
// placeOrder("Burger", function(){
//     console.log("Order is ready!, pick it up!");
// });

function callback()
{
    console.log("I am callback function");

}


// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});


//test('has title', async ({ page }) => {
//});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });