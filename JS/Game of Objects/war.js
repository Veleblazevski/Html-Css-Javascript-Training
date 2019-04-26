function War() {
    // pri instanciranje na objekt vojna pravime eden dragon vednas
    // i pravime prazna niza od vojnici
    this.boss = new Dragon("Drogon");
    this.army = [];

    // ova e metodata sto ja startuva bitkata na sekoja iteracija na 
    // while ciklusot vo main i vrakja dali bitkata zavrsila ili ne
    this.isRaging = function() {
        // deklarirame kutija sto ni cuva kolku lugje se zivi
        var aliveCombatants = 0;

        // go proveruvame flagot na sekoj vojnik isAlive da vidime dali e ziv
        // ako e ziv, go inkrementirame aliveCombatants
        for (var index = 0; index < this.army.length; index++) {
            if (this.army[index].isAlive) {
                aliveCombatants++;
            }
        }

        // ako ima zivi, procesirame poteg so zivite vojnici
        this.processTurn(aliveCombatants);

        // proveruvame dali ima znaci na zivot, ako i dvete se false
        // (i vojnicite i dragonot se zivi), togas ne vrakja nisto, inaku vrakaj true
        if (!this.boss.isAlive || !aliveCombatants) {

            // ova kazuva samo koj umrel, obicen report
            if (!aliveCombatants) {
                console.log(this.boss.name + " has killed all the peasants. His health is " + this.boss.health);
            } else {
                console.log("The dragon has perished at the hands of the peasants");
            }

            //ova ja prekinuva bitkata
            return true;
        }
    }

    // ovaa metoda procesira eden poteg vo bitkata
    this.processTurn = function(aliveCombatants) {

        // prvo proveruva dali ima znaci na zivot vo armijata
        // ako nema zivi, ne go procesira potegot
        if (!aliveCombatants) {
            return true;
        }

        // birame zrtva za dragonot
        // nizata e zero based (od 0 do 9), dodeka length go vrakja brojot na elementi
        // vo nizata koj ni e 10, zatoa 10-1 pravime
        var victim = this.army[getRandom(0, this.army.length - 1)];

        // ako zrtvata e ziva
        if (victim.isAlive) {
            
            // dragonot ja udira zrtvata za random damage od min/max na dragonot
            this.boss.attack(victim, getRandom(this.boss.minDamage, this.boss.maxDamage));
        } else {

            // ako izbranata zrtva e veke mrtva, pusti ja uste ednas metodata za
            // procesiranje poteg za dragonot da najde nova zrtva
            // ova e rekurzivna funkcija koja ja prekinuva momentalnata egzekucija
            // i ja starta od novo
           return this.processTurn();
        }
        
        // tuka armijata mu se zbira na kupce na dragonot i go grbachat
        for (var index = 0; index < this.army.length; index++) {

            // pravime proverka dali dragonot e ziv i dali odbraniot combatant e ziv
            if (this.boss.isAlive && this.army[index].isAlive) {

                // combatantot go udira dragonot
                this.army[index].attack(this.boss, 
                    getRandom(this.army[index].minDamage, this.army[index].maxDamage));
            }
        }
    }

    // metoda za da izgenerirame armija koja se povikuva na instanciranje na
    // objektot War vo main.js
    this.generateArmy = function() {

        // kazuvame kolku vojnici sakame da imame (10)
        for (var index = 0; index < 10; index++) {

            // zimame random vrednost za kakov tip na vojnik da sozdademe
            var combatant = getRandom(1, 5);

            // switch/case ciklus za pravenje na vojnici i nivno dodavanje vo nizata
            // this.army (so metoda push())
            switch (combatant) {
                case 1:
                    this.army.push(new Knight("Knight " + index));
                    break;
                case 2:
                    this.army.push(new Wizard("Wizard " + index));
                    break;
                case 3:
                    this.army.push(new Archer("Archer " + index));
                    break;
                    case 4:
                    this.army.push(new Assasin("Assasin " + index));
                    break;
                    case 5:
                    this.army.push(new Necromancer("Necromancer " + index));
                    break;
                default:
                    break;
            }   
        }
    }

    // ova e povikot na metodata vednas pri instanciranje na objektot War
    this.generateArmy();
}