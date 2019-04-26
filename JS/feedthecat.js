function feedCats(cat){
    for(i = 0; i < 7; i++){
        if(cat === "Tobby"){
            return cat + " started eating fish";
        }
        else if(cat === "Lizzie") {
            return cat + " started eating chicken";
        }
        else if(cat === "Mary") {
            return cat + " started eating anything";
        }
        else {
            return false;
        }
    }
}

var result = feedCats("Tobby");
alert(result);











// console.log(nameofcat + “ started eating fish/chicken/whatever”);