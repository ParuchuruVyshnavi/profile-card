// ==========================================
// THEME TOGGLE
// ==========================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-theme");

    themeIcon.classList.replace("fa-moon", "fa-sun");

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.replace("fa-moon", "fa-sun");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.replace("fa-sun", "fa-moon");

    }

});

// ==========================================
// TYPING EFFECT
// ==========================================

const words = [

    "Frontend Developer",

    "Full Stack Developer",

    "UI Designer",

    "JavaScript Developer"

];

const typing = document.getElementById("typing");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

// ==========================================
// RIPPLE EFFECT
// ==========================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const size = Math.max(this.clientWidth,this.clientHeight);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = (e.offsetX-size/2)+"px";

        ripple.style.top = (e.offsetY-size/2)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// ==========================================
// FOLLOW BUTTON
// ==========================================

const followBtn = document.querySelector(".follow-btn");

let following = false;

followBtn.addEventListener("click",()=>{

    following = !following;

    if(following){

        followBtn.innerHTML=

        `<i class="fa-solid fa-check"></i> Following`;

    }

    else{

        followBtn.innerHTML=

        `<i class="fa-solid fa-user-plus"></i> Follow`;

    }

});

// ==========================================
// MESSAGE BUTTON
// ==========================================

document.querySelector(".message-btn")

.addEventListener("click",()=>{

window.location.href=

"mailto:paruchuruvyshnavi87@gmail.com";

});

// ==========================================
// 3D CARD EFFECT
// ==========================================

const container=document.querySelector(".card-container");

const card=document.querySelector(".card");

container.addEventListener("mousemove",(e)=>{

const rect=container.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=

`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

container.addEventListener("mouseleave",()=>{

card.style.transform=

"rotateX(0deg) rotateY(0deg)";

});

// ==========================================
// SOCIAL ICON HOVER
// ==========================================

document.querySelectorAll(".social-icons a")

.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform=

"translateY(-8px) scale(1.15)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform=

"translateY(0) scale(1)";

});

});

// ==========================================
// THEME SHORTCUT
// Press T
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key.toLowerCase()==="t"){

themeToggle.click();

}

});