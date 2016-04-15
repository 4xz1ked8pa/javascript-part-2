/* the utilites */
function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}
function randType(types) {
  return types[randBetween(0,types.length -1)];
}
function randCondition(conditions) {
  return conditions[randBetween(0,conditions.length-1)];
}

/* the constructor */
function Tile(x,y) {
  this.x = x;
  this.y = y;
  this.height = randBetween(1,3);
  this.type = randType(["grass","rocks","water"]);
  this.condition = randCondition("burning","normal","frozen");
}

/* the prototype */
Tile.prototype = {
  freeze: function() {
    if (this.condition === "burning") {
      this.condition = "normal";
    }
    else if (this.condition === "normal") {
      this.condition = "frozen";
    }
    else {
      this.height = this.height++;
    }
  },
  burn: function() {
    if (this.condition === "frozen") {
      this.condition = "normal";
    }
    else if (this.condition === "normal") {
      this.condition = "burning";
    }
    else {
      this.height = this.height--;
    }
  }
}

/* the instances */
var myTile = new Tile(20,20);

/* the tests */
console.log(myTile.x);
