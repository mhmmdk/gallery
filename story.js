window.onscroll = function() {
  noScroll()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function noScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function drop(down) {
  document.getElementById(down).classList.toggle("show");
}
