function Room (number) {
    this.isClean = true;
    this.isTaken = false;
    this.minibar = 200;
    this.daysTaken = 0;
    this.price = 80;
    this.bill = 0;
    this.name = "Room No " + number;
    this.currentClient = null;

    // ova e metoda na sobata so koja go prima gostinot
    // sobata stanuva zafatena za onolku dna kolku sto ima odmor klientot
    // i vo nea go stavame klientot da sedi
    this.takeClient = function(client) {
        this.isTaken = true;
        this.daysTaken = client.vacationDays;
        this.currentClient = client;
    }

    // ovaa metoda gi izvrsuva site raboti sto se slucuvaat so sobata koga
    // ke pomine eden den
    // ako vo nea ima klient, mu se trosi odmorot i mu se kuca smetka od minibarot
    // ako nema klient, sobata se osloboduva
    this.spendDay = function() {
        if (this.currentClient) {
            if (this.daysTaken >= 0) {
                this.daysTaken--;
                this.minibar -= 20;
                this.bill += this.price + 20;
            } else if (this.daysTaken < 0) {
                this.releaseRoom();
            }
        }
    }

    // ovaa metoda ja osloboduva sobata
    // stanuva prljava i slobodna, na klientot mu se zimaat parite
    // se brka klientot od sobata i se setira vremeto za koe sobata e zafatena na 0
    this.releaseRoom = function() {
        this.isClean = false;
        this.isTaken = false;
        this.currentClient.money -= this.bill;
        this.currentClient = null;
        this.daysTaken = 0;
    }

    // ovaa metoda ja cisti sobata, go polni minibarot i ja resetira smetkata
    this.isGettingCleaned = function() {
        this.isClean = true;
        this.minibar = 200;
        this.bill = 0;
    }
}