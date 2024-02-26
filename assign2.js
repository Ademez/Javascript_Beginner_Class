// 1.
function fullName(){
    return("My full name is: Ademola Oladosu")
}

console.log(fullName())

// 2.
function fullName(firstName, lastName){
    return (firstName + lastName)
}

console.log(fullName("Ademola", " Oladosu"))

// 3.
function addNumbers(a, b){
    return a + b
}

console.log(addNumbers(3, 4))

// 4.
function areaOfRectangle(length, width){
    return length * width
}

console.log(areaOfRectangle(6,5))

// 5.
function perimeterOfRectangle(length, width){
    return   2*(length + width)
}

console.log(perimeterOfRectangle(12, 14))

// 6.
function volumeOfRectPrism(length, width, height){
    return  (length * width * height)
}

console.log(volumeOfRectPrism(5,6,7))

// 7.
function areaOfCircle(r){
    const π = 3.14
    return area = π * r * r
}

console.log(areaOfCircle(7))      

// 8.
function circumOfCircle(r){
    const π = 3.14
    return  2*π*r
}

console.log(circumOfCircle(7))


// 9.
function convertCelsiusToFahrenheit(oC){
    return oF = (oC * 9/5) + 32
}

console.log(convertCelsiusToFahrenheit(100))

// 10.
function calculateBmi(weight, height){
     bmi = weight/(height * height)
     if (bmi < 18.5){
        return ("Underweight")
     }
     else if (bmi < 25) {
        return ("Normal weight")
     }
     else if (bmi < 30){
        return ("Overweight")
     }
     else
     {return ("Obese")}
}

console.log(calculateBmi(110, 2))


// 11.
function checkSeason(month){
    return month
}

console.log(checkSeason("Autumn"))
console.log(checkSeason("Winter"))
console.log(checkSeason("Spring"))
console.log(checkSeason("Summer"))

// 12.
function findMax(a, b, c){
    if (a >= b && a >= c){
        return a
    }
    else if (b >= c && b >= a ){
        return b
    }
    else{
        return c
    }

}

console.log(findMax(0, 10, 5))
console.log(findMax(0,-10,-2))
