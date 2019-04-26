function range(x,y) {
    var result = 0;
    for (var i = x; i < y; i++){
        result += i;
    }
    console.log(result.toString());
}
range(10,150);
