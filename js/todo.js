const toDoForm = document.querySelector(".todoForm");
const toDoInput = document.querySelector(".todoForm input");
const toDoList = document.querySelector(".todoList");
const toDoBox = document.querySelector(".todoBox__wraper");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function todoBoxResize() {
  const winHeight = window.innerHeight;
  const todoHeight = winHeight * 0.8;

  let saves = localStorage.getItem("TODOS_KEY");
  const parseSaves = JSON.parse(saves).length;


  const boxHeight = parseSaves * 28 + 40;
  if (boxHeight < 70) {
    toDoBox.style.height = `40px`;
  }
  else if (boxHeight > winHeight*0.8) {
    toDoBox.style.height = `${todoHeight}px`;
  }
  else {
    toDoBox.style.height = `${boxHeight}px`;
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
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText= "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
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

const savedToDos = localStorage.getItem("TODOS_KEY");

if (savedToDos) {
  const parseedToDos = JSON.parse(savedToDos);
  toDos = parseedToDos;
  parseedToDos.forEach(paintToDo);

  todoBoxResize();
}


toDoForm.addEventListener("submit", handleToDoSubmit);


