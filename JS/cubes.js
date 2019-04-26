function cubDigits(number){
    var result = 0;
    while (number > 0){
        var cubes = number % 10;
        result += Math.pow(cubes,3);
        number = Math.floor(number / 10);
    }
    return result;
}
function final(){
    for(i = 100; i <= 999 ; i++){
        var back = cubDigits(i);
        if (back === i){
            console.log(i);
        }
    }
}
final();
