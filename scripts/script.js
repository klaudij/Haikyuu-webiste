// JSS code van ---->https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
//Get the button
var mybutton = document.getElementById("back2Top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
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