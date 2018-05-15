var currentColor = "black";
var colorPalette = [
  "darkred",
  "red",
  "orange",
  "yellow",
  "skyblue",
  "limegreen",
  "green",
  "darkgreen",
  "blue",
  "indigo",
  "violet",
  "black",
  "brown",
  "grey",
  "white"
];

function createCanvas() {
  for (let i = 0; i < 3108; i++) {
    var gameBox = document.createElement("div");

    gameBox.setAttribute("class", "gameBoardBox");
    gameBox.style.backgroundColor = "white";

    gameBox.addEventListener("click", toNewColor);
    function toNewColor(event) {
      event.target.style.backgroundColor = currentColor;
    }

    document.querySelector(".boxSection").appendChild(gameBox);
  }
}
createCanvas();

function createPalette() {
  for (let i = 0; i < 16; i++) {
    var paletteBox = document.createElement("div");

    paletteBox.setAttribute("class", "paletteColorBox");
    paletteBox.style.backgroundColor = colorPalette[i];
    if (i == 14) {
      paletteBox.id = "eraseButton";
      paletteBox.textContent = "Erase";
    }
    if (i == 15) {
      paletteBox.id = "eraseAll";
      paletteBox.textContent = "Erase All";
    }

    paletteBox.addEventListener("click", changeColor);
    function changeColor(event) {
      currentColor = event.target.style.backgroundColor;
    }

    document.querySelector(".paletteSection").appendChild(paletteBox);
  }
}
createPalette();

// paletteBox.eraseAll.addEventListener("click", clearBoard)
// function clearBoard(event){
//   createCanvas()
// }
