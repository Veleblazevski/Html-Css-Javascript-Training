function maxOfThree(a,b,c) {
    if (a > b && a > c ) {
        return a + " Najgolem";
    }
    else if (b > a && b > c) {
        return b + " Golem";
    }
    else if (c > a && c > b) {
        return c + " Goooolem";
    }
}
var rez = maxOfThree(90,1000,40);
alert(rez);
