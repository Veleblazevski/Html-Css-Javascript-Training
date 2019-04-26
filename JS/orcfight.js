function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Combatant(name, health, armor, minAttack, maxAttack, type) {
    this.name = name;
    this.health = health;
    this.armor = armor;
    this.minAttack = minAttack;
    this.maxAttack = maxAttack;

    this.attack = function(target) {
        var attackerDamage = getRandomNumber(this.minAttack, this.maxAttack);
        if (this.health < 100 && type === "orc") {
            attackerDamage *= 1.1;
        }
        target.takeDamage(attackerDamage);
    }

    this.takeDamage = function(damage) {
        this.health = this.health - (damage - this.armor);
        if (this.health < 200 && type === "human") {
            this.armor += 1;
        }
    }
}

function Fight() {
    this.startFight = function() {
        var orko = new Combatant("Vele", 720, 5, 23, 35, "orc");
        var momak = new Combatant("Konstantin", 550, 9, 18, 27, "human");

        while (orko.health > 0 && momak.health > 0 ) {
            orko.attack(momak);
            momak.attack(orko);
        }

        if (orko.health <= 0) {
            console.log(momak.name + " has won the fight!");
        } else if (momak.health <= 0) {
            console.log(orko.name + " has won the fight!");
        } else {
            console.log("its a draw!");
        }
    }
}

var tepacka = new Fight();
tepacka.startFight();