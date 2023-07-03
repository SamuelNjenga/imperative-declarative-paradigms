// Object Oriented Programming
// Class definition in JS

class myClass {
  constructor(myValue) {
    this.myValue = myValue;
  }
  myMethod() {
    this.myValue = this.myValue.toUpperCase();
  }
}

const myObject = new myClass("turtle");
myObject.myMethod();
console.log(myObject.myValue);
