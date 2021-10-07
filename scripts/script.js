// JSS code van ---->https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
var mybutton = document.getElementById("back2Top");

mybutton.hidden=true

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.hidden=false;
  } else {
    mybutton.hidden=true;
  }
}

window.onscroll = function() {
  scrollFunction()
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// CODE VOOR DE MENU 
var menuButton = document.querySelector("button");
var menuSee = document.querySelector("header nav ul");

function menuverschijnt(){
  menuButton.classList.toggle("change");
  menuSee.classList.toggle("terug")

}

menuButton.addEventListener("click", menuverschijnt);