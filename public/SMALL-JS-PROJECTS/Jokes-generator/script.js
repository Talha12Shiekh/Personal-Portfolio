const jokes = document.querySelector("#joke");
const jokesbtn = document.querySelector("#btn");

// defining the function
const jokesgenerator = async () => {
  try {
    const setheader = {
      headers: {
        Accept: "application/json",
      },
    };
    let response = await fetch("https://icanhazdadjoke.com", setheader);
    let data1 = await response.json();
    jokes.innerHTML = data1.joke;
    // console.log(data);
  } catch (error) {
    jokes.innerHTML = `your error is "${error}`;
    jokes.style.color = "red";
    jokes.style.border = "2px solid black";
    // console.log(error.name);
  }
};
jokesbtn.addEventListener("click", jokesgenerator);
jokesgenerator();
