const expression = (input) => input.toLowerCase();
const expression2 = function (input) {
  return input.toLowerCase();
};

const statement = () => console.log("js is one of my favorites");
const statement2 = function () {
  console.log("js is one of my favorites");
};

console.log(expression("JAVASCRIPT"));
console.log(expression2("JAVASCRIPT"));
statement();
statement2();
