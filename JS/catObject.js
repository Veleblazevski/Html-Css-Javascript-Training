function Cat(name, color) {
    this.name = name;
    this.color = color;

    this.purr = function() {
        console.log(this.name + " is purring peacefully");
    }
}

function Predator() {
    this.kill = function() {
        
    }
}

Predator.prototype = new Cat();

function Tiger(name, color, weight) {
    this.weight = weight;

    this.run = function() {
        console.log(this.name + " is running");
    }

    this.hunt = function() {
        console.log(this.name + " is hunting");
    }
}

Tiger.prototype = new Predator();

var pero = new Tiger("Pero", "Blue", 90);

function Kitten(name, color) {
    this.beingCute = function() {
        console.log(this.name + " is being cute");
    }
}

Kitten.prototype = new Cat();

var kitty = new Kitten("Julija", "Yellow");