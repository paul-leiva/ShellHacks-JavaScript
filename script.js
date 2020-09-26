console.log("Hello")
console.log('2' == 2) // true (no type comparison)
console.log('2' === 2) // falsee (type comparison)
console.log(3 + 3) // = 6
console.log(3 * 3) // 9
console.log(3 / 3) // 1
console.log(3 % 3) // 0
console.log(5 ** 3) // 5^3 = 125
console.log("Hello world!"[4]) // "o"
console.log("What" + "is" + "your" + "name") // String concatenation
console.log(!(50 > 10))
console.log(null)
console.log(false || true)

var x // global variable (accessible everywhere)
console.log(x)
console.log(typeof x)
// console.log("What is " + $(100 / 3) + " your name?") Try backtics

{
    var name1 = "Tony global" // global variable
    let name2 = "Tony local" // local variable (accesible only in brackets)
}
console.log(name1)
// console.log(name2) // not defined
let PI = 3.14
const PI2 = 3.14 // constant (cannot be re-assigned)
PI = 3
// PI2 = 3 // TypeError: Assignment is constant variable
console.log(PI + ";" + PI2)

let count = -5
while (count < 0) {
    console.log(count) // stops printing at -1
    count++;
}

if (10 > 0) {
    console.log("10 > 0")
}
else {
    console.log("10 < 0")
}

let weather = "cloudy"
switch(weather) {
    case "cloudy":
        console.log(`It's ${weather}`)
        console
    case "rainy":
        console.log("It's rainy")
        break;
    case "sunny":
        console.log("It's sunny")
        break;
    default:
        console.log("We don't know")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 0
let j = 0

console.log("i = " + i++) // i = 0 (adds after)
console.log("j = " + ++j) // j = 1 (adds first)

// 3 Object Types

// (1) Arrays

const numbers = [1, 2, 3, 4]
console.log(sum(...numbers)) // SPREAD operator (...)

const newNumbers = [...numbers, 6, 7, 8]
console.log(newNumbers)

const colors = ['red', 'green', 'blue']
const [tom, tiny] = colors
console.log(tom + " " + colors[1])

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = [...nums, 11, 12, 13, 14, 15, 16]
console.log(newNums)

// (2) Objects
const myCar = {
    make: "Tesla", // properties
    model: "Roadster",
    year: 2024
}
myCar.make = "BMW"

console.log(myCar)
console.log(myCar.make + " " + myCar.model + " " + myCar.year)

// (3) Functions

function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

//let car2 = new Car("BMW", "i3". 2021)

//console.log(car2.year)

let name = "Zackary"

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.includes("ack"))
console.log(name.includes("ackd"))
console.log("*-*".repeat(10))
console.log("You won a prize!")
console.log("*-*".repeat(10))

let total = 30.42195729
console.log(total.toFixed(3)) // round to 3 decimals

function addStudents() {

}

let classList = (year, ...args) => { // ARROW FUNCTION
    students = "Graduating class of " + year + ": "

    args.map((student, index) => {
        students += student + ", "
    })
    return students

    //args.map(addStduents)
}

console.log(classList(2020, "Zack", "Tom", "Tony"))

function sum(x, y, z) {
    return x + y + z
}


const user1 = {
    person: "Tom",
    id: 1234
}

let { person, id } = user1
console.log(person)

