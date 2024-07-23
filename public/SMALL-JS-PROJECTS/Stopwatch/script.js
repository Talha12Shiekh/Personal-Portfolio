let timer = document.querySelector("h2"),
count = 0,
interval;

(() => {
    timer.innerHTML = JSON.parse(localStorage.getItem("count"))
})()

function increaseCounter(){
    count = localStorage.getItem("count")
    count++;
    
    timer.innerHTML = count;

    localStorage.setItem("count",JSON.stringify(count));
}

function increase(){
    interval = setInterval(increaseCounter)
}

function stop(){
    clearInterval(interval)
    timer.innerHTML = count;

    localStorage.setItem("count",JSON.stringify(count));
}