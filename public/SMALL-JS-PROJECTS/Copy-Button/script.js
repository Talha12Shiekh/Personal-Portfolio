
let writeenINput = document.getElementById("input");
console.log(input);

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    writeenINput.select();
    navigator.clipboard.writeText(writeenINput.value);
    setTimeout(() => {
        btn.innerText = "Copied";
    }, 100);
    setTimeout(() => {
        btn.innerText = "Copy text";
    }, 2000);
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    writeenINput.value = "";
    setTimeout(() => {
        btn2.innerText = "Cleared";
    }, 100);
    setTimeout(() => {
        btn2.innerText = "Clear text";
    }, 2000);
});