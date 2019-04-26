var number = 12;
number.toString().length;
var sum = 0;
for  (a = number.toString().length; a > 0,a--;){
    sum = sum + parseInt(number.toString().charAt(a));
} 
alert(sum);
