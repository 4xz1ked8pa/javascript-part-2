/* the utility functions */
function checkType(type) {
  if (type === "home") {
    return "home";
  }
  else if (type === "work") {
    return "work";
  }
  else {
    return "other";
  }
}

/* the constructors */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.emails = [];
}

/* the prototype */
Person.prototype = {
  addEmail: function(address, type) {
    this.emails.push(address + " (" + checkType(type) + ")");
  }
}

/* the instances */
var wolverine = new Person("Logan", "Jackson");

wolverine.addEmail("wolverine@xmen.com", "home");
wolverine.addEmail("wolverine_cell@xmen.com", "cell");

console.log(wolverine);
