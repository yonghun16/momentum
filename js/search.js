const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form input");


function onSearchSubmit() {
  const searchItem = searchInput.value;
  console.log(searchItem);
}

searchForm.addEventListener("submit", onSearchSubmit);
