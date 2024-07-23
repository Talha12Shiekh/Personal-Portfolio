let button = document.querySelector("#generateBtn"),
  memeContainer = document.querySelector(".meme-container");

button.addEventListener("click", async () => {
  let loading = ` <div class="loadingContainer">
                <h1>Loading...</h1>
            </div>`;

  memeContainer.innerHTML = loading;

  let FetchedImage = await fetch("https://meme-api.com/gimme");
  let { url } = await FetchedImage.json();

  memeContainer.innerHTML = ""

  memeContainer.style.backgroundImage = `url(${url})`;
});
