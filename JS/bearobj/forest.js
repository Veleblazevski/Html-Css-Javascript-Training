function Forest() {
    this.bear = new Bear();
    this.animals = [];
    this.startGame = function() {
        for (let i = 0; i < 30; i++) {
            console.log("number of day= " + i);
            let random = getRandomNumber(0, 4);
            this.bear.catchAnimal(this.animals[random]);
            this.bear.checkHealth();
            if (this.bear.life === false) {
                console.log(umre);
                break;
            }
        }

    }













    this.generateAnimals = function() {

        for (i = 0; i < 5; i++) {
            let animal;
            if (i % 2) {
                type = "wolf";
                kilograms = getRandomNumber(1, 100);
                animal = new Animal(type, kilograms);

            } else {
                type = "rabbit";
                kilograms = getRandomNumber(1, 100);
                animal = new Animal(type, kilograms);
            }
            this.animals.push(animal);
        }
        console.log(this.animals);
    }
}