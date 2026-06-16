// SAYLANI Assignment # 3
// MARK SHEET

// Taking the Marks of all 7 Subjects from User

let english = +prompt("Enter the marks of English:");
let mathematics = +prompt("Enter the marks of Mathematics:");
let physics = +prompt("Enter the marks of Physics:");
let chemistry = +prompt("Enter the marks of Chemistry:");
let computer_science = +prompt("Enter the marks of Computer Science:");
let urdu = +prompt("Enter the marks of Urdu:");
let islamiat = +prompt("Enter the marks of Islamiat:");

// Calculating Sum and Average
let total = english + mathematics + physics + chemistry + computer_science + urdu + islamiat;
let average = total / 7;

// Giving Grade with the help of Nested if-else
let grade;

if (average>=80){
    grade = 'A+'
}else if (average >= 70){
    grade = 'A'
}else if (average >= 60){
    grade = 'B'
}else if (average>=50){
    grade = 'C'
}else if (average>=40){
    grade = 'D'
}else {
    grade = 'Fail'
}

// Writing the results in Brower
document.write(`Total: ${total}`);
document.write(`<br>Average: ${average.toFixed(2)}`);
document.write(`<br>Grade: ${grade}`);