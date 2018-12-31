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

var slideDex = 0;
autoSlide();

function autoSlide() {
  var i;
  var slides = document.querySelectorAll(".slides");
  console.log(slides, slides[1], slides[2]);
  for (i = 0; i < slides.length; i++) {
    document.querySelectorAll(".slides")[i].style.display = "none";
  }
  slideIndex++;
  if (slideDex > slides.length) {slideDex = 1}
  document.querySelectorAll(".slides")[slideDex-1].style.display = "block";
  setTimeout(autoSlide, 2000); // Change image every 2 seconds
}