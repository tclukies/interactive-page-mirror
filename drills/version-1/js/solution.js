var currentPlayer = "X"
var board = ["", "", "", "", "", "", "", "", ""]

function createGame(){
  //Write a function that populates <div id="gameboard"> so that it matches div.png
  //It should pass each element to the addClickListener() as it is created
  for (var i = 0; i < 9; i++) {
    var newSquare = document.createElement("div")
    newSquare.id = i
    if (i === 0 || i === 1 || i === 3 || i === 4) {
      newSquare.setAttribute("class", "square b-border r-border")
    }
    else if ( i === 2 || i === 5){
      newSquare.setAttribute("class", "square b-border")
    }
    else if (i < 8){
      newSquare.setAttribute("class", "square r-border")
    }
    else{
      newSquare.setAttribute("class", "square")
    }
    document.getElementById('gameboard').appendChild(newSquare)
    addClickListener(newSquare)
  }
}

function displayMessage(message) {
  //Select the element with the class of "message" and save it as messageElement
  var messageElement = document.getElementsByClassName('message')[0]
  if (message) {
    //Update the text in messageElement to match the message passed to this function
    messageElement.innerHTML = message
  }
  else {
    //Update the text in messageElement to read 'Current Player: ' + currentPlayer
    messageElement.innerHTML = 'Current Player: ' + currentPlayer
  }
}

function makeMove(square, index) {
  board[index] = currentPlayer
  //Update the text in the sqaure element to reflect the player that selected
  square.innerHTML = currentPlayer
}

function changeMessage() {
  //Write a function that adds the class "end-message" to the element with the class "message" (Hint: it should keep the class 'message' as well)
  var messageElement = document.getElementsByClassName('message')[0]
  messageElement.setAttribute('class', 'end-message message')

}
// Don't alter the following code

function play(square) {
  var index = square.id
  makeMove(square, index)
  var didWin = gameOver()
  didWin ? endGame() : switchPlayer()
}

function addClickListener(element){
  element.addEventListener('click', function(){
    play(element)
  })
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
  displayMessage()
}

function endGame(endFormation) {
  var endMessage = 'Game Over. Player ' + currentPlayer + ' Wins'
  changeMessage()
  displayMessage(endMessage)
}

var gameOver = function() {
  var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  didWin = false
  winCombinations.forEach(function(winCombination) {
    if(allEqual(winCombination)){
      didWin = true
    }
  })
  return didWin
}

function allEqual(combos) {
  return (board[combos[0]] === board[combos[1]] ) && (board[combos[0]] === board[combos[2]]) && (board[combos[0]] !== "")
}

createGame()
