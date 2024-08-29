/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = prompt("Enter the age: ");
let isStudent = prompt("Are you a student? (yes/no):").toLowerCase() === "yes";
const fare = 800;

if(age < 10){
    console.log("You can travel for FREE. No Fare");
}
else if(isStudent){
    const discount = fare * 50 /100;
    const amount = fare - discount;
    console.log("Your fare is: ",amount);
}
else if(age >= 60){
    const discount = fare * 15 /100;
    const amount = fare - discount;
    console.log("Your fare is: ",amount);
}
else{
    console.log("Regular ticket fare 800 tk");
}