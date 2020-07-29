const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      img.classList.add("shake-img");
      const { value: joke } = JSON.parse(xhr.responseText);
      const balayya = joke.replace(/Chuck Norris/, "Balayya");
      content.textContent = balayya;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, Math.random() * 1000);
    } else {
      console.log({
        status: xhr.status,
        message: status.statusText,
      });
    }
  };
}
