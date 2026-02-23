const divBackGround = document.createElement("div");
divBackGround.id = "game-background";
document.body.append(divBackGround);

const svgNS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "800");
svg.setAttribute("height", "500");
svg.setAttribute("viewBox", "0 0 800 500");
svg.setAttribute("id", "game-svg");
divBackGround.appendChild(svg);


const group = document.createElementNS(svgNS, "g");
group.setAttribute("id","duck")
svg.appendChild(group);

const ellipse = document.createElementNS(svgNS, "ellipse");
ellipse.setAttribute("id","bodyduck")
ellipse.setAttribute("cx", "0");
ellipse.setAttribute("cy", "0");
ellipse.setAttribute("rx", "70");
ellipse.setAttribute("ry", "50");
ellipse.setAttribute("fill", "black");
group.appendChild(ellipse);

const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("id","headduck")
circle.setAttribute("cx", "-60");
circle.setAttribute("cy", "-25");
circle.setAttribute("r", "30");
circle.setAttribute("fill", "brown");
group.appendChild(circle);


let posx = -150;
let posy = 200;

let speed = 5;


function animate(){
  posx+=speed;
  if (posx > 850){
    posx = -150;
  }

group.setAttribute("transform", `translate(${posx} ${posy})`);
requestAnimationFrame(animate)
}

animate();


let score = 0;


const scoreText = document.createElementNS(svgNS, "text");
scoreText.setAttribute("x", "20");
scoreText.setAttribute("y", "40");
scoreText.setAttribute("fill", "white");
scoreText.setAttribute("font-size", "30");
scoreText.textContent = `Score: ${score}`;
svg.appendChild(scoreText);


group.addEventListener("click", function() {
  score++;
  scoreText.textContent = "Score: " + score;

  // вернуть утку налево
  posx = -150;
  posy = Math.random() * 350 + 50;
});