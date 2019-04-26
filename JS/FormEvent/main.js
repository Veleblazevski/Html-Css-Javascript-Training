
let myDivForm = document.createElement("div");
document.body.appendChild(myDivForm);
let myFirstNameInput = document.createElement("input");
myFirstNameInput.id = ("myname");
let myLastNameInput = document.createElement("input");
let myEmailInput = document.createElement("input");
let myPasswordInput = document.createElement("input");
let myButton = document.createElement("button");
myFirstNameInput.placeholder = ("First Name");
myLastNameInput.placeholder = ("Last Name");
myEmailInput.placeholder = ("E-mail");
myEmailInput.type = ("email");
myEmailInput.id = ("emailInput");
myPasswordInput.maxLength = 8;


myPasswordInput.placeholder = ("Password");
myPasswordInput.type = ("Password");

myDivForm.classList.add("myDiv");
myButton.innerHTML = "Click me";

myDivForm.append(myFirstNameInput,myLastNameInput,myEmailInput,myPasswordInput,myButton);
myButton.addEventListener("click", function(){
    let myShowDiv = document.createElement("div");
    myShowDiv.classList.add("myNewDiv");
    myShowDiv = {
        firstName:myFirstNameInput.value,
        lastName:myLastNameInput.value,
        Email:myEmailInput.value,
        Password:myPasswordInput.value
    }
    let myDivText = document.createElement('div');
myDivText.id = ("mainDiv");
document.body.append(myDivText);
let myFirstP = document.createElement('p');
myFirstP.innerHTML = myShowDiv.firstName;
let myFirstP1 = document.createElement('p');
myFirstP1.innerHTML = myShowDiv.lastName;
let myFirstP2 = document.createElement('p'); 
myFirstP2.innerHTML = myShowDiv.Email;
let myFirstP3 = document.createElement('p');
myFirstP3.innerHTML = myShowDiv.Password;
myDivText.append(myFirstP,myFirstP1,myFirstP2,myFirstP3);

})







myEmailInput.addEventListener("blur",function EmailValidate (){
    
        var numericExpression = /^w.+@[a-zA-Z_-]+?.[a-zA-Z]{2,3}$/;
        var elem = document.getElementById("#emailInput").val();
        if (elem.match(numericExpression))
        return true;
        else
        return false;
        
})

