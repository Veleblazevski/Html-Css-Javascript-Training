function tottalyDifferent(a,b) {
    for(var i = a; i <= b; i++){


while(i != 0){
        var curr_digit = i % 10;  
        if(containsDigit(b,curr_digit) == false){
            i = Math.floor(i / 10);
        }
    }
    console.log(i);
}
}
    function containsDigit(b,digit){
        while (b != 0)
        {
            var curr_digit = b % 10;
            if (curr_digit == digit) return true;
            b = Math.floor(b/ 10);
        }
        return false;
    }
    tottalyDifferent(123,723);
