const isApi = function (tool) {
  if (tool === "NodeJs") {
    return "yes";
  } else {
    return "no";
  }
};

const isApiTernary = (tool) => (tool === "NodeJs" ? "yes" : "no");

console.log(isApi("NodeJs") === isApiTernary("NodeJs"));
console.log(isApi("NodeJs") === isApiTernary("ReactJs"));
console.log(isApi("ReactJs") === isApiTernary("ReactJs"));
