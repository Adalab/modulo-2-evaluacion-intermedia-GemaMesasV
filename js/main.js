// selector de número
const numberSelect = document.querySelector(".js_select");
// caja de cuánto apuesto
const numberInput = document.querySelector(".js_item-box");
// botón de jugar
const playBtn = document.querySelector(".js_play-button");
// mensaje de si he ganado o he perdido
const message = document.querySelector(".js_final-message");
// saldo que tengo
const amount = document.querySelector(".js_amount");
// botón de reset
const resetBtn = document.querySelector(".js_reset-button");

let balance = 50;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickBtn(event) {
  event.preventDefault();
  const selectedNumber = numberSelect.value;
  const betAmount = numberInput.value;
  const numAleat = getRandomNumber(6);
  if (betAmount > balance) {
    message.innerHTML = "No puedes apostar más dinero que tu saldo 💰";
  } else if (numAleat == selectedNumber) {
    //  coincide número
    message.innerHTML = "Has ganado el doble de lo apostado 😎";
    balance = betAmount * 2 + balance;
    amount.innerHTML = `Saldo: ${balance}`;
    // comprobación saldo para ganar
    if (balance >= 200) {
      resetBtn.classList.remove("hidded-button");
      playBtn.classList.add("hidded-button");
    }
  } else {
    //  no coincide número
    message.innerHTML = "Has perdido lo apostado 😰";
    balance = balance - betAmount;
    amount.innerHTML = `Saldo: ${balance}`;
  }
}

playBtn.addEventListener("click", handleClickBtn);
