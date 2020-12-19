
document.querySelector(".landingBooking").addEventListener("mouseover", function(){
  document.querySelector(".hoverRectangle").style.width = "50px";
  document.querySelector(".hoverRectangle").style.opacity = "1.0";
});

document.querySelector(".landingBooking").addEventListener("mouseout", function(){
  document.querySelector(".hoverRectangle").style.width = "20px";
  document.querySelector(".hoverRectangle").style.opacity = "0.4";
});