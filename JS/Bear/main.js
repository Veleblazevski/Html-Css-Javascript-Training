function main() {
    var zimzelena = new Forest();
    for (var index = 0; index < 30; index++) {
        var bearAlive = zimzelena.spendDay();
        console.log("A day has passed");
        if (!bearAlive) {
            console.log("The bear has died");
            break;
        }
    }
    console.log(zimzelena);
}

main();