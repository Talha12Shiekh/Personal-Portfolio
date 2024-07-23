const getElement = (element) => document.querySelector(element);

let button = getElement(".btns button:first-child"),
  barCodeContainer = getElement(".bar_code_container"),
  input = getElement("input"),
  image = getElement("img"),
  loading = getElement(".loading"),
  downloadButton = getElement(".btns button:not(:first-child)"),
  barCodeURL = null;

async function showBarCode(api) {
  loading.innerHTML = `<h2>Loading...</h2>`;

  try {
    let response = await fetch(api);

    loading.innerHTML = `<img src="${response.url}"" alt="Loading...">`;
  } catch {
    loading.innerHTML = `<h2>Check your network connection</h2>`;
  }
  button.disabled = false;
}

button.addEventListener("click", () => {
  let value = input.value;
  if (value) {
    barCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  } else {
    barCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://talhawebsite.netlify.app/`;
  }

  barCodeContainer.classList.add("animate_barcode");
  button.disabled = true;
  showBarCode(barCodeURL);
});

downloadButton.addEventListener("click", async () => {
  if (!input.value) return alert("Enter the URL to download it !");
  let DownloadURL = await fetch(barCodeURL),
    BlobResponse = await DownloadURL.blob();
  let anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(BlobResponse);
  anchor.download = "QrCode";
  anchor.click();
});
