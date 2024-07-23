let button = document.querySelector("[data-button]");
let container = document.querySelector(".div_element_container");
let buttonContainer = document.querySelector(".div_button_container");
button.addEventListener("click", () => {
  let html = `<div class="div_element">click here to write</div>`;
  container.innerHTML += html;
});
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("div_element")) {
    let innertext = e.target.innerHTML;
    e.target.outerHTML = `<div class="content_container"><textarea class="textarea">${innertext}</textarea><button class="icon"><i class="change fa-solid fa-pen-to-square"></i></button> </div>`;
  }
  if (e.target.classList.contains("change")) {
    let textvalue = e.target.parentElement.previousElementSibling.value;
    e.target.parentElement.previousElementSibling.parentElement.innerHTML = `<div class="div_element">${textvalue}</div><button class="dlt"><i class="delete fas fa-trash"></i></button>`;
  }

  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
