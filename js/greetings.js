const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm input");
const greeting = document.querySelector(".greeting");
const greetingWrap = document.querySelector(".greeting_wrap");
const logoutOpacity = document.querySelector(".greeting_wrap .opacity0");
const logoutBtn = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Good morning, ${username}.`;
  greetingWrap.classList.remove(HIDDEN_CLASSNAME);
}

function hoverGreeting() {
  logoutOpacity.classList.remove("opacity0"); 
}
function leaveGreeting() {
  logoutOpacity.classList.add("opacity0"); 
}
function clickLogout() {
  localStorage.removeItem("username");
  greetingWrap.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

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
