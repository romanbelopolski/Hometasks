

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


// Создание элемента дисплея часов
const clockBackground = document.createElement("div");
clockBackground.style.borderRadius = "50%";
clockBackground.style.background = "Yellow";
clockBackground.style.position = "relative";

let centerX;
let centerY;


// запуск функции
submitButton.addEventListener("click", sendDiam, false);
let diametr = null;

// создание функции
function sendDiam(eo) {

    if (isNaN(inputButton.value) || inputButton.value < 200 || inputButton.value > 800) {
        alert("Число не введено или не попадает в ограничения(От 200 до 800)");
        inputButton.value = "";
        return;
    }

    // присваивание переменной диаметра
    diametr = Number(inputButton.value); 
    // скрытие кнопок
    inputButton.style.display = "none";
    submitButton.style.display = "none";

// добавление дисплея
    clockBackground.style.width = diametr + "px";
    clockBackground.style.height = diametr + "px";
    document.body.append(clockBackground);

    // определение центра
    centerX = diametr / 2;
    centerY = diametr / 2;
    

    for (let i = 1; i <= 12; i++) {
        let R = ((diametr / 2) / 100) * 80; // Определение радиуса
        let angleDeg = i * 30 - 90; // Определение сколько градусов для часа
        let angleRad = angleDeg * Math.PI / 180; // Определение сколько радиан для часа

        // Создание элемента отдельного для каждого часа
        const pointCenter = document.createElement("div"); 
        pointCenter.style.borderRadius = "50%";
        pointCenter.style.background = "Green";
        pointCenter.style.position = "absolute";


        let widthChild = diametr / 10;
        let heightChild = diametr / 10;

        pointCenter.style.width = widthChild + "px";  
        pointCenter.style.height = heightChild + "px"; 

        let pointX = centerX + R * Math.cos(angleRad);
        let pointY = centerY + R * Math.sin(angleRad);

        pointCenter.style.display = "flex";
        pointCenter.style.justifyContent = "center";
        pointCenter.style.alignItems = "center";

        pointCenter.style.left = (pointX - widthChild / 2) + "px";
        pointCenter.style.top = (pointY - heightChild / 2) + "px";
        pointCenter.innerText = i;

        // Добавление элемента часа на дисплей часов
        clockBackground.append(pointCenter);
    }

    // Создание стрелок
    const hourArrow = document.createElement("div");
    const minuteArrow = document.createElement("div");
    const secondArrow = document.createElement("div");

// Добавление стилевых свойств для стрелок
    hourArrow.style.borderRadius = "2%";
    minuteArrow.style.borderRadius = "2%";
    secondArrow.style.borderRadius = "2%";

    hourArrow.style.width = (diametr / 100) * 2 + "px";
    minuteArrow.style.width = (diametr / 100) * 1.5 + "px";
    secondArrow.style.width = (diametr / 100) * 1 + "px";

    hourArrow.style.height = (diametr / 100) * 25 + "px";
    minuteArrow.style.height = (diametr / 100) * 30 + "px";
    secondArrow.style.height = (diametr / 100) * 35 + "px";

    hourArrow.style.position = "absolute";
    minuteArrow.style.position = "absolute";
    secondArrow.style.position = "absolute";

    // Добавление стрелок в часы
    clockBackground.append(hourArrow);
    clockBackground.append(minuteArrow);
    clockBackground.append(secondArrow);

    // старт движения от начала стрелы
    hourArrow.style.transformOrigin = "bottom center";
    minuteArrow.style.transformOrigin = "bottom center";
    secondArrow.style.transformOrigin = "bottom center";

    // Определение положения стрелки
    hourArrow.style.left = (centerX - hourArrow.offsetWidth / 2) + "px";
    hourArrow.style.top = (centerY - hourArrow.offsetHeight) + "px";

    minuteArrow.style.left = (centerX - minuteArrow.offsetWidth / 2) + "px";
    minuteArrow.style.top = (centerY - minuteArrow.offsetHeight) + "px";

    secondArrow.style.left = (centerX - secondArrow.offsetWidth / 2) + "px";
    secondArrow.style.top = (centerY - secondArrow.offsetHeight) + "px";

    hourArrow.style.background = "Black";
    minuteArrow.style.background = "Red";
    secondArrow.style.background = "Blue";
    hourArrow.style.zIndex = "3";
    minuteArrow.style.zIndex = "4";
    secondArrow.style.zIndex = "5";

    // Создание цифрового блока часов
    digitalClock = document.createElement("div");

    digitalClock.style.position = "absolute";
    digitalClock.style.left = "50%";
    digitalClock.style.top = "35%";
    digitalClock.style.transform = "translate(-50%, -50%)";
    digitalClock.style.fontSize = diametr / 10 + "px";
    digitalClock.style.zIndex = "2"

    clockBackground.append(digitalClock);


        function updateClock() {
        let now = new Date();

        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours() % 24;

        let secondDeg = seconds * 6;
        let minuteDeg = minutes * 6 + seconds * 0.1;
        let hourDeg   = hours * 30 + minutes * 0.5;

        secondArrow.style.transform = `rotate(${secondDeg}deg)`;
        minuteArrow.style.transform = `rotate(${minuteDeg}deg)`;
        hourArrow.style.transform   = `rotate(${hourDeg}deg)`;



    digitalClock.innerText = `${hours}:${minutes}:${seconds}`;
    console.log(`${hours}:${minutes}:${seconds}`);
    }

    updateClock();
    setInterval(updateClock, 1000);
}
