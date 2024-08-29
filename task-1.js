/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = prompt("Enter a your burger price:");
let coke = 30;
if(burgerPrice > 500){
    console.log("A coke is free");
}
else{
    console.log("Buy a coke yourself and price is ", coke, "tk");
}