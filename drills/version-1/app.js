var currentPlayer = "X"
var board = ["", "", "", "", "", "", "", "", ""]

function createGame(){
  //Write a function that populates <div id="gameboard"> so that it matches div.png
  //It should pass each element to the addClickListener() as it is created
}

function displayMessage(message) {
  //Select the element with the class of "message" and save it as messageElement
  var messageElement

  if (message) {
    //Update the text in messageElement to match the message passed to this function
  }
  else {
    //Update the text in messageElement to read 'Current Player: ' + currentPlayer
  }
}

function makeMove(square, index) {
  board[index] = currentPlayer
  //Update the text in the sqaure element to reflect the player that selected
}

function changeMessage() {
  //Write a function that adds the class "end-message" to the element with the class "message" (Hint: it should keep the class 'message' as well)
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
