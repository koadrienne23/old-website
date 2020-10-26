// Get the modal
var modal1 = document.getElementById("nyc-modal");
var modal2 = document.getElementById("la-modal");
var modal3 = document.getElementById("spain-modal");
var modal4 = document.getElementById("france-modal");
var modal5 = document.getElementById("seoul-modal");
var modal6 = document.getElementById("tokyo-modal");
var modal7 = document.getElementById("peru-modal");
var modal8 = document.getElementById("vancouver-modal");
var modal9 = document.getElementById("hanover-modal");
var modal10 = document.getElementById("italy-modal");
var modal11 = document.getElementById("santa-fe-modal");
var modal12 = document.getElementById("bahamas-modal");
var modal = [modal1, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal10, modal11, modal12];

// Get the button that opens the modal
var btn1 = document.getElementById("nyc");
var btn2 = document.getElementById("la");
var btn3 = document.getElementById("spain");
var btn4 = document.getElementById("france");
var btn5 = document.getElementById("seoul");
var btn6 = document.getElementById("tokyo");
var btn7 = document.getElementById("peru");
var btn8 = document.getElementById("vancouver");
var btn9 = document.getElementById("hanover");
var btn10 = document.getElementById("italy");
var btn11 = document.getElementById("santa-fe");
var btn12 = document.getElementById("bahamas");
var btn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12];

// Get the <span> element that closes the modal
var span1 = document.getElementById("1");
var span2 = document.getElementById("2");
var span3 = document.getElementById("3");
var span4 = document.getElementById("4");
var span5 = document.getElementById("5");
var span6 = document.getElementById("6");
var span7 = document.getElementById("7");
var span8 = document.getElementById("8");
var span9 = document.getElementById("9");
var span10 = document.getElementById("10");
var span11 = document.getElementById("11");
var span12 = document.getElementById("12");
var span = [span1, span2, span3, span4, span5, span6, span7, span8, span9, span10, span11, span12];

// When the user clicks on the button, open the modal
for(var i = 0; i < btn.length; i++) {
    btn[i].onclick = (function(i) {return function() {
        modal[i].style.display = "block";
        resetSlides(i+1);
    };})(i);
}

// When the user clicks on <span> (x), close the modal
for(var i = 0; i < span.length; i++) {
    span[i].onclick = (function(i) {return function() {
        modal[i].style.display = "none";
    };})(i);
}

// Control photo slides within the modal
var slideIndex = 1;

// Reset slideIndex
function resetSlides(loc) {
    slideIndex = 1;
    showSlides(slideIndex, loc);
}

// Next/previous controls
function plusSlides(n, loc) {
  showSlides(slideIndex += n, loc);
}

// Show the current photo/slide in the modal
function showSlides(n, loc) {
  var slides1 = document.getElementsByClassName("nyc-slides");
  var slides2 = document.getElementsByClassName("la-slides");
  var slides3 = document.getElementsByClassName("spain-slides");
  var slides4 = document.getElementsByClassName("france-slides");
  var slides5 = document.getElementsByClassName("korea-slides");
  var slides6 = document.getElementsByClassName("japan-slides");
  var slides7 = document.getElementsByClassName("peru-slides");
  var slides8 = document.getElementsByClassName("vancouver-slides");
  var slides9 = document.getElementsByClassName("hanover-slides");
  var slides10 = document.getElementsByClassName("italy-slides");
  var slides11 = document.getElementsByClassName("santa-fe-slides");
  var slides12 = document.getElementsByClassName("bahamas-slides");
  var slides = [slides1, slides2, slides3, slides4, slides5, slides6, slides7, slides8, slides9, slides10, slides11, slides12];
  var s = slides[loc-1];
  if (n > s.length) {slideIndex = 1}
  if (n < 1) {slideIndex = s.length}
  for (var i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
  s[slideIndex-1].style.display = "block";
}