// Добавление кнопки ввода диаметра 
const inputButton = document.createElement("input");
inputButton.name = "Diametr";
inputButton.placeholder = "Введите диаметр";
document.body.append(inputButton);

const submitButton = document.createElement("input");
submitButton.type = "button";
submitButton.value = "Отправить";
submitButton.style.marginLeft = "10px";
document.body.append(submitButton);

// запуск функции
submitButton.addEventListener("click", sendDiam, false);
let diameter = null;

// создание функции
function sendDiam(eo) {

    if (isNaN(inputButton.value) || inputButton.value < 200 || inputButton.value > 800) {
        alert("Число не введено или не попадает в ограничения(От 200 до 800)");
        inputButton.value = "";
        return;
    }

diameter = Number(inputButton.value);
inputButton.style.display = "none";
submitButton.style.display = "none";

// Создание svg
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", diameter);
svg.setAttribute("height", diameter);
document.body.append(svg);

// Создание элемента дисплея часов
const clockBackground = document.createElementNS("http://www.w3.org/2000/svg", "circle");

const centerX = diameter / 2;
const centerY = diameter / 2;
const radius  = diameter / 2;

clockBackground.setAttribute("cx", centerX);
clockBackground.setAttribute("cy", centerY);
clockBackground.setAttribute("r", radius);
clockBackground.setAttribute("fill", "yellow");
clockBackground.setAttribute("stroke", "yellow");
svg.append(clockBackground);


    for (let i = 1; i <= 12; i++) {

        // угол для каждого часа
        const angleDeg = i * 30 - 90;
        const angleRad = angleDeg * Math.PI / 180;

        // радиус расположения точек (чуть внутри круга)
        const dotRadiusFromCenter = radius * 0.8;

        // координаты точки
        const x = centerX + dotRadiusFromCenter * Math.cos(angleRad);
        const y = centerY + dotRadiusFromCenter * Math.sin(angleRad);

        // создаём маленький круг
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        dot.setAttribute("cx", x);
        dot.setAttribute("cy", y);
        dot.setAttribute("r", radius/10);
        dot.setAttribute("fill", "green");
        //создание элемента текста
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

        text.textContent = i;
        text.setAttribute("x", x);
        text.setAttribute("y", y);

        // центрирование текста
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "middle");
        // установление цвета и размера
        text.setAttribute("font-size", radius / 10);
        text.setAttribute("fill", "black");

        svg.append(dot);
        svg.append(text);
    }
    
// функция создания стрелки
function createHand(cx, cy, length, width, color) {
const hand = document.createElementNS("http://www.w3.org/2000/svg", "line");

hand.setAttribute("x1", cx);
hand.setAttribute("y1", cy);

hand.setAttribute("x2", cx);
hand.setAttribute("y2", cy - length);

hand.setAttribute("stroke", color);
hand.setAttribute("stroke-width", width);
hand.setAttribute("stroke-linecap", "round");

return hand;
}
//добавление эл.часов
const digitalClock = document.createElementNS("http://www.w3.org/2000/svg", "text");
digitalClock.setAttribute("x", centerX);
digitalClock.setAttribute("y", centerY + radius * -0.25); // точка по y оси для положения текста с элект.часами
digitalClock.setAttribute("text-anchor", "middle");
digitalClock.setAttribute("font-size", diameter/10);
digitalClock.setAttribute("fill", "black");
svg.appendChild(digitalClock);

//создание и добавление стрелок
const hourHand = createHand(centerX, centerY, radius * 0.5, 6, "black");
const minHand  = createHand(centerX, centerY, radius * 0.7, 4, "blue");
const secHand  = createHand(centerX, centerY, radius * 0.85, 2, "red");

svg.append(hourHand, minHand, secHand);


//создание функции движения стрелок
function rotateHand(hand, angle, cx, cy) {
    hand.setAttribute(
        "transform",
        `rotate(${angle} ${cx} ${cy})`
    );
}


//функция обновления часов
function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours() % 24;

    const secAngle  = seconds * 6;
    const minAngle  = minutes * 6 + seconds * 0.1;
    const hourAngle = hours * 30 + minutes * 0.5;

    rotateHand(secHand, secAngle, centerX, centerY);
    rotateHand(minHand, minAngle, centerX, centerY);
    rotateHand(hourHand, hourAngle, centerX, centerY);

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    digitalClock.textContent = `${h}:${m}:${s}`;

    console.log(`${h}:${m}:${s}`)


}

setInterval(updateClock, 1000);
updateClock();


}