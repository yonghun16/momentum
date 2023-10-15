const toDoForm = document.querySelector(".todoForm");
const toDoInput = document.querySelector(".todoForm input");
const toDoList = document.querySelector(".todoList");
const toDoBox = document.querySelector(".todoBox");
const toDoBoxWraper = document.querySelector(".todoBox__wraper");
const toDoBoxStartMessage = document.querySelector(".todoBox__startMessage");
const toDoBtn = document.querySelector(".todo__btn");


const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function todoBoxResize() {
  const winHeight = window.innerHeight;
  const todoHeight = winHeight * 0.7;

  let saves = localStorage.getItem("TODOS_KEY");
  const parseSaves = JSON.parse(saves).length;
  const boxHeight = parseSaves * 28 ;

  if (parseSaves > 0) {
    toDoBoxStartMessage.classList.add("hidden");
  }
  else {
    toDoBoxStartMessage.classList.remove("hidden");
  }

  if (boxHeight < 50) {
    toDoBoxWraper.style.height = `40px`;
  }
  else if (boxHeight > winHeight*0.7) {
    toDoBoxWraper.style.height = `${todoHeight}px`;
  }
  else {
    toDoBoxWraper.style.height = `${boxHeight}px`;
  }
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();

  todoBoxResize();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const div = document.createElement("div");
  const checkbox = document.createElement("span");
  checkbox.innerHTML = `<input type="checkbox" id="${li.id}c">`;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText= "🗑";
  button.addEventListener("click", deleteTodo);
  li.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoBtn() {
  if (toDoBox.classList.contains("hidden")) {
    toDoBox.classList.remove("hidden");
  }
  else {
    toDoBox.classList.toggle("todoBoxHidden");
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
  todoBoxResize();
}

function handleWindowResize() {
  todoBoxResize();
}

const savedToDos = localStorage.getItem("TODOS_KEY");

if (savedToDos) {
  const parseedToDos = JSON.parse(savedToDos);
  toDos = parseedToDos;
  parseedToDos.forEach(paintToDo);

  todoBoxResize();
}


toDoForm.addEventListener("submit", handleToDoSubmit);
toDoBtn.addEventListener("click", handleToDoBtn);
window.addEventListener("resize", handleWindowResize);
