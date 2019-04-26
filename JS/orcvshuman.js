function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fight() {
    let orcHelath = 720;
    let orcArmor = 5;


    let humanHealth = 550;
    let humanArmor = 9;


    while (orcHelath > 0 && humanHealth > 0) {
        let humanDamage = getRandomNumber(18, 27);
        let orcDamage = getRandomNumber(23, 35);


        humanHealth = humanHealth - orcDamage + humanArmor;
        orcHelath = orcHelath - humanDamage + orcArmor;
    }
    return (humanHealth > orcHelath ? "The Winner is human " : "The Winner is orc ");
}

fight();