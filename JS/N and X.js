function totallyDifferent(n, x) {
    for (var index = n + 1; index <= x; index++) {
        var result = checkNumbers(index, x);
        if (result) {
            console.log("The numbers are totally different: ", index, x);
            return;
        }
    }
}
function checkNumbers(number1, number2) {
    while (number1 > 0) {
        var num2 = number2;  
        var result1 = number1 % 10;
        while (num2 > 0) {
            var result2 = num2 % 10;
            if (result1 === result2) {
                console.log("numbers are the same");
                return false;
            } 
            num2 = Math.floor(num2 / 10);
        }
        number1 = Math.floor(number1 / 10);
    }
    
    return true;
}

totallyDifferent(123, 723);



