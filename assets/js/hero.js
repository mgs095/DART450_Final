function rndPos() {
  var box = document.getElementsByClassName("title");
  var i;
  for (i = 0; i < box.length; i++) {
    var xPos = getRndInteger(0, 80);
    var yPos = getRndInteger(0, 80);
    box[i].style.left = xPos + "%";
    box[i].style.top = yPos + "%";
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
