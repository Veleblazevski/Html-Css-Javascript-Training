function Combatant() {
    // metodata prima parametri koja meta se udira i za kolku steta, 
    // predadeni kako parameteri nekade vo War
    this.attack = function(target, damage) {

        // obicen report da znaeme sto se slucilo
        console.log(this.name +  " has attacked " + target.name + " for " + damage + " damage")

        // ja povikuvame receiveDamage metodata na metata za metata sama da se pogrizi
        // kolku damage ke primi i posle dali ke umre ili ne
        target.receiveDamage(damage);
    }
    // metodata prima parametar steta od damage vrednsota vo attack metodata
    this.receiveDamage = function(damage) {
        // ja namaluvame energijata na zrtvata za vrednosta damage dobiena kako parametar
        this.health -= damage;

        // pravi proverka dali e ziv otkako e udren, nasledeno od Being
        this.checkLife();
    }
}

// prototipalno nasleduvanje od Being
Combatant.prototype = new Being();