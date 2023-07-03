// Cycles & Arrays in declarative form

const myLanguages = ["JavaScript", "Python 2", "Java", "Python 3"];

const isPython = (input) => input.toLowerCase().includes("python");

const getPython = (input) => input.filter(isPython);

console.log(getPython(myLanguages));
