// Elements
const envelope = document.getElementById("envelope");
const countdownPage = document.getElementById("countdownPage");
const countdownNumber = document.getElementById("countdownNumber");
const cardPage = document.getElementById("cardPage");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// ---------------- MUSIC ----------------

let playing = false;

musicBtn.onclick = function () {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.innerHTML = "🔊";

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = "🔇";

    }

};

// --------------- FLOWERS ----------------

const flowerContainer = document.getElementById("flowers");

function createFlower() {

    const flower = document.createElement("img");

    flower.src = "flower.png";

    flower.className = "flower";

    flower.style.left = Math.random() * 100 + "%";

    flower.style.width = (35 + Math.random() * 30) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    flower.style.opacity =
        0.7 + Math.random() * 0.3;

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    },11000);

}

setInterval(createFlower,250);

// ---------------- OPEN ENVELOPE ----------------

envelope.onclick = function(){

    // Music Start
    if(!playing){

        bgMusic.play();

        playing = true;

    }

    // Open Flap
    document.querySelector(".flap").style.transform =
    "rotateX(180deg)";

    // Letter Up
    document.querySelector(".letter").style.transform =
    "translateY(-120px)";

    // Countdown
    setTimeout(startCountdown,900);

};

// ---------------- COUNTDOWN ----------------

function startCountdown(){

document.getElementById("envelopePage").style.display="none";

countdownPage.style.display="flex";

let number = 3;

countdownNumber.innerHTML = number;

let timer = setInterval(function(){

number--;

if(number>0){

countdownNumber.innerHTML = number;

}else{

clearInterval(timer);

countdownPage.style.display="none";

showCard();

}

},1000);

}

// ---------------- SHOW CARD ----------------

function showCard(){

cardPage.style.transform="translateY(0)";

}

// --------------- AUTOPLAY FIX ----------------

// Browser autoplay policy ke liye
document.body.addEventListener("click",function(){

if(!playing){

bgMusic.play();

playing=true;

}

},{once:true});