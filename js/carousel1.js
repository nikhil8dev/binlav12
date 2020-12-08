// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1} 
//   x[slideIndex-1].style.display = "block"; 
//   setTimeout(carousel, 8000); 
// }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



var childSlideIndex = 1;
childDivs(childSlideIndex);

function childPlusDivs(n) {
  childDivs(childSlideIndex += n);
}

function childDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesChild");
  if (n > x.length) {childSlideIndex = 1}
  if (n < 1) {childSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[childSlideIndex-1].style.display = "block";  
}

