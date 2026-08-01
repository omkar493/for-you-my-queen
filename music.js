const music = document.getElementById("bgMusic");

// Start music after the user clicks Begin
document.getElementById("beginBtn").addEventListener("click", () => {

    music.volume = 0.4;

    music.play().catch(err => {
        console.log("Music couldn't start:", err);
    });

});
