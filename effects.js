// ===============================
// FOR MY QUEEN ❤️
// effects.js
// ===============================

// Create Stars
const stars = document.querySelector(".stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    star.style.position = "absolute";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.borderRadius = "50%";
    star.style.background = "white";
    star.style.opacity = Math.random();

    star.style.animation =
        "twinkle " + (2 + Math.random() * 4) + "s infinite";

    stars.appendChild(star);

}

// Falling Petals
const petals = document.querySelector(".petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";

    petal.style.fontSize =
        (18 + Math.random() * 15) + "px";

    petal.style.opacity = 0.9;

    petal.style.pointerEvents = "none";
    petal.style.zIndex = "2";

    petal.style.transition = "transform 10s linear";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.style.transform =
            `translateY(120vh) rotate(${Math.random()*720}deg)`;

    },100);

    setTimeout(() => {

        petal.remove();

    },10000);

}

setInterval(createPetal,700);


// Soft glowing hearts
function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-40px";

    heart.style.fontSize=
        (20+Math.random()*20)+"px";

    heart.style.opacity=.8;

    heart.style.pointerEvents="none";

    heart.style.transition="all 8s linear";

    heart.style.zIndex="1";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.bottom="110vh";

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,2500);
