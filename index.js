var h1 = document.querySelector('h1');
var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');
var random1 = Math.random();
var random2 = Math.random();
random1 *= 6;
random2 *= 6;
random1 = Math.floor(random1) +1;
random2 = Math.floor(random2) +1;

showsTheDice();

function showsTheDice() {
  switch (random1) {
    case 1:
      dice1.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      dice1.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      dice1.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      dice1.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      dice1.setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      dice1.setAttribute("src", "./images/dice6.png");
      break;
  }

  switch (random2) {
    case 1:
      dice2.setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      dice2.setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      dice2.setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      dice2.setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      dice2.setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      dice2.setAttribute("src", "./images/dice6.png");
      break;
  }

  if (random1 > random2) {
    h1.innerText = "🚩 O Player 1 venceu!"
  } else if (random2 > random1) {
    h1.innerText = "O Player 2 venceu! 🚩"
  } else {
    h1.innerText = "Empate!"
  }

}