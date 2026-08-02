// ================================
// FOR MY QUEEN ❤️
// script.js
// ================================

const beginBtn = document.getElementById("beginBtn");
const languageBtn = document.getElementById("languageBtn");
const music = document.getElementById("bgMusic");

const english = document.querySelector(".english");
const russian = document.querySelector(".russian");

let russianMode = false;

// Hide Russian initially
if(russian){
    russian.style.display="none";
}

// Language Switch
languageBtn.addEventListener("click",()=>{

    russianMode=!russianMode;

    if(russianMode){

        english.style.display="none";
        russian.style.display="block";

        languageBtn.innerHTML="English 🇬🇧";

    }else{

        english.style.display="block";
        russian.style.display="none";

        languageBtn.innerHTML="Русский 🇷🇺";

    }

});

// Begin Button

// Begin Button

beginBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    window.location.href = "letter.html";

});
