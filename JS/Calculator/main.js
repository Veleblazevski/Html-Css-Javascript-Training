let myMainCont = $("<div>").addClass("myCalc").appendTo(document.body);
let mySecondMain = $("<div>").text("0").addClass("myDisplay").appendTo(myMainCont);
let myThirdDiv = $("<div>").addClass("myThirdDiv").appendTo(myMainCont);
let myButtonPlus = $("<button>").attr("id", "plus").text("+").addClass("btn myButtonPlus");
myButtonPlus.appendTo(myThirdDiv);

let myButtonMinus = $("<button>").attr("id", "minus").text("-").addClass("btn myButtonMinus");
myButtonMinus.appendTo(myThirdDiv);

let myButtonMult = $("<button>").attr("id", "multiply").text("*").addClass("btn myButtonMult");
myButtonMult.appendTo(myThirdDiv);

let myButtonDivide = $("<button>").attr("id", "divide").text("/").addClass("btn myButtonDivide");
myButtonDivide.appendTo(myThirdDiv);


let myButtonOne = $("<button>").attr("id", "one").text("1").addClass("btn myButtonOne");
myButtonOne.appendTo(myThirdDiv);

let myButtonTwo = $("<button>").attr("id", "two").text("2").addClass("btn myButtonTwo");
myButtonTwo.appendTo(myThirdDiv);

let myButtonThree = $("<button>").attr("id", "three").text("3").addClass("btn myButtonThree");
myButtonThree.appendTo(myThirdDiv);


let myButtonFour = $("<button>").attr("id", "four").text("4").addClass("btn myButtonFour");
myButtonFour.appendTo(myThirdDiv);


let myButtonFive = $("<button>").attr("id", "five").text("5").addClass("btn myButtonFive");
myButtonFive.appendTo(myThirdDiv);


let myButtonSix = $("<button>").attr("id", "six").text("6").addClass("btn myButtonSix");
myButtonSix.appendTo(myThirdDiv);


let myButtonSeven = $("<button>").attr("id", "seven").text("7").addClass("btn myButtonSeven");
myButtonSeven.appendTo(myThirdDiv);


let myButtonEight = $("<button>").attr("id", "eight").text("8").addClass("btn myButtonEight");
myButtonEight.appendTo(myThirdDiv);


let myButtonNine = $("<button>").attr("id", "nine").text("9").addClass("btn myButtonNine");
myButtonNine.appendTo(myThirdDiv);


let myButtonZero = $("<button>").attr("id", "zero").text("0").addClass("btn myButtonZero");
myButtonZero.appendTo(myThirdDiv);


let myButtonEqual = $("<button>").attr("id", "equal").text("=").addClass("btn myButtonEqual");
myButtonEqual.appendTo(myThirdDiv);

let myButtonDelete = $("<button>").attr("id", "delete").text("AC").addClass("btn myButtonDelete");
myButtonDelete.appendTo(myThirdDiv);



let operand = "";
let result = $(mySecondMain).text();
let tempRes = "";



$("button").click(function(e) {
    // alert($(this).text());
    if ($(this).text() === "+" || $(this).text() === "-" || $(this).text() === "*" || $(this).text() === "/") {

        if (operand === "") {

            // alert(result);
            result = eval(result + tempRes);
            tempRes = result + $(this).text();
            operand = $(this).text();
            $(mySecondMain).text(tempRes);

        } else {

            operand = $(this).text();
            tempRes = result + operand;
            $(mySecondMain).text(tempRes);
        }
    }



    if (!isNaN($(this).text())) {

        tempRes = tempRes + $(this).text();
        $(mySecondMain).text(tempRes);

    }
    if ($(this).text() === "=") {

        result = eval(tempRes);

        $(mySecondMain).text(result);
    }


    //Buttton for clearing 
    if ($(this).text() === "AC") {
        operand = "";
        result = "";
        tempRes = "";
        $(mySecondMain).text("0");

    }
});