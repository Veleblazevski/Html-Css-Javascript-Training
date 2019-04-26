function inPhone(phonenumber,price,tax,custom) {
    var tax = (phonenumber * price + custom) * (tax/100);
    var custom = phonenumber * price * (custom/100);
    var vkupno = phonenumber * price + custom + tax;
    alert(vkupno);
}
inPhone(5,20,300,3);

