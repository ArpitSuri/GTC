// play button occuring

let page2Center = document.querySelector(".page2Center");
let img =document.querySelector(".page2img")

img.addEventListener("mouseenter", () => {
    gsap.to(".page2Center .page2Icon i", {
        opacity: 1,
        duration: 0.5, // Set the duration for a smooth transition
    });
});

img.addEventListener("mouseleave", () => {
    gsap.to(".page2Center .page2Icon  i", {
        opacity: 0,
        duration: 0.5, // Set the duration for a smooth transition
    });
});


// page2 video occuring

let page2Video = document.querySelector(".page2video");

img.addEventListener("click", function () {
    page2Video.play()
    gsap.to(page2Video, {
        width: "100%",
        height: "100%",
        opacity: 1,
        duration:0.3,
        zIndex: 5,
    })
})
page2Video.addEventListener("click", function () {
    page2Video.pause()
    gsap.to(page2Video, {
        width: "20%",
        height: "20%",
        opacity: 0,
        duration:0.3,
        zIndex:-1,
    })
})

//animatoin pag1Center 

// gsap.from(" .centerContainer h1" ,{
//     y:400,
// },"b");
gsap.from(" .centerContainer h4" ,{
    y:400,
    delay:3.5
},"b");

// animating page1 page  

var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        // markers:true,
        start:"50% 20%",
        end : "70% 20%",
    }
})

tl1.from(".page2Center" ,{
    opacity:0,
    y:100,
    duration:0.5,
    ease: "Power3.easeOut",
},"a");
tl1.from(".page1" ,{
    height:"100vh",
},"a");

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        start:"90% 40%",
        end : "100% 40%",
        // scrub:2,
    }
})
tl2.from(".page3 .page3left h1" ,{
    y:400,
    opacity:0,
});


// for whygtc
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        start:"90% 40%",
        end : "120% 40%",
        scrub:2,
        }
})

tl3.from("#box1",{
    x:450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut", // Ease function for the animation
},"c")
tl3.from("#box3",{
    x:-450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut" // Ease function for the animation
},"c")

tl3.from(".row2",{
    y:-450,
    opacity:0,
    zIndex:-2,
    duration: 1.5,   // Duration of the animation in seconds
    delay: 0.5,      // Delay before the animation starts in seconds
    ease: "power2.inOut" // Ease function for the animation
})

//for page7
// tl4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page7",
//         start: "5% 40%",
//         end: "50% 40%",
//         scrub: 2,
//     }
// });

// tl4.fromTo(".page7", 
//     { justifyContent: "flex-end" }, // Starting state
//     { 
//         justifyContent: "flex-start", 
//         ease: "power3.inOut", // Adjust the ease for smoothness
//     }
// );



const navOccuring = () => {
    gsap.to("nav .navlink ul", {
        gap: "10vh",
        width: "80%",
        duration: 0.5,
        ease: "power2.inOut",
    });

    gsap.to(".servicelink", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
    });
};

const revertNav = () => {
    gsap.to("nav .navlink ul", {
        gap: "2vh",
        width: "initial", // Revert to initial width or original value
    });

    gsap.to(".servicelink", {
        opacity: 0, // Ensure visibility is back to normal
        duration: 0.5,
        ease: "power2.inOut",
    });
};

let navservice = document.querySelector(".navlink");

navservice.addEventListener("mouseenter", () => {
    navOccuring();
});

navservice.addEventListener("mouseleave", () => {
    revertNav();
});


// NAVBAR ANIMATION
gsap.from("nav" , {
    stagger:0.2,
    delay:3.5,
    y:10,
    opacity:0,
    ease: Power3,
})




var tl5 = gsap.timeline({scrollTrigger:{
    trigger:".page8",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl5
.to(".page8Center",{
    top: "3%",
},'a')
.to(".cardOne",{
    top: "40%",
},'a')
.to(".cardTwo",{
    top: "135%"
},'a')
.to(".cardTwo",{
    top: "47%"
},'b')
.to(".cardOne",{
    width: "65%",
    height: "65vh"
},'b')
.to(".cardThree",{
    top: "135%"
}, 'b')
.to(".cardThree",{
    top: "55%"
}, 'c')
.to(".cardTwo",{
    width: "75%",
    height: "70vh"
},'c')
.to(".cardFour",{
    top:"60%", 
},"d")
.to(".cardThree",{
    width: "75%",
    height: "70vh"
},'d')



// small navbar animation

var smallNavAcess =document.querySelector(".smallNavAccess");
var closeSmallNav = document.querySelector(".smallNavCenterTop i")


smallNavAcess.addEventListener("click" , ()=>{
    gsap.to(".smallNav" ,{
        right:"0%",
    })
})

closeSmallNav.addEventListener("click" ,()=>{
    gsap.to(".smallNav" ,{
        right:"100%",
    })
})

window.addEventListener("scroll", () => {
    gsap.to(".smallNav" ,{
        right:"100%",
    })
});