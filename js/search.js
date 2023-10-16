const searchForm = document.querySelector(".searchForm");
const searchFormGlass = document.querySelector(".searchForm__glass");
const searchInput = document.querySelector(".searchForm input");
const searchEngin = document.querySelector(".searchForm__engin");


// searchForm에 마우스가 들어 왔을 때 이벤트
function hoverSearch() {
  if(!searchForm.classList.contains("searchForm-hover") ||
     !searchForm.classList.contains("searchForm-focus")
    ){
    searchForm.classList.add("searchForm-hover"); 
    searchFormGlass.classList.add("searchForm__glass-hover");
    searchEngin.classList.add("searchForm__engin-hover")
  }
}

// searchForm에서 마우스가 벗어 났을 때 이벤트
function leaveSearch() {
  searchForm.classList.remove("searchForm-hover"); 
  searchFormGlass.classList.remove("searchForm__glass-hover");
  searchEngin.classList.remove("searchForm__engin-hover")
}

// inputbox focus 선택 이벤트
function focusSearch() {
  searchForm.classList.remove("searchForm-hover"); 
  searchForm.classList.add("searchForm-focus");
  searchFormGlass.classList.remove("searchForm__glass-hover");
  searchFormGlass.classList.add("searchForm__glass-focus");
  searchEngin.classList.remove("searchForm__engin-hover");
  searchEngin.classList.add("searchForm__engin-focus");
}

// inputbox focus가 바뀌었을 때 이벤트
function focusChangeSearch() {
  searchForm.classList.toggle("searchForm-focus");
  searchFormGlass.classList.toggle("searchForm__glass-focus");
  searchEngin.classList.toggle("searchForm__engin-focus");
}


// main
searchForm.addEventListener("mouseover", hoverSearch);
searchForm.addEventListener("mouseout", leaveSearch);
searchInput.addEventListener("focus", focusSearch);
searchInput.addEventListener("blur", focusChangeSearch);
