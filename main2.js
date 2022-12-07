function clock() {
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  if (hour >= 11 && hour < 14) {
    document.getElementById("box1").innerHTML = "hi..."
    document.getElementById("box1").style.background = "url(./Assets/constant-img.jpg"
  }
  else {
    document.getElementById("box1").innerHTML = "hey..."
    document.getElementById("box1").style.background = "url(./dog.png)";
  }
}
clock();