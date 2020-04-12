function Myfunction() {
  var x = document.getElementsByClassName("sd1");
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display != "none") x[i].style.display = "none";
    else {
      x[i].style.display = "inline";
      x[i].style.fontSize = "150%";
    }
  }
}
function myFunction() {
  document.getElementById("sd").value = "Hi LOX";
  setTimeout(() => {
    document.getElementById("sd").value = "What's up?";
  }, 1000);
}
