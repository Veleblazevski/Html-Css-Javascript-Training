function car(litar,km,totalkm){
    let i;
    let onekm=litar/km;
    let vkupno=0;
    for(i = 0; i<totalkm; i++){
        vkupno+=onekm;
    }
    return vkupno;
}
car(7,100,43);