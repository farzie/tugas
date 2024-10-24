
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var topbutton = document.getElementById("topButton");
  if (document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollTopFunction() {
   window.scrollTo({top: 0, behavior: 'smooth'});
}

let slideIndex = 2;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function popupMap() {
  var popupMap = document.getElementById("popupMap");
  popupMap.style.display = "block";
}

function closeMap() {
  var popupMap = document.getElementById("popupMap");
  popupMap.style.display = "none";
}