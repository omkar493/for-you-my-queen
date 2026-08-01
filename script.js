// Begin Button
const beginBtn = document.getElementById("beginBtn");

// Music
const music = document.getElementById("bgMusic");

// Create Stars
function createStars(){

const container = document.querySelector(".stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*4+"s";

container.appendChild(star);

}

}

createStars();

// Create Petals

function createPetal(){

const petals=document.querySelector(".petals");

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*6)+"s";

petal.style.fontSize=(14+Math.random()*12)+"px";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},14000);

}

setInterval(createPetal,600);

// Button

beginBtn.addEventListener("click",()=>{

music.play();

document.querySelector(".glass-card").style.transform="scale(.9)";

document.querySelector(".glass-card").style.opacity="0";

setTimeout(()=>{

alert("Our story begins here... ❤️");

},1200);

});
