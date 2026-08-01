// =========================
// FOR MY QUEEN ❤️
// script.js
// =========================

const beginBtn = document.getElementById("beginBtn");
const languageBtn = document.getElementById("languageBtn");
const music = document.getElementById("bgMusic");

const englishText = document.querySelector(".english");
const russianText = document.querySelector(".russian");

let russian = false;

// Hide Russian at start
if (russianText) {
    russianText.style.display = "none";
}

// Language Switch
languageBtn.addEventListener("click", () => {

    russian = !russian;

    if (russian) {

        englishText.style.display = "none";
        russianText.style.display = "block";

        languageBtn.innerHTML = "English 🇬🇧";

    } else {

        englishText.style.display = "block";
        russianText.style.display = "none";

        languageBtn.innerHTML = "Русский 🇷🇺";

    }

});

// Begin Button
beginBtn.addEventListener("click", () => {

    // Play music
    music.play();

    // Smooth fade
    document.body.style.transition = "1s";

    // Little animation
    beginBtn.innerHTML = "❤️ Happy Birthday ❤️";

    beginBtn.style.transform = "scale(1.08)";

    setTimeout(() => {
        beginBtn.style.transform = "scale(1)";
    },300);

    // Small message
    setTimeout(() => {

        alert(
`Happy Birthday ❤️

This website was made especially for you.

Thank you for existing.

Now enjoy your little surprise ✨`
        );

    },700);

});


// Floating Heart Every 2 Seconds
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20+Math.random()*30)+"px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.bottom="110vh";
        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

},2000);
