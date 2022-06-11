console.log("hi");
//implicit types
//ts KNOWS this is a string, and unlike js, won't let you change it to another type
var hello = "hello";
//explicit types
//you can also explain to ts what type you want it to be
var firstName = "dave";
var age = 30;
var x = ["hello", 10];
//ENUM - allows you to define a set of constants - all in a single object
var Continents;
(function (Continents) {
    Continents[Continents["N_A"] = 0] = "N_A";
    Continents[Continents["S_A"] = 1] = "S_A";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe"; //4
})(Continents || (Continents = {}));
//instead of haivng to specify an index as you would in an array, you can use it like a cross between an object and an array
//use object notation to get it, rather than use an index value
var region = Continents.N_A;
