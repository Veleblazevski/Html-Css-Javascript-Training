var largest = 0;
var i = 0;
while (i < 10) {
    var randomNum = Math.random();
    if (randomNum > largest){
        largest = randomNum;
    }
    i++;
}
alert(largest);

