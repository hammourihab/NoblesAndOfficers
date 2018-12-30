var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var modals = document.getElementsByClassName("modal");
var images = document.getElementsByClassName("slideImg");
var modalImgs = document.getElementsByClassName("modal-content");

for(var i = 0; i<images.length; i++)
{
  console.log(modals[i]);
  images[i].onclick = function () {
  modals[i].style.display = "block";
  modalImgs[i].src = this.src;

  }
}

var span = document.getElementsByClassName("closeImg")[0];
span.onclick = function() {
  modal.style.display = "none";
}