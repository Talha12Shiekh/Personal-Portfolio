let feet = document.getElementById("feet");
let inches = document.getElementById("inches");

feet.addEventListener("input", function () {
  let f = this.value;
  let i = f * 12;
  inches.value = i;
});

inches.addEventListener("input", function () {
  let i = this.value;
  let f = i / 12;
  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }
  feet.value = f;
});

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", function () {
  let f = this.value;
  let i = (f * 9) / 5 + 32;
  fahrenheit.value = i;
});
fahrenheit.addEventListener("input", function () {
  let i = this.value;
  let f = ((i - 32) * 9) / 5;
  celsius.value = f;
});
