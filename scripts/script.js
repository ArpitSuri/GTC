// import * as THREE from 'three';

// FOR BANNER CONNECTIONS AND VIBRATING DOTS

let banner = document.querySelector('.page1');
let canvas = document.querySelector('.dotsCanvas');
canvas.width = banner.offsetWidth;
canvas.height = banner.offsetHeight;
const ctx = canvas.getContext('2d');
let dots = [];

// Initialize dots with random positions and velocities
for (let index = 0; index < 50; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random(),
        color: "#fff",
        dx: (Math.random() - 0.5) * 0.7, // Adjust speed for more or less vibration
        dy: (Math.random() - 0.5) * 0.7,
    });
}

let mouse = {
    x: null,
    y: null,
    active: false
};

// Function to draw dots
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    });
};

// Function to draw connections between dots and mouse
const drawConnections = () => {
    if (!mouse.active) return;
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
};

// Animation function for vibrating dots
const animateDots = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update dot positions for vibration effect
    dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.dx = -dot.dx;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy = -dot.dy;
    });

    drawDots();
    drawConnections();

    requestAnimationFrame(animateDots);
};

// Start the animation
animateDots();

// Mouse event listeners for interaction
banner.addEventListener('mousemove', (event) => {
    mouse.x = event.pageX - banner.getBoundingClientRect().left;
    mouse.y = event.pageY - banner.getBoundingClientRect().top;
    mouse.active = true;
});

banner.addEventListener('mouseout', () => {
    mouse.active = false;
});

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;
    dots = [];
    for (let index = 0; index < 20; index++) {
        dots.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 1,
            color: "#fff",
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
        });
    }
    drawDots();
});






// locamotive js
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.container'),
//     smooth: true
// });

// loder animation
function loaderAnimation() {
    var loader = document.querySelector(".preloader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 5000)
}

loaderAnimation();


















// Shery Animation
Shery.imageMasker(".page2img" , {
    //Parameters are optional.
    mouseFollower: true,
    text: "Watch It",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.imageMasker(".outro" , {
    //Parameters are optional.
    mouseFollower: true,
    text: "Contact Us",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
// Shery.textAnimate(".centerContainer h1" /* Element to target.*/, {
//     //Parameters are optional.
//     style:3,
//     y: 10,
//     delay: 4,
//     duration:2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.01,
//   });  



  Shery.imageEffect(".page4iImagecollec", {
    style: 6,
    // debug: true,
    gooey: true,
    config:{"noiseDetail":{"value":3.82,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.29,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.06575029882342},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":30}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

//   Shery.imageEffect(".page8Img",{
//     style: 6,
//   })



