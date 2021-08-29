window.addEventListener("load", start);

function start() {
  fetch("actors.json")
    .then((response) => response.json())
    .then((data) => data.forEach(showActor));
}

function showActor(actor) {
  console.log(actor);
  const template = document.querySelector("#actorsTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".actorsList p").textContent = actor.fullname;
  clone.querySelector(".actorsList").addEventListener("click", (e) => {
    document.querySelector(".modal p").textContent = actor.fullname;
    document.querySelector("h2").textContent = actor.movie;
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector("button").addEventListener("click", (e) => {
      document.querySelector(".modal").classList.add("hidden");
    });
  });
  document.querySelector(".actors").appendChild(clone);
}
