function Animal(type, index, weight) {
    this.name = type + "-" + index;
    this.type = type;
    this.weight = weight || getRandomNumber(2, 10);
}