const images = [ "0.jpeg", "1.jpeg", "2.jpeg" ];

const chosenImage = images[parseInt(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
