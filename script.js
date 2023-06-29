const fact = document.querySelector(".fact");
const basla = document.querySelector(".basla");
const evvelki = document.querySelector(".evvelki");
const sonraki = document.querySelector(".sonraki");
const sonrakiBir = document.querySelector(".sonraki1");
const evvelkiBir = document.querySelector(".evvelki1");
const p = document.querySelector("p");
const btn = document.querySelector(".btn1");

basla.addEventListener("click", function () {
  p.classList.toggle("hidden");
  sonraki.classList.toggle("hidden");
  basla.classList.add("hidden");
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Data cavab vermir");
      }
    })
    .then((data) => {
      const html = data.fact;
      fact.insertAdjacentHTML("beforeend", html);
      localStorage.setItem("melumat 1", data.fact);
    });
  evvelki.classList.remove("hidden");
});

sonraki.addEventListener("click", function () {
  sonraki.classList.toggle("hidden");
  sonrakiBir.classList.toggle("hidden");
  fact.textContent = "";
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Data cavab vermir");
      }
    })
    .then((data) => {
      const html = data.fact;
      fact.insertAdjacentHTML("beforeend", html);
      localStorage.setItem("melumat 2", html);
    });
});

evvelki.addEventListener("click", function () {
  evvelki.classList.toggle("hidden");
  fact.textContent = "";
  evvelkiBir.classList.toggle("hidden");
  const kohne = localStorage.getItem("melumat 1");
  if (kohne != null) {
    fact.insertAdjacentHTML("beforeend", kohne);
  }
});

sonrakiBir.addEventListener("click", function () {
  sonraki.classList.toggle("hidden");
  sonrakiBir.classList.toggle("hidden");
  fact.textContent = "";
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Data cavab vermir");
      }
    })
    .then((data) => {
      const html = data.fact;
      fact.insertAdjacentHTML("beforeend", html);
      localStorage.setItem("melumat 1", html);
    });
});

evvelkiBir.addEventListener("click", function () {
  fact.textContent = "";
  evvelki.classList.toggle("hidden");
  evvelkiBir.classList.toggle("hidden");
  const kohne = localStorage.getItem("melumat 2");
  if (kohne != null) {
    fact.insertAdjacentHTML("beforeend", kohne);
  }
});

btn.addEventListener("click", function () {
  localStorage.clear();
});
