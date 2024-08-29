/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let mark = prompt("Enter your grade:");
let grade;

if(mark >=90 && mark<=100){
    grade = "A";
}
else if(mark >=80 && mark<=89){
    grade = "B";
}
else if(mark >=70 && mark<=79){
    grade = "C";
}
else if(mark >=60 && mark<=69){
    grade = "D";
}
else if(mark >=0 && mark<=59){
    grade = "F";
}
else{
    grade = "Invalid mark";
}
console.log(grade)