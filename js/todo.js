const toDoForm = document.querySelector(".todoForm");
const toDoInput = document.querySelector(".todoForm input");
const toDoList = document.getElementById(".todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
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
  console.log("df");
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
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY");

if (savedToDos) {
  const parseedToDos = JSON.parse(savedToDos);
  toDos = parseedToDos;
  parseedToDos.forEach(paintToDo);
}

