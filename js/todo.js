// 요소 선언
const toDoForm = document.querySelector(".todoForm");
const toDoInput = document.querySelector(".todoForm input");
const toDoList = document.querySelector(".todoList");
const toDoBox = document.querySelector(".todoBox");
const toDoBoxWraper = document.querySelector(".todoBox__wraper");
const toDoBoxStartMessage = document.querySelector(".todoBox__startMessage");
const toDoBtn = document.querySelector(".todo__btn");


// 상수 선언
const TODOS_KEY = "todos";


// 배열 및 함수 선언
let toDos = [];

function saveTodos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function todoBoxResize() {
  const winHeight = window.innerHeight;
  const todoHeight = winHeight * 0.7;

  let saves = localStorage.getItem("TODOS_KEY");
  const parseSaves = JSON.parse(saves).length;
  // 기본 box높이는 투두리스트 개수 * 28px, 투두리스트가 많아질수록 박스 높이 길어짐
  const boxHeight = parseSaves * 28 ;

  // 로컬스토리지에 할일이 있어야 투두리스트 보여줌
  if (parseSaves > 0) {
    toDoBoxStartMessage.classList.add("hidden");
  }
  else {
    toDoBoxStartMessage.classList.remove("hidden");
  }

  // box크기 재설정
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

// 할일을 li태그로 생성함
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
  /* css로 fade효과를 주다보니 todo버튼을 누르지 않아도 새로고침 할 때마다 todoBox가 fade 잔상이 보임
   * 그래서 새로고침 했을 때는 처음에 hidden을 주어 보이이지 않게 하고
   * todo 버튼을 누르면 처음에는 hidden을 없에다가 
   * 두 번째 부터는 toggle를 써서 버튼을 누를 때마다 fade효과가 보이도록 함
   */
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


// main
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
