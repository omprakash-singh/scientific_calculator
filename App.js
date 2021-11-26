///////////////////////////////////////////////////////////
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const display = document.getElementById("display");
const button = document.querySelector(".button");
//////////////////////////////////////////////////////////

let Screenvalue = ' ';

console.log(button);

for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.terget.innerText;
        console.log(buttonText);
    });
}