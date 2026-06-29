// BUTTON
document.getElementById("start").onclick = () => {
    document.querySelector(".counter-section").scrollIntoView({behavior:"smooth"});
};

// COUNTER
const startDate = new Date("2024-12-31T00:00:00");

function updateCounter(){
    const diff = new Date() - startDate;

    document.getElementById("days").textContent = Math.floor(diff/86400000);
    document.getElementById("hours").textContent = Math.floor(diff/3600000)%24;
    document.getElementById("minutes").textContent = Math.floor(diff/60000)%60;
    document.getElementById("seconds").textContent = Math.floor(diff/1000)%60;
}

setInterval(updateCounter,1000);
updateCounter();

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("show");
    });
},{threshold:0.2});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));

// STARS
const stars = document.getElementById("stars");

for(let i=0;i<150;i++){
    const s=document.createElement("div");
    s.className="star";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.width=s.style.height=Math.random()*2+"px";
    stars.appendChild(s);
}

// CONSTELLATIONS (простые сердца)
const canvas=document.getElementById("constellations");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

const hearts=[
    [[200,200],[240,170],[280,200],[240,260],[200,200]],
    [[700,300],[740,260],[780,300],[740,360],[700,300]]
];

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    hearts.forEach(h=>{
        ctx.beginPath();
        ctx.strokeStyle="rgba(255,80,120,0.25)";
        h.forEach((p,i)=>{
            if(i===0) ctx.moveTo(p[0],p[1]);
            else ctx.lineTo(p[0],p[1]);
        });
        ctx.stroke();
    });

    requestAnimationFrame(draw);
}

draw();