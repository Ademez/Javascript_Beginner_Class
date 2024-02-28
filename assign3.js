// 1.
const user = Number(prompt("Enter your age: "))
if (user > 17) {
    alert ('You are old enough to drive')
}
else {
    alert(`You are left with ${18-user}years to drive.`)
}

// 2.
const myAge = 20
const yourAge = 30

if (myAge > yourAge){
    console.log("I am older tham you")
}
else {
    console.log("You are older than me")
}

// 3.
const age = Number(prompt("Enter your age:"))
if (age === 30){
    alert("You are 5 years older than me.")
}

// 4.
let a = 4;
let b = 3;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

// Using Tenary Operator
 a = 4;
 b = 3;

let result = a > b; 'a is greater than b' ; 'a is less than b';
console.log(result);

// 5.
let myNumber
if (myNumber % 2 == 0){
    console.log(`${myNumber} is even`)
}
else {
    console.log(`${myNumber} is odd`)
}

const num = Number(prompt("Enter a number: "))
if (num % 2 == 0){
    alert (num + " is an even number")
}
else {
    alert (num + " is an odd number") 
}


// LEVEL 2

// 1.
let grade = Number(promt("Enter your scores:"))

if(grade > 79){
    alert("A")
}
else if (grade > 69){
    alert("B")
}
else if (grade > 59){
    alert("C")
}
else if (grade > 49){
    alert("D")
}
else {
    alert("F")
}

// 2.
let season = prompt("Enter month of the year:")
if (season == September || October || November){
    alert("Autumn")
}
else if(season == December || January || Febuary){
    alert("Winter")
}
else if (season == March || April || May){
    alert("Spring")
}
else {
    alert("Summer")
}

// 3.
let day = prompt("Enter day of the week:")
if (day == "Saturday" || day == "Sunday"){
    alert("Day is a weekend")
}
else {
    alert("Day is a weekday")
}

// LEVEL 3
let month = prompt("Enter a month:")
if (month == "January" || month=="March" || month=="May" || month=="July" || month=="August" || month=="October" || month=="December"){
    alert("31 days")
}
else if(month === "April" || month==="June" || month==="September" || month==="November"){
    alert("30 days")
}
else {
    alert("28 days")
}