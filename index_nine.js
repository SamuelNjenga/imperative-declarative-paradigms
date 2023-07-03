// Cycles & Arrays in @7urtle/
// Shorter, more elegant, functional code 

const { compose, lowerCaseOf, includes, filter } = require("@7urtle/lambda");

const myLanguages = ["JavaScript", "Python 2", "Java", "Python 3"];

const isPython = compose(includes("python"), lowerCaseOf);
// composition of point-free expression, compose returns a function

const getPython = filter(isPython);
//point-free expression, filter returns a function

console.log(getPython(myLanguages)); //still the same
