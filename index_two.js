let state = {
  foreground: "#999999",
  background: "#FFFFFF",
};

const imperativeMakeBackgroundBlack = () => {
  state.background = "#000000";
};
// directly changes the state object outside of its internal scope

const declarativeMakeBackgroundBlack = (state) => ({
  ...state,
  background: "#000000",
});
// takes current state as its input and returns new state with changed value
// without changing the original state

let turtles = ["Tortoise a", "Tortoise b"];

const imperativeAddTurtle = (turtle = turtles.push(turtle));
// changes the turtles external array and returns the length of the new array

const declarativeAddTurtle = turtles => turtle => [...turtles, turtle]
// takes 'array of turtles' and the 'new turtle' as its input. 
// It returns new array of turtles without changing the original array