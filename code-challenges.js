// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//make a function that takes in a string

const coder = (string) => {
    //split the string into an array
    let array = string.split("")
    //map over the array and evaluate each value to return the coded character
    let replacement = array.map(val => {
        if (val === "a"){
            return "4"
        } else if (val === "e"){
            return "3"
        } else if (val === "i"){
            return "1"
        } else if (val === "o"){
            return "0"
        } else {
            return val
        }
    //return replacement joined back into a string
    })
    return replacement.join("")
}

console.log(coder(secretCodeWord1))
console.log(coder(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//create a function that takes in an array
const aFruityFinder = (array) => {
    //create a new array to push a-fruits into
    let newArray = []
    //map over the array
    array.map(value => {
        //if the string-value lowercased contains, an "a"
        if (value.toLowerCase().includes("a")){
            //push the value into the new array
            newArray.push(value)
        }
    })
    //return the new array of "a" containers
    return newArray
}

console.log(aFruityFinder(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

//create a function that takes in an array
const fullHouse = (array) => {
    //sort the array from smallest to greatest
    sorted = array.sort((a,b)=>a-b)
    //here's where the magic happens! looking at a sorted array of 5 nums, if numbers 1&2 are the same AND numbers 3&5 are the same (we don't have to evaluate 4 if it's sorted) then it's a full house! 
    if (sorted[0]===sorted[1] && sorted[2]===sorted[4]){
        return true
    //take that logic, flip it and reverse it (1&3 and 4&5)
    } else if (sorted[0]===sorted[2]&& sorted[3]===sorted[4]){
        return true
    //otherwise bob can't be your uncle and it's not a full house. You lose bud. 
    } else {
        return false
    }
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
//just wanted to make quadrupily sure it worked so I made my own array of alternating numbers
let t= [9,5,9,5,9]
console.log(fullHouse(t))

