// ==============================
// FOR MY QUEEN ❤️
// music.js
// ==============================

const bgMusic = document.getElementById("bgMusic");

// Restore saved position
window.addEventListener("load", () => {

    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        bgMusic.currentTime = parseFloat(savedTime);
    }

});

// Save music position every second
setInterval(() => {

    if (!bgMusic.paused) {
        localStorage.setItem("musicTime", bgMusic.currentTime);
    }

}, 1000);

// Save before leaving page
window.addEventListener("beforeunload", () => {

    localStorage.setItem("musicTime", bgMusic.currentTime);

});

// Resume after song ends
bgMusic.addEventListener("ended", () => {

    bgMusic.currentTime = 0;
    bgMusic.play();

});
