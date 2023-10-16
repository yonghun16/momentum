// 요소 선택
const clock = document.querySelector(".clock");

// 함수 선언
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}`;
}


// main
getClock();
setInterval(getClock,1000);


/*
 * padStart(2, "0") -> 자리수를 2로 맞추고 남는 앞 부분을 "0"으로 채움
 * padEnd  ->  padStart의 반대
 * setInterval(getClock,1000);  -> getClock함수를 1초마다 실행
 */
