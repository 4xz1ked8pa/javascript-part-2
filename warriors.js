/* utility function (this generates a random number given an interval) */
function randBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

/* the constructor */
function Warrior(name,gender) {
  this.name = name;
  this.gender = gender;
  this.level = 1;
  this.weapon = "wooden sword";
  this.power = randBetween(1,100);
}

/* the prototype */
Warrior.prototype = {
  fight: function(opponent) {
    console.log(this.name + " has rushed to the arena with " + opponent.name);
  },
  faceoff: function(opponent) {
    if (opponent.power > this.power) {
      console.log(opponent.name + "won the battle! " + this.name + " has lost.");
    }
    else if (opponent.power === this.power) {
      console.log("The fight is draw!");
    }
    else {
      console.log(this.name + "won the battle! " + opponent.name + " has lost.");
    }
  }
}

/* the warriors */
var achiles   = new Warrior("Achiles", "M");
var boagrius  = new Warrior("Boagrius", "M");

/* fight! */
achiles.fight(boagrius);
achiles.faceoff(boagrius);
