document.querySelector(".btnTwo").addEventListener("click", function () {
  document.querySelector(".red").style.backgroundColor = "white";
  document.querySelector(".red").style.color = "black";
  document.querySelector(".red").style.opacity = "0.7";
  document.querySelector(".transparentBtn").style.backgroundColor = "#ff5f58";
  document.querySelector(".transparentBtn").style.opacity = "1.0";
  document.querySelector(".transparentBtn").style.color = "white";

  document.querySelector(".infoContainer").style.display = "none";
  document.querySelector(".faqContainer").style.display = "block";

  setTimeout(function () {
    document.querySelector(".questionOneContainer").style.top = "50%";
  }, 300);

  setTimeout(function () {
    document.querySelector(".questionTwoContainer").style.top = "95%";
  }, 600);

  setTimeout(function () {
    document.querySelector(".questionThreeContainer").style.top = "140%";
  }, 900);
});

document.querySelector(".btnOne").addEventListener("click", function () {
  var infoBtnColor = document.querySelector(".btnOne").style.color;
  var faqBtnColor = document.querySelector(".btnTwo").style.backgroundColor;
  var currentBtnColor = "#ff5f58";

  if (faqBtnColor === currentBtnColor) {
    document.querySelector(".red").style.backgroundColor = "currentBtnColor";
    document.querySelector(".red").style.color = "white";
    document.querySelector(".red").style.opacity = "1.0";

    document.querySelector(".transparentBtn").style.backgroundColor = "white";
    document.querySelector(".transparentBtn").style.opacity = "0.7";
    document.querySelector(".transparentBtn").style.color = "black";
  } else {
    document.querySelector(".red").style.backgroundColor = currentBtnColor;
    document.querySelector(".red").style.color = "white";
    document.querySelector(".red").style.opacity = "1.0";

    document.querySelector(".transparentBtn").style.backgroundColor = "white";
    document.querySelector(".transparentBtn").style.color = "black";
    document.querySelector(".infoContainer").style.display = "block";
    document.querySelector(".faqContainer").style.display = "none";
  }
});

document.querySelector(".navOne").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.transition = "all 1s";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.left = "69.7%";
});

document.querySelector(".navOne").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

document.querySelector(".navTwo").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.left = "77.5%";
});

document.querySelector(".navTwo").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

document.querySelector(".navThree").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.left = "85.5%";
});

document.querySelector(".navThree").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});

document.querySelector(".navFour").addEventListener("mouseover", function () {
  document.querySelector(".hoverRectangle").style.display = "inline-block";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
  document.querySelector(".hoverRectangle").style.left = "93.8%";
});

document.querySelector(".navFour").addEventListener("mouseout", function () {
  document.querySelector(".hoverRectangle").style.opacity = "0.3";
});
