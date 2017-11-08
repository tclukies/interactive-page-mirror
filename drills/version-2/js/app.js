var currentScreen = ""
var firstNum = 0
var operator = ""
var secondNum = 0

var spanArray = document.getElementsByTagName('span')
var screen = document.getElementById('screen')
var clear = document.getElementById('clear')
var equals = document.getElementById('equals')

for (var i = 0; i < spanArray.length; i++) {
  spanArray[i].addEventListener('click', operatorClick)
}

function operatorClick(event) {
  var entry = event.target.innerHTML
  if (entry === "\xF7" || entry === "+" || entry === "x" || entry === "-") {
   if (operator === "") {
     operator = entry
     currentScreen += entry
     screen.innerHTML = currentScreen
   }
   return
 }
 if (entry !== "=") {
   if (operator === "") {
     var entryStr = parseInt(entry)
     firstNum = (firstNum * 10 + entryStr)
   } else {
     var entryStr = parseInt(entry)
     secondNum = (secondNum * 10 + entryStr)
   }
   currentScreen += entry
   screen.innerHTML = currentScreen
 }
}

clear.addEventListener('click', function() {
 currentScreen = ""
 firstNum = 0
 operator = ""
 secondNum = 0
 screen.innerHTML = currentScreen
})

equals.addEventListener('click', function() {
  var answer
  switch(operator) {
   case "+":
     answer = firstNum + secondNum
     break;
  case "-":
      answer = firstNum - secondNum
      break;
  case "x":
      answer = firstNum * secondNum
      break;
  case "\xF7":
      answer = firstNum / secondNum
      break;
  }
  currentScreen = answer
  screen.innerHTML = currentScreen
  firstNum = answer
  operator = ""
  secondNum = 0
  if (screen.innerHTML === "Infinity"){
    screen.innerHTML = "Error"
  }
})
