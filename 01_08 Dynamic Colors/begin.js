/*
  WRITE YOUR SOLUTION HERE
*/
// closure is the combination of a function bundled together with regerences to its surrounding state(lexical enviorment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures




function switchColor(color) {
  return function () {
    document.body.style.backgroundColor = color
  }
};
const colorBlue = switchColor("blue");
const colorRed = switchColor("red");
const colorGreen = switchColor("green");

document.querySelector("#blue").addEventListener("click", colorBlue);
document.querySelector("#pink").addEventListener("click", colorRed);
document.querySelector("#green").addEventListener("click", colorGreen);
