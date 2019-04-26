function users(money) {
    if (money <= 5000){
        return "Kupi si jakna";
    }
else if  ( money >= 10000){
        return "Kupi si kola";
    }
    else {
        return "Sedi doma";
    }
}
var rezultat = users();
alert(rezultat);

