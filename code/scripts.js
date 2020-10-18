document.querySelector(".navOne").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.transition = "all 1s";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.left = "68.5%";
});

document.querySelector(".navOne").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

document.querySelector(".navTwo").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.left = "76.5%";
});

document.querySelector(".navTwo").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

document.querySelector(".navThree").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.left = "84.2%";
});

document.querySelector(".navThree").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

document.querySelector(".navFour").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.left = "92.5%";
});

document.querySelector(".navFour").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

window.onload = function () {
  document.querySelector(".blueBox").style.transition = "all 2s";
  document.querySelector(".blueBoxSquare").style.transition = "all 3s";
  document.querySelector(".blueBox").style.left = "4%";
  document.querySelector(".blueBoxSquare").style.left = "62%";

  document.querySelector(".titleOne").style.transitionDelay = "1s";
  document.querySelector(".titleOne").style.top = "10%";

  document.querySelector(".titleTwo").style.transitionDelay = "1.3s";
  document.querySelector(".titleTwo").style.top = "24%";

  document.querySelector(".titleThree").style.transitionDelay = "1.6s";
  document.querySelector(".titleThree").style.top = "49%";
};
