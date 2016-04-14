// Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.
var compareStringLength = function(o1,o2) {
  if (o1.length < o2.length) {return 1;}
  else if (o1.length === o2.length) {
    return 0;
  }
  else {return -1;}
}
console.log(["Charles","Ziad"].sort(compareStringLength));

// Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.
var compareNames = function(o1,o2) {
  if (o1.name.length < o2.name.length) {return 1;}
  else if (o1.name.length === o2.name.length) {
    return 0;
  }
  else {return -1;}
}
var compareEmails = function(o1,o2) {
  if (o1.email > o2.email) {return 1;}
  else if (o1.email === o2.email) {
    return 0;
  }
  else {return -1;}
}
var arrayOfObjects = [
  {
    name: "Charles Jackson",
    email: "gaudreaujacksoncharles@gmail.com"
  },
  {
    name: "Ziad Saab",
    email: "ziad.saab@gmail.com"
  }
];
console.log(arrayOfObjects.sort(compareNames));
console.log(arrayOfObjects.sort(compareEmails));

// Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.
var squareOfNumber = function(number) {
  return number * number;
}
var numbers = [9,3,12,63,32,4];
console.log(numbers.map(squareOfNumber));

// Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.
var anotherArrayOfObjects = [
  {
    teacher: "Ziad Saab",
    num: 14
  },
  {
    teacher: "Charles Jackson",
    num: 8
  }
];
var squareOfObjectNum = function(objectSample) {
  return objectSample.num * objectSample.num;
}
console.log(anotherArrayOfObjects.map(squareOfObjectNum));

// In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order. Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers. The end result should let me do something like this:
var createOperation = function(operationTitle) {
  if (operationTitle === "add") {
    return function(a, b) {
      return a + b;
    }
  }
  else if (operationTitle === "sub") {
    return function(a, b) {
      return a - b;
    }
  }
  else if (operationTitle === "mult") {
    return function(a, b) {
      return a * b;
    }
  }
  else if (operationTitle === "div") {
    return function(a, b) {
      return a / b;
    }
  }
  else {
    return 0;
  }
}
console.log(createOperation("mult")(2,3));
