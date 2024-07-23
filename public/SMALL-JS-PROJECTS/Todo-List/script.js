const $ = (el) => document.querySelector(el);

let input = $("input[type='text']"),
  items_container = $(".items_container"),
  items = [],
  button = $("button");

function checkList(key) {
  const findedItem = items.find((ite) => ite.key == key);
  findedItem.checked = !findedItem.checked;
  localStorage.setItem("items", JSON.stringify(items));
  addItems();
}

function addItems() {
  let localItem = localStorage.getItem("items");
  if (localItem) {
    items = JSON.parse(localItem);
  } else {
    items = [];
  }
  items_container.innerHTML = "";
  items.forEach(({ value, checked, key }) => {
    let item = `<div class="single_item ${checked ? "completed" : ""}">
            <div onclick="checkList(${key})">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"/></svg>
            </div>
            <div>
                <h3>${value}</h3>
            </div>
        </div>`;
    items_container.innerHTML += item;
    input.value = "";
  });
}

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (e.target.value !== "") {
      let itemObject = {
        value: e.target.value,
        checked: false,
        key: Date.now().toString(),
      };
      items.push(itemObject);
      localStorage.setItem("items", JSON.stringify(items));
      addItems(itemObject);
    }
  }
});

button.addEventListener("click", () => {
  items = [];
  localStorage.setItem("items", JSON.stringify(items));
  addItems();
});

addItems();
