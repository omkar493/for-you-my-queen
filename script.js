// ==========================
// FOR MY QUEEN ❤️
// script.js
// ==========================

const beginBtn = document.getElementById("beginBtn");
const languageBtn = document.getElementById("languageBtn");
const music = document.getElementById("bgMusic");

const english = document.querySelector(".english");
const russian = document.querySelector(".russian");

let russianMode = false;

if (russian) russian.style.display = "none";

languageBtn.addEventListener("click", () => {
    russianMode = !russianMode;

    if (russianMode) {
        english.style.display = "none";
        russian.style.display = "block";
        languageBtn.innerHTML = "English 🇬🇧";
    } else {
        english.style.display = "block";
        russian.style.display = "none";
        languageBtn.innerHTML = "Русский 🇷🇺";
    }
});

beginBtn.addEventListener("click", () => {
    music.play().catch(() => {});

    document.querySelector(".card").style.opacity = "0";
    document.querySelector(".card").style.transform = "scale(0.9)";

    setTimeout(() => {
        // Go to next page
        window.location.href = "letter.html";
    }, 900);
});
