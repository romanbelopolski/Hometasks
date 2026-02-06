// Размеры игрового поля
const pole_Width = 800;
const pole_Height = 500;

// Размеры ракетки
const raket_Width= 15;
const raket_Height = 100;

// Размер мяча
const ball_size = 50;

// Скорости
const raket_Speed = 6;     // скорость ракетки
const ballSpeed = 4;  //  скорость мяча

const distance = 35;

//  Создание кнопки Старт
const startButton = document.createElement("button");
startButton.textContent = "Старт!";
startButton.style.position = "absolute"
startButton.style.left ="10px";
startButton.style.top ="10px";
document.body.appendChild(startButton);

//создание счёта
const countField = document.createElement("div");
countField.style.width = (pole_Width/8)+"px";
countField.style.height = distance+"px";
countField.style.left =(pole_Width/2)-((pole_Width/8)/2)+"px";
countField.style.position = "absolute"
countField.style.top = "0px"
countField.style.display = "flex";
countField.style.justifyContent = "center";
countField.style.alignItems = "center";
countField.style.gap = "8px"; 
document.body.append(countField);

// содание счёта
const leftCount = document.createElement("div");
leftCount.textContent ="0"
leftCount.style.fontSize = 35 + "px"
countField.append(leftCount);

const razdelitel = document.createElement("div");
razdelitel.textContent =":"
razdelitel.style.fontSize = 35 + "px"
countField.append(razdelitel);

const rightCount = document.createElement("div");
rightCount.textContent ="0"
rightCount.style.fontSize = 35 + "px"
countField.append(rightCount);

// создание поля
const gamePole = document.createElement("div");
gamePole.style.width = pole_Width + "px";
gamePole.style.height = pole_Height + "px";
gamePole.style.left = 0 + "px";
gamePole.style.top = distance + "px";
gamePole.style.position = "relative"
gamePole.style.backgroundColor = "Yellow"
document.body.append(gamePole);

//  создание левой ракетки
const leftRaket = document.createElement("div");
leftRaket.style.width = raket_Width + "px";
leftRaket.style.height = raket_Height + "px";
leftRaket.style.left = 0 +"px"
leftRaket.style.top =  (pole_Height/2)-(raket_Height/2) +"px"
leftRaket.style.position = "absolute"
leftRaket.style.backgroundColor = "Green"

//  создание правой ракетки
const rightRaket = document.createElement("div");
rightRaket.style.width = raket_Width + "px";
rightRaket.style.height = raket_Height + "px";
rightRaket.style.left = (pole_Width - raket_Width) +"px"
rightRaket.style.top =  (pole_Height/2)-(raket_Height/2) +"px"
rightRaket.style.position = "absolute"
rightRaket.style.backgroundColor = "Blue"

//  создание мяча
const ball = document.createElement("div");
ball.style.width = ball_size + "px";
ball.style.height = ball_size + "px";
ball.style.left = (pole_Width/2)-(ball_size/2)+"px";
ball.style.top =  (pole_Height/2)-(ball_size/2)+"px";
ball.style.position = "absolute"
ball.style.backgroundColor = "Red"
ball.style.borderRadius = "50%";

//добавление ракеток и мяча
gamePole.append(leftRaket);
gamePole.append(rightRaket);
gamePole.append(ball);

//добавление переменных состояний
let ballX = 0;
let ballY = 0;

let ballSpeedX = 0;
let ballSpeedY = 0;

let leftRaketY = 0;
let leftRaketSpeed = 0;

let rightRaketY = 0;
let rightRaketSpeed = 0;

let scoreLeft = 0;
let scoreRight = 0;

let gameActive = false;

function startPositions() {
  leftRaketY = (pole_Height - raket_Height) / 2;
  rightRaketY = (pole_Height - raket_Height) / 2;
  ballX = (pole_Width - ball_size) / 2;
  ballY = (pole_Height - ball_size) / 2;

  ballSpeedX = 0;
  ballSpeedY = 0;

  updatePole();
  updateScore();
}

function updateScore() {
  leftCount.textContent = scoreLeft;
  rightCount.textContent = scoreRight;
}

function updatePole() {
  leftRaket.style.top = leftRaketY + "px";
  rightRaket.style.top = rightRaketY + "px";
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}



document.addEventListener("keydown", function (eo) {
  if (eo.key === "Shift") {
    leftRaketSpeed = -raket_Speed;
  }
  if (eo.key === "Control") {
    leftRaketSpeed = raket_Speed;
  }
  if (eo.key === "ArrowUp") {
    rightRaketSpeed = -raket_Speed;
  }
  if (eo.key === "ArrowDown") {
    rightRaketSpeed = raket_Speed;
  }
});

document.addEventListener("keyup", function (eo) {
  if (eo.key === "Shift" || eo.key === "Control") {
    leftRaketSpeed = 0;
  }
  if (eo.key === "ArrowUp" || eo.key === "ArrowDown") {
    rightRaketSpeed = 0;
  }
});

// действия по кнопке старт
startButton.addEventListener("click", function () {
  ballX = (pole_Width- ball_size) / 2;
  ballY = (pole_Height - ball_size) / 2;
  gameActive = true;
  // Случайное направление
  if (Math.random() > 0.5) {
  ballSpeedX = ballSpeed;
} else {
  ballSpeedX = -ballSpeed;
}
  ballSpeedY = (Math.random() * 4 - 2); // диапазон от -2 до 2
});

// выполнение по таймеру
setInterval(function () {

    if (!gameActive) return;
  //  Движение ракеток 
  leftRaketY += leftRaketSpeed;
  rightRaketY += rightRaketSpeed;

  // Ограничения ракеток
  if (leftRaketY < 0) leftRaketY = 0;
  if (leftRaketY > pole_Height - raket_Height){
    leftRaketY = pole_Height - raket_Height;
}

  if (rightRaketY < 0) rightRaketY = 0;
  if (rightRaketY > pole_Height - raket_Height){
    rightRaketY = pole_Height - raket_Height;
  }

  //  Движение мяча 
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  //  Отскок от верх/низ 
  if (ballY <= 0) {
    ballY = 0;
    ballSpeedY = -ballSpeedY;
  }

  if (ballY >= pole_Height - ball_size) { 
    ballY = pole_Height - ball_size;
    ballSpeedY = -ballSpeedY;
  }

  //  Отскок от левой ракетки 
  if (
    ballX <= raket_Width &&
    ballY + ball_size >= leftRaketY &&
    ballY <= leftRaketY + raket_Height
  ) {
    ballX = raket_Width;
    ballSpeedX = -ballSpeedX;
  }

  //  Отскок от правой ракетки 
  if (
    ballX + ball_size >= pole_Width- raket_Width && 
    ballY + ball_size >= rightRaketY &&
    ballY <= rightRaketY + raket_Height  
  ) {
    ballX = pole_Width- raket_Width - ball_size;
    ballSpeedX = -ballSpeedX;
  }

  //  Гол слева 
  if (ballX <= 0) {
    scoreRight++;
    ballSpeedX = 0;
    ballSpeedY = 0;
    ballX = 0;
    gameActive = false;
    updateScore();
  }

  //  Гол справа 
  if (ballX + ball_size >= pole_Width) {
    scoreLeft++;
    ballSpeedX = 0;
    ballSpeedY = 0;
    ballX = pole_Width- ball_size;
    gameActive = false;
    updateScore();
  }


  updatePole();

}, 20);


startPositions();