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
type WindowStates = 
