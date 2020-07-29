const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
btn.addEventListener("click", () => {
  fetch(url)
    .then((data) => data.json())
    .then((response) => displayData(response));
});

function displayData(response) {
  img.classList.add("shake-img");
  const { value: joke } = response;
  const balayya = joke.replace(/Chuck Norris/, "Balayya");
  content.textContent = balayya;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, Math.random() * 1000);
}
