m = 0;
var y;
var screenWidth = window.innerWidth;
console.log("screenWidth", screenWidth);
function start() {
  y = setInterval(run, 100);
  var startOverText = document.getElementById("startOverText");
  function run() {
    if (m == screenWidth) {
      console.log("inside if");
      startOverText.style.display = "block";
      clearInterval(y);
      m = 0;
    } else {
      console.log("inside else");
      startOverText.style.display = "none";
      m += 10;
      var x = document.getElementById("img");
      x.style.marginLeft = m + "px";
    }
  }
}

function stop() {
  clearInterval(y);
}
