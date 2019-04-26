let buttonFirst = document.createElement("button");
buttonFirst.classList.add("myButton");
document.body.appendChild(buttonFirst);


let textPara = document.createElement("p");
textPara.classList.add("myPara");
textPara.innerHTML = "Click me!!!!";

buttonFirst.appendChild(textPara);


buttonFirst.addEventListener("click",changeStyle);

function changeStyle(event){
event.target.style.color = "yellow";
event.target.style.fontFamily = "Arial";
event.target.style.fontSize = "50px";
}


