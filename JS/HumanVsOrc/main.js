function fight() {
    let human = new Combatan("Human", 550, 10);
    let orc = new Combatan("Orc", 550, 10);
    while (human.health > 0 && orc.health > 0) {
        human.health = human.attack(orc.damage);
        orc.health = orc.attack(human.damage);

    }
    if (orc.health <= 0) {

        console.log("The human won!");
    } else if (human.health <= 0) {

        console.log("The orc won!");
    } else {
        console.log("Its draw");
    }

}

fight();