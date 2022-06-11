console.log(`hi`)


//implicit types


//ts KNOWS this is a string, and unlike js, won't let you change it to another type
let hello = "hello";


//explicit types

//you can also explain to ts what type you want it to be
let firstName: string = "dave";
let age: number = 30;

// new data types youre not familiar with
//TUPLE - you can specify more than one data type for whatever you make - 
type stringAndNumber = [string, number]

let x: stringAndNumber = ["hello", 10]


//ENUM - allows you to define a set of constants - all in a single object
enum Continents {
    N_A,//0
    S_A,//1
    Africa,//2
    Asia,//3
    Europe//4
}

//instead of haivng to specify an index as you would in an array, you can use it like a cross between an object and an array
//use object notation to get it, rather than use an index value
let region = Continents.N_A


//INTERFACES - locks down objects, basically. add anything to an object that uses the User interface, and it'll error.
interface User {
    name: string;
    id: number
}


const user: User = {
name: 'jon',
id: 0,
age: 36
}

//Composing multiple types is known as a Union
type WindowStates = "open"| "closed" | "minimized"
type LockStates = "locked" | "unlocked"
type OddNumberUnderTen = 1|3|5|7|9

const windowState: WindowStates = "fuck i dont know"

const myNumber:OddNumberUnderTen = 6



//we want to make a function that returns the length of something 
//strings have length, so does an array of strings


const getLength = (param: string|string[]) => {
    return param.length
}

getLength('poops')//5
getLength(['poo1', 'poo2'])//2
getLength(5)