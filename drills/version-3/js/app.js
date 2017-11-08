
var paintSwatch = "#aeaeae"
var paint = document.querySelector('.paint')
var cellcount = prompt("How big do you want your canvas?")
var container = document.querySelector('.container')

paint.addEventListener('click', function(event) {
  var targetStyle = window.getComputedStyle(event.target)
  var color = targetStyle.getPropertyValue("background-color")
  paintSwatch = color
})

container.style.width=(cellcount*17) + "px"

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('cell')) {
    event.target.style.backgroundColor = paintSwatch;
  }
})

for (var i = 0; i < (cellcount * cellcount); i++) {
  var newCell = document.createElement('div')
  newCell.classList.add('cell')
  container.appendChild(newCell)
}
