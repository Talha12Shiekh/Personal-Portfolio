var container2 = document.getElementsByClassName('container2')[0];
var containerthird = document.getElementsByClassName('container3')[0];
var checkIcon = document.getElementById('check-btn');
var XIcon = document.getElementById('x-icon');
let button = document.querySelector("button");
let updateId;
let notes = [];
let isUpdate = true;
var i = 0;
button.addEventListener("click",typedNote)

XIcon.addEventListener('click', function () {
    typedNote();
});

checkIcon.addEventListener('click', function () {
    CreateNote();
});

function typedNote() {
    if (containerthird.style.display == "none") {
        containerthird.style.display = 'block';
    } else {
        containerthird.style.display = "none";
    }
}

function CreateNote() {
    let noteText = document.getElementById("note-text").value;
    if (noteText) {
        saveNotes(noteText);
    }
}

function saveNotes(text) {
    let inputvalue = document.getElementById("note-text").value;
    const newNote = { text, id: Date.now() };
    if (!isUpdate) {
        notes = notes.map(element => {
            if (element.id === updateId) {
                element.text = inputvalue;
            }
            return element;
        });
    } else {
        notes.push(newNote);
    }
    displayNotes();
}

function displayNotes() {
    document.querySelectorAll("h1").forEach(child => child.remove());
    notes.forEach((note, index) => {
        let node1 = document.createElement('h1');
        node1.textContent = note.text;
        node1.setAttribute('style', 'width: 250px; height: 250px; font-size: 26px; padding: 25px;word-wrap: break-word; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75);');
        node1.style.margin = margin();
        node1.style.background = backgroundColor();
        node1.style.transform = rotate();
        let node0 = document.createElement('div');
        node0.appendChild(node1);
        container2.insertAdjacentElement("beforeend", node0);

        node0.addEventListener('mouseenter', () => {
            node0.style.transform = 'scale(1.1)';
        });
        node0.addEventListener('mouseleave', () => {
            node0.style.transform = 'scale(1)';
        });

        document.getElementById("note-text").value = "";
    });
}

function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    var random_rotation = ["rotate(3deg)", "rotate(1deg)", "rotate(-3deg)", "rotate(-1deg)", "rotate(-5deg)", "rotate(10deg)"];
    return random_rotation[Math.floor(Math.random() * random_rotation.length)];
}

function backgroundColor() {
    var random_color = ["#c2ff8d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (i > random_color.length - 1) {
        i = 0;
    }
    return random_color[i++];
}

// Initialize notes display
displayNotes();
