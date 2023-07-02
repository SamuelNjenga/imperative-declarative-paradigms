const myFunction = function (event) {
  event.preventDefault();
};
// function is stored in the variable myFunction

document.getElementById("#turtleLink").addEventListener("click", myFunction); // use function as a value here.
// myFunction is used as an argument for addEventListener function
