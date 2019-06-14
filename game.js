let health = 100;
let name = "whatever"
let hits = 0;

function slap() {
  health--;
  hits++;
  update();

}

function punch() {
  health -= 5;
  hits++;
  update();

}
function kick() {
  health -= 10;
  hits++;
  update();

}

function update() {
  document.querySelector("#name").innerHTML = `${name}`
  document.querySelector("#health").innerHTML = `${health}`
  document.querySelector("#hits").innerHTML = `${hits}`
}

update();