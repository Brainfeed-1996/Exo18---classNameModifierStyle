const btn = document.querySelector("button");
const monH1 = document.querySelector("h1");
const maDiv = document.querySelector("div");

btn.addEventListener("click", () => {
  monH1.className = "modificationH1";
  maDiv.className = "modificationDiv";
});
