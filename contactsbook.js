/* the utilities */
function checkType(type) {
  if (type === "close friend") {
    return "close friend";
  }
  else if (type === "friend") {
    return "friend";
  }
  else if (type === "acquaintance") {
    return "acquaintance";
  }
  else if (type === "classmate") {
    return "classmate";
  }
  else if (type === "family") {
    return "family";
  }
  else {
    return "auto";
  }
}

/* the constructor */
function Book(name) {
  this.name = name;
  this.contacts = [];
  this.phones = [];
  this.emails = [];
  this.city = "Not shown";
}

/* the prototype */
Book.prototype = {
  setPhone: function(phoneNumber) {
    this.phones.push(phoneNumber);
  }
}

/* the books */
var owner = new Book("Charles Gaudreau Jackson");

/* the function calls */
owner.setPhone("5146387143");

/* the tests */
console.log(owner);
