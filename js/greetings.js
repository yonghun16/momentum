// 요소 선택
const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm input");

const greeting = document.querySelector(".greeting");
const greetingWrap = document.querySelector(".greeting_wrap");

const logoutBtn = document.querySelector(".logout");
const logoutOpacity = document.querySelector(".greeting_wrap .opacity0");

// 상수 선언
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// 함수 선언
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Good morning, ${username}.`;
  greetingWrap.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
  /* 'loginForm'을 지우고 '인사말'을 보여줌
   * 로컬 스토리지에 USERNAME_KEY란 KEY로 로그인폼 인풋값을 Value로 저장
   */
}

function hoverGreeting() {
  logoutOpacity.classList.remove("opacity0"); 
  // 마우스 올리면 로그아웃 버튼을 보여줌
}

function leaveGreeting() {
  logoutOpacity.classList.add("opacity0"); 
  // 마우스 옮기면 로그아웃 버튼을 지워줌
}

function clickLogout() {
  localStorage.removeItem("username");
  greetingWrap.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
  /* 로그아웃 버튼 누르면 리셋
   * 로그인 폼 보여주고, 인사말 지워주고
   */
}


// main
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

greetingWrap.addEventListener("mouseover", hoverGreeting);
greetingWrap.addEventListener("mouseout", leaveGreeting);
logoutBtn.addEventListener("click", clickLogout);
