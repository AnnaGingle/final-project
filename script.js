//Keydown event for imgs 
const img = document.querySelector("img");
const images = [
  "image src",
  "image src",
  "image src",
  "image src"
];

let index = 0;
document.addEventListener("keydown", (event) => {
  if (event.key == "37" && index > 1) {
  index--;
  } else if (event.keyCode == 39 && index < (images.length - 1)) {
    index++;
  }
  img.src = images[index]
});