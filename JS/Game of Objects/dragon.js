function Dragon(name) {
    this.name = name;
    this.health = 25000;

    // dragonot pravi steta od min do max, na random
    this.minDamage = 500;
    this.maxDamage = 750;
    
    this.type = "dragon";
}

// duri i dragonot nasleduva od combatant
Dragon.prototype = new Combatant();