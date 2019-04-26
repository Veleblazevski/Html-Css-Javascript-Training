function Combatan(name, health, armor) {
    this.name = name;
    this.health = health;
    this.armor = armor;
    this.damage = getRandomNumber(12, 56);
    this.attack = function(opponentDamage) {
        return ((this.health + this.armor) - opponentDamage);
    }
}