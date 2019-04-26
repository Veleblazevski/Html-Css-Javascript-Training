function Knight(name) {
    // energija na vitezot, koga ke dojde do 0 toj umira
    this.health = 1200;

    // ova se vrednosti min/max za getRandom funkcijata
    // za da ni generira random vrednsot na napadot
    this.minDamage = 50;
    this.maxDamage = 75;
    
    this.name = name;
    this.type = "knight"
}

// Knight nasleduva od negoviot roditel Combatant
// Nasleduvanjeto e prototipalno
Knight.prototype = new Combatant();

function Wizard(name) {
    this.health = 700;
    this.minDamage = 100;
    this.maxDamage = 240;
    this.name = name;
}
Wizard.prototype = new Combatant();

function Archer(name) {
    this.name = name;
    this.health = 450;
    this.minDamage = 80;
    this.maxDamage = 150;
}
Archer.prototype = new Combatant();


function Assasin(name) {
    this.name = name;
    this.health = 200;
    this.minDamage = 140;
    this.maxDamage = 300;
}
Assasin.prototype = new Combatant();


function Necromancer(name) {
    this.name = name;
    this.health = 1000;
    this.minDamage = 100;
    this.maxDamage = 110;
}
Necromancer.prototype = new Combatant();