function formula(){
    this.racer = [];
    this.crashes = 0;
    this.generateRacers = function () {
        for (let i = 1; i <= 20; i++) {
            let element = new Racer(i);
            element.startRace();
            this.racer.push(element);
            console.log("dodavam nov racer", element);
        }
        console.log("site natprevaruvaci", this.racer)
  
    }
    this.startLap = function(){
        for (let l = 1; l <= 80; l++) {
               for (let r = 0; r < this.racer.length; r++) {
                    this.racer[r].finishLap(); // se povikuva 80 pati za sekoj eden racer    
                    if(this.racer[r].inRace == false){
                        this.racer.splice(r,1);
                     this.crashes++;
                    }              
               } 
    }
    }
    this.winner = function(){
        let win=0;
        if(this.crashes==20){console.log("site umrea");}
        else{
        for (let w = 1; w < this.racer.length; w++) {
            if(this.racer[win].time > this.racer[w].time){
                win=w;
            }

        }
    console.log("preziveaa ", this.racer.length, "The winner is -" ,this.racer[win].name);}
    }

this.generateRacers();
this.startLap();
this.winner();    
}
formula();