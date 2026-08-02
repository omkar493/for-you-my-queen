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

beginBtn.addEventListener("click",()=>{

    music.play().catch(()=>{});

    // Fade out welcome card
    document.querySelector(".card").style.opacity="0";
    document.querySelector(".card").style.transform="scale(.9)";

    setTimeout(()=>{

        document.querySelector(".card").style.display="none";

        // Scroll to first story
        document.getElementById("letter").scrollIntoView({
            behavior:"smooth"
        });

        // Allow scrolling
        document.body.style.overflowY="auto";

    },900);

});
