function flirting(tries){
    let points = 0;
    for (let index = 1; index <= tries; index++) {
        points += 1;
        if(index % 3 == 0){
            points +=5;
        }
        if(index % 5 == 0){
            points += 10;
        }
        if(index % 10 == 0){
            points -= 12;
        }
    }
    return points;
}
flirting(10);