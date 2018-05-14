var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

/* Your code here /*
 *
*/

function createGame() {
  for (let i = 0; i < board.length; i++) {
    var box = document.createElement("div");
    box.id = i;

    if (box.id == 0 || box.id == 1 || box.id == 3 || box.id == 4) {
      box.setAttribute("class", "square r-border b-border");
    } else if (box.id == 2 || box.id == 5) {
      box.setAttribute("class", "square b-border");
    } else if (box.id == 6 || box.id == 7) {
      box.setAttribute("class", "square r-border");
    } else if (box.id == 8) {
      box.setAttribute("class", "square");
    }

    document.getElementById("gameboard").appendChild(box);
    addClickListener(box);
  }
}

createGame();

function displayMessage(optionalMessage) {
  if (!optionalMessage) {
    document.getElementsByClassName("message")[0].textContent =
      "Current Player: " + currentPlayer;
  } else {
    document.getElementsByClassName("message")[0].textContent = optionalMessage;
  }
  console.log(board);
}

function changeMessage() {
  document.getElementsByClassName("message")[0].classList.add("end-message");
}

function makeMove(square, index) {
  square.textContent = currentPlayer;
  board[index] = currentPlayer;
}
