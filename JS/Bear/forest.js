function Forest() {
    this.animals = [];
    this.bossBear = new Bear();

    this.spendDay = function() {
        var result = true;
        
        if (!this.bossBear.isHealthy()) {
            result = false;
        } else if (this.bossBear.isOverWeight()){
            console.log("The bear is overweight, it cannot move");
            this.bossBear.currentWeight = Math.round(this.bossBear.currentWeight / 1.2);
        } else {
            this.bossBear.huntAnimal(this.animals);
        }

        return result;
    }

    this.generateAnimals = function() {
        for (var index = 0; index < 10; index++) {
            var type = "Rabbit";
            var weight = null;
            if(calculatePercent(18)) {
                type = "Wolf";
                weight = 24;
            }
            var zajce = new Animal(type, index, weight);
            this.animals.push(zajce); 
        }
    }
    this.generateAnimals();
}