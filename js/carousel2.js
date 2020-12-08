var pSlideIndex = 1;
pDivs(pSlideIndex);

function proDivs(n) {
  pDivs(pSlideIndex += n);
}

function pDivs(n) {
  var i;
  var x = document.getElementsByClassName("pSlide");
  if (n > x.length) {pSlideIndex = 1}
  if (n < 1) {pSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[pSlideIndex-1].style.display = "block";  
}


var aboutSlideIndex = 1;

aboutDivs(aboutSlideIndex);

function aboutCarouselDivs(n) {
  aboutDivs(aboutSlideIndex += n);
}

function aboutDivs(n) {
  var i;
  var x = document.getElementsByClassName("aboutSlide");
  if (n > x.length) {aboutSlideIndex = 1}
  if (n < 1) {aboutSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[aboutSlideIndex-1].style.display = "block";  
}


var serviceSlideIndex = 1;

serviceDivs(serviceSlideIndex);

function serviceCarouselDivs(n) {
  serviceDivs(serviceSlideIndex += n);
}

function serviceDivs(n) {
  var i;
  var x = document.getElementsByClassName("serviceSlide");
  if (n > x.length) {serviceSlideIndex = 1}
  if (n < 1) {serviceSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[serviceSlideIndex - 1].style.display = "block";  
}
