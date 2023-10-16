const backImage = document.querySelector("main");

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

// main
const chosenImage = images[parseInt(Math.random()*images.length)];

backImage.style.backgroundImage = `url(img/${chosenImage})`;



/* 배경 이미지의 개수 만큼 난수 발생, 난수를 int로 형변환
 * 배경 이미지 main 태그에 삽입
 */
