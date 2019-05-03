
//Random image slideshow
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const img = document.querySelector("img");
const images = [
  "images/20.jpg",
  "images/07.jpg",
  "images/08.jpg",
  "images/19.jpg"
];

setInterval(() => {
  const i = getRandomNumber(images.length);
  img.src = images[i];
}, 2000);


$(window).scroll(function(e){
  parallax();
});

//PARALLAX FUNCTION
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.1)+'px');
}