    let inputs = document.querySelectorAll("input");
    let box = document.querySelector("[class='gradient_box']");
    let select = document.querySelector("select");
    let textarea = document.querySelector("textarea");
    let button = document.querySelector("button");

    inputs.forEach(input => {
        input.addEventListener("input",handleColors)
    });

    select.addEventListener("change",handleColors);

    button?.addEventListener("click", async () => {
        await navigator.clipboard.writeText(textarea.value);

        button.innerText = "Color copied";

        setTimeout(() => {
        button.innerText = "Copy color";
        }, 2000);
    })

    function handleColors() {
        box.style.background = `linear-gradient(${select.value},${inputs[0].value},${inputs[1].value})`     
        textarea.value = `background: linear-gradient(${select.value},${inputs[0].value},${inputs[1].value})`
    }