function mainAction() {
    // ni kreira nova vojna
    var redWedding = new War();

    // pravime uslov od koj ke ni zavisi izvrsuvanjeto na while ciklusot
    var battleEnd = false;

    // obicen brojac na denovi za reportot dole
    var counter = 0;

    // ciklus koj sakame da vrti se dodeka bitkata ne zavrsi
    while (!battleEnd) {
        counter++;
        // bitkata da napravi eden poteg so metodata isRaging() 
        // i da vrati ako potegot uspeal da ja zavrsi bitkata
        battleEnd = redWedding.isRaging();
    }

    // ova ni e obicen report na sostojba
    console.log("The battle ended after " + counter + " days");
}

// start na programata
mainAction();