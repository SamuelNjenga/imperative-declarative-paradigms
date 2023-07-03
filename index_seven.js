// Cycles & Arrays in imperative form
const myLanguages = ["JavaScript", "Python", "Java"];

const getPython = function () {
  let python = [];
  for (let i = 0; i < myLanguages.length; i++) {
    if (myLanguages[i].toLowerCase().includes("python")) {
      python.push(myLanguages[i]);
    }
  }
  return python;
};
console.log(getPython());
