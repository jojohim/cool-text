////create array to push to 
//
//let letterArray = [];
//const letters = document.querySelectorAll(".letter");
//
////for each letter push to array
//letters.forEach(letter => letterArray.push(letter));
//console.log(letterArray);
// 
//for (let i = 0; i < letterArray.length; i++){
//    console.log(letterArray[i]);
//    letterArray[i].style.setProperty("--delay", i + "s");
//}

"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  const text = document.querySelector(".letters").textContent;
  const container = document.querySelector(".letters");
  document.querySelector(".letters").textContent = "";
  displayText(text, container);
}

function displayText(text, container) {
    const textArray = text.split("");
  //console.log(textArray);

  for (let i = 0; i < textArray.length; i++) {
    const spanElement = document.createElement("span");
    const letter = textArray[i];
    console.log(spanElement);

    //if letter is space 
    if (letter === " ") {
        spanElement.innerHTML = "&nbsp;";
        spanElement.classList.add("letters");
        spanElement.style.setProperty("--delay", i);
        container.append(spanElement);
    } 
    
    //if a letter 
    else {
        spanElement.textContent = letter;
        spanElement.classList.add("letters");
        spanElement.style.setProperty("--delay", i);
        container.append(spanElement);
  
    }
  }
}