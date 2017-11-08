var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

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

createGame();
