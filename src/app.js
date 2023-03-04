//crea las variables de la carta.

let valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let pinta = ["♥", "♦", "♠", "♣"];

function creaValor() {
  let randomValor = Math.floor(Math.random() * valor.length);
  return valor[randomValor];
}

function creaPinta() {
  let randomPinta = Math.floor(Math.random() * pinta.length);
  return pinta[randomPinta];
}

function onLoad() {
  let pinta = document.querySelector("#pinta");
  let valor = document.querySelector("#valor");
  let pinta2 = document.querySelector("#pinta2");
  let x = creaPinta(pinta);
  if (x == "♥" || x == "♦") {
    pinta.className = "p-2 text-danger";
    pinta2.className = "p-2 text-danger";
    valor.className = "p-5 text-center text-danger";
  }
  pinta.innerHTML = x;
  valor.innerHTML = creaValor(valor);
  pinta2.innerHTML = x;
}
onLoad();
