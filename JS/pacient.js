for(var i = 1; i <= 60; i++){
    if(i%15 === 0){
        console.log("Check Pulse");
    }
    else{
        console.log("Preform CPR");
    }
    if( i == 60){
        console.log("Patien is dead");
    }
}