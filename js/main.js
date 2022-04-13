"use strict";
// selector de número
const numberSelect = document.querySelector(".js_select");
// caja de cuánto apuesto
const numberInput = document.querySelector(".js_item-box");
// botón de jugar
const playBtn = document.querySelector(".js_play-button");
// mensaje de si he ganado o he perdido
const messageContainer = document.querySelector(".js_final-message");
// saldo que tengo
const amountBox = document.querySelector(".js_amount");
// botón de reset
const resetBtn = document.querySelector(".js_reset-button");

const amountToWin = 200;

let balance = 50;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function renderMessage(msg) {
  messageContainer.innerHTML = msg;
}
function renderAmount() {
  amountBox.innerHTML = `Saldo: ${balance}`
}

function changeBalance(num) {
  balance += num;
}

function winCheck() {
  if (balance >= amountToWin) {
    resetBtn.classList.remove("hidded-button");
    playBtn.classList.add("hidded-button");
    renderMessage("¡Has ganado el juego, gracias por jugar! 💰💰💰");
  }
}

function canBet() {
  const betAmount = numberInput.value;
  if (betAmount > balance) {
    renderMessage("No puedes apostar más dinero que tu saldo 💰");
    return false
  }
  else return true
}

function winBet() {
  const betAmount = numberInput.value;
  renderMessage("Has ganado el doble de lo apostado 😎");
  changeBalance(betAmount * 2);
  renderAmount();
}

function loseBet() {
  const betAmount = numberInput.value;
  renderMessage("Has perdido lo apostado 😰");
  changeBalance(-betAmount);
  renderAmount();
}

function checkBet() {
  const selectedNumber = parseInt(numberSelect.value);
  const numAleat = getRandomNumber(6);
  if (numAleat === selectedNumber) {
    //  coincide número
    winBet();
    // comprobación saldo para ganar
    winCheck();
  } else {
    //  no coincide número
    loseBet();
  }
}

function handleClickBtn(event) {
  event.preventDefault();
  if (canBet()) {
    checkBet();
  } 
}

playBtn.addEventListener("click", handleClickBtn);
