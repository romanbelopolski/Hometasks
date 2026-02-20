const svg = document.getElementById("app");

const STATES = {
  MENU: "menu",
  PLAYING: "playing"
};

let currentState = STATES.MENU;

function setState(state) {
  currentState = state;
  svg.innerHTML = "";

  if (state === STATES.MENU) {
    createMenu();
  }

  if (state === STATES.PLAYING) {
    createGamePlaceholder();
  }
}

setState(STATES.MENU);


function createMenu() {
  const ns = "http://www.w3.org/2000/svg";

  // фон
  const bg = document.createElementNS(ns, "rect");
  bg.setAttribute("width", 1280);
  bg.setAttribute("height", 720);
  bg.setAttribute("fill", "#87CEEB");
  svg.appendChild(bg);

  // заголовок
  const title = document.createElementNS(ns, "text");
  title.setAttribute("x", 640);
  title.setAttribute("y", 200);
  title.setAttribute("text-anchor", "middle");
  title.setAttribute("font-size", 80);
  title.setAttribute("fill", "white");
  title.setAttribute("opacity", 0);
  title.textContent = "Duck Shooter";
  svg.appendChild(title);

  // плавное появление
  setTimeout(() => {
    title.setAttribute("opacity", 1);
  }, 50);

  createButton("START GAME", 640, 400, () => {
    setState(STATES.PLAYING);
  });

  createButton("LEADERBOARD", 640, 500, () => {
    alert("Тут будет таблица рекордов");
  });
}



function createButton(text, x, y, onClick) {
  const ns = "http://www.w3.org/2000/svg";

  const group = document.createElementNS(ns, "g");
  group.setAttribute("transform", `translate(${x}, ${y})`);
  group.style.cursor = "pointer";

  const rect = document.createElementNS(ns, "rect");
  rect.setAttribute("x", -200);
  rect.setAttribute("y", -40);
  rect.setAttribute("width", 400);
  rect.setAttribute("height", 80);
  rect.setAttribute("rx", 20);
  rect.setAttribute("fill", "#2E8B57");
  rect.setAttribute("transition", "0.3s");

  const label = document.createElementNS(ns, "text");
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("dominant-baseline", "middle");
  label.setAttribute("font-size", 36);
  label.setAttribute("fill", "white");
  label.textContent = text;

  group.appendChild(rect);
  group.appendChild(label);
  svg.appendChild(group);

  // hover-анимация
  group.addEventListener("mouseenter", () => {
    rect.setAttribute("fill", "#3CB371");
    group.setAttribute("transform", `translate(${x}, ${y}) scale(1.05)`);
  });

  group.addEventListener("mouseleave", () => {
    rect.setAttribute("fill", "#2E8B57");
    group.setAttribute("transform", `translate(${x}, ${y}) scale(1)`);
  });

  group.addEventListener("click", onClick);
}



function createGamePlaceholder() {
  const ns = "http://www.w3.org/2000/svg";

  const text = document.createElementNS(ns, "text");
  text.setAttribute("x", 640);
  text.setAttribute("y", 360);
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("font-size", 60);
  text.setAttribute("fill", "white");
  text.textContent = "GAME STARTED";

  svg.appendChild(text);
}