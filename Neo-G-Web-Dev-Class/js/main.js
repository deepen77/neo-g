function lunchboxOpen(lunchID) {
  document.getElementById('lunch_' + lunchID).style.display = "inline-block";
  document.getElementById('clasp_' + lunchID).innerHTML = "<a href=\"javascript:lunchboxClose('" + lunchID + "');\">Close Chat with NEO ...</a>";
}

function lunchboxClose(lunchID) {
  document.getElementById('lunch_' + lunchID).style.display = "none";
  document.getElementById('clasp_' + lunchID).innerHTML = "<a href=\"javascript:lunchboxOpen('" + lunchID + "');\">Open Chat with NEO ...</a>";
}
document.querySelector(".menu-bar").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("open");
});
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn1");



var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var btn = document.getElementById("myBtn2");



var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var btn = document.getElementById("myBtn3");



var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}