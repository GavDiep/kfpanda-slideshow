// Kung Fu Panda Slideshow / Gallery

// Global Variables
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
  "po.png"
];

// Create image Gallery
let imgContainerEl = document.getElementById("img-container");
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += "<img src='images/" + imgPaths[i] + "'>";
}
