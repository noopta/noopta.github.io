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

$(document).ready(function () {
  $("div.scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("div.whiteBoxLeft").offset().top,
      },
      850
    );
  }),
    $("div.middle").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("div.bottom").offset().top,
        },
        1000
      );
    }),
    $("div.bottom").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("div.top").offset().top,
        },
        1000
      );
    });
});
