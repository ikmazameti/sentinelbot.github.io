//Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function (){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/rider.jpg"){
        myImage.setAttribute("src", "images/rider2.jpg");
    } else {
        myImage.setAttribute("src", "images/rider.jpg")
    }
}


//Personalised welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName =prompt("Please entr your name");
    if(!myName || myName ===null){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Bicycles are cool, " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
} else{
    let storedName= localStorage.getItem("name");
    myHeading.innerHTML = "Bicycles are cool, " + storedName;
}

myButton.onclick=function () {
setUserName();
}