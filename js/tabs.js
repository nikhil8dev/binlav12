// function openTab(cityName) {
//     var i;
//     var x = document.getElementsByClassName("flowTab");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     document.getElementById(cityName).style.display = "block";
//   }

function openTab(evt, cityName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("flowTab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
  
}

function buttonClicked() {
  document.querySelectorAll(".work-button").forEach((button) => {
    button.classList.remove("active");
  });

  this.classList.add("active");
  
}

document.querySelectorAll(".work-button").forEach((button) => {
  button.onmouseenter = buttonClicked;
});


function buttona() {
  document.querySelectorAll(".work-tab").forEach((button) => {
    button.classList.remove("active");
  });

  this.classList.add("active");
  
}


document.querySelectorAll(".work-tab").forEach((button) => {
  button.onmouseenter = buttona;
 
});



