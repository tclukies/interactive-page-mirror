var buttons = document.querySelectorAll("span");
var button = document.querySelector("span");
var clear = document.querySelector(".clear");
var equal = document.querySelector(".equals");
var zero = document.querySelector(".zero");
var screen = document.querySelector("#screen");
var number = document.querySelector(".numbers");
var operator = document.querySelector(".operator");
var result = false;

var clickedButtons = [];
screen.textContent = "0";

buttons.forEach(button => {
  if (button.className === "numbers" || button.className === "operator") {
    clickedButtons.push(button);
  }
});

clickedButtons.forEach(number => {
  number.addEventListener("click", displayNumber);
});

function displayNumber(event) {
  var numberPress = event.target.textContent;
  var classOfNumberPress = event.target.className;
  if (numberPress === "C") {
    screen.textContent = "0";
    result = false;
  } else if (screen.textContent === "0") {
    screen.textContent = numberPress;
  } else if (
    (classOfNumberPress === "numbers" || classOfNumberPress === "operator") &&
    event.target.id != "equals" &&
    result === false
  ) {
    screen.textContent += numberPress;
    result = false;
  } else if (numberPress === "=") {
    screen.textContent = eval(screen.textContent);
    result = true;
  }
  if (screen.textContent === "Infinity") {
    screen.textContent = "ERROR";
  }
  if (result === true && classOfNumberPress === "numbers") {
    screen.textContent = numberPress;
    result = false;
  } else if (
    result === true &&
    classOfNumberPress === "operator" &&
    event.target.id != "equals"
  ) {
    screen.textContent += numberPress;
    result = false;
  }
}
