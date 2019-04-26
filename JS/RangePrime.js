function range(x,y) {
    var result = 0;
    for (var i = x; i < y; i++){
        if (!isPrime(i)){
            result += i;
        }
        
    }
    console.log(result);
}
range(10,150);

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }