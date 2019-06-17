let target = {
  health: 100,
  name: "Alien",
  hits: 0,
  items: []
}



let items = {
  cleats: { name: "cleats", modifier: 2, description: "pointy" },
  boomerang: { name: "boomarang", modifier: 1.5, description: "returny" },
  sword: { name: "Sword", modifier: 3, descritpion: "edgy" }
}

// TODO: consilidate the functions for attacking
function slap() {
  target.health -= addMods();
  target.hits++;
  update();

}

function punch() {
  target.health -= 2 + 3 * addMods();
  target.hits++;
  update();

}
function kick() {
  target.health -= 5 * addMods() - 1;
  target.hits++;
  update();

}

var targetNameElem = document.querySelector("#name") // optimizing the game

function update() {
  targetNameElem.innerHTML = `${target.name}`
  document.querySelector("#health").innerHTML = `${target.health > 0 ? target.health : "Dead"}`
  document.querySelector("#hits").innerHTML = `${target.hits}`
}

function giveItem(item) {
  // ensure the item exists prior to pushing
  target.items.push(items[item]);
}

function addMods() {

  let output = 1;
  for (let i in target.items) {
    output *= target.items[i].modifier;
  }
  return output;
}

function resetGame() {
  target.health = 100;
  target.hits = 0;
  target.items = [];
  update();
}

update();