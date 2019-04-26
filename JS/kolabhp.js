function regCost (bhp) {
 if (bhp <= 85){
     return "3000 denari";
 }
 else if (bhp > 85 && bhp <= 150){
    return "5000 denari";
}
else if (bhp > 150){
    return "15000 denari";
}
}
var result = regCost(70);
alert(result);

