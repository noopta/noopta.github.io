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

document.querySelector(".sendBtn").addEventListener("click", function () {
  var firstName = document.querySelector(".first").value;
  var lastName = document.querySelector(".last").value;
  var messageValue = document.querySelector(".inquiry").value;
  var inquiryValue = document.querySelector(".topic").value;
  window.location.href =
    "mailto:anupta@webops.ca?subject=" +
    inquiryValue +
    "&body=" +
    firstName +
    "%20" +
    lastName +
    "%0A%0A" +
    messageValue;
});
