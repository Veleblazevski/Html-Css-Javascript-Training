function Being() {
    // obicen flag koj kazuva dali bitieto e zivo ili mrtvo
    this.isAlive = true;

    // proveruva dali energijata e pomala od 0, i ako e, go flagira kako mrtov!
    this.checkLife = function() {
        if (this.health <= 0) {
            console.log(this.name + " has perished!")
            this.isAlive = false;
        }
    }
}