function Bear() {
    this.currentWeight = 50;
    this.overWeight = 100;
    this.limitWeight = 150;

    this.isHealthy = function() {
        return this.currentWeight < this.limitWeight;
    }
    this.isOverWeight = function() {
        return this.currentWeight > this.overWeight;
    }
    this.huntAnimal = function(animals) {
        if(calculatePercent(30)) {
            var victim = animals.pop();
            this.currentWeight += victim.weight;
        }
    }
}