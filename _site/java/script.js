
//Random image slideshow
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const img = document.querySelector("img");
const images = [
  "images/20.jpg",
  "images/07.jpg",
  
];

setInterval(() => {
  const i = getRandomNumber(images.length);
  img.src = images[i];
}, 1800);


