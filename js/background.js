const images = [ 
  "1.jpeg",
  "2.jpeg",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.jpg"
];
const chosenImage = images[parseInt(Math.random()*images.length)];

const backImage = document.querySelector("main");

backImage.style.backgroundImage = `url(img/${chosenImage})`;
