function Racer(id){
this.name = "Racer -" + id;
    this.speed = 0;
this.tireHealth = 0;
this.fuel = 0;
this.time = 0;
this.inRace = true;
this.finishLap = function() {
    if(this.inRace == true){
        this.inRace = (calculatePercent(99));
        this.time += 10 / this.speed;
        this.fuel = 100;
        this.tireHealth = 100;
    }
}

this.startRace = function(){
        this.speed = getRandom(100,200);
        
}
}