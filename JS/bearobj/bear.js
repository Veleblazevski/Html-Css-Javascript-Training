function Bear() {
    this.currentHealt = 100;
    this.minHealt = 50;
    this.maxHealt = 150;
    this.life = true;

    this.catchAnimal = function(animal) {
        let randomAnimal = getRandomNumber(0, 100);
        if (randomAnimal <= 30) {
            if (animal.type === "wolf") {
                this.currentHealt = Math.ceil(this.currentHealt - (this.currentHealt * 0.1) + (animal.kilograms * 0.5));

            } else {
                this.currentHealt = this.currentHealt + animal.kilograms;
            }
        }
        console.log(this.currentHealt);
    }
    this.checkHealth = function() {
        if (this.currentHealt < this.minHealt) {
            this.life = false;
        }
    }

}