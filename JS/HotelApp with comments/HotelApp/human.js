function Human(index, type) {
    this.name = type + "-" + index;
    this.money = type === "client" ? 3000 : 50;
    this.type = type;
    this.vacationDays = getRandomNumber(2, 7);

    // ako kreiraniot covek e vraboten, togas toj moze da cisti
    this.clean = function(target) {
        // za da se izvrsi cistenjeto, covekot mora da izbere target soba
        // i da i ja povika isGettingCleaned metodata na taa soba
        target.isGettingCleaned();
    }
}