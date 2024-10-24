
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".abpage3",
        start:"90% 40%",
        end : "120% 40%",
        scrub:2,
        }
})

tl3.from(".aboutUsPage5box1",{
    x:450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut", // Ease function for the animation
},"c")
tl3.from(".aboutUsPage5box3",{
    x:-450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut" // Ease function for the animation
},"c")

tl3.from(".aboutUsPage5row2",{
    y:-450,
    opacity:0,
    zIndex:-2,
    duration: 1.5,   // Duration of the animation in seconds
    delay: 0.5,      // Delay before the animation starts in seconds
    ease: "power2.inOut" // Ease function for the animation
})



var tl7 = gsap.timeline({scrollTrigger:{
    trigger:".aboutUsPage8",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl7
.to(".page8Center",{
    top: "3%",
    ease: "Power3.easeOut",
},'a')
.to(".aboutUsPage8cardOne",{
    top: "40%",
    ease: "Power3.easeOut",
},'a')
.to(".aboutUsPage8cardTwo",{
    top: "135%",
    ease: "Power3.easeOut",
},'a')
.to(".aboutUsPage8cardTwo",{
    top: "47%",
    ease: "Power3.easeOut",
},'b')
.to(".aboutUsPage8cardOne",{
    width: "65%",
    height: "65vh",
    ease: "Power3.easeOut",
},'b')
.to(".aboutUsPage8cardThree",{
    top: "135%",
    ease: "Power3.easeOut",
}, 'b')
.to(".aboutUsPage8cardThree",{
    top: "55%",
    ease: "Power3.easeOut",
}, 'c')
.to(".aboutUsPage8cardTwo",{
    width: "75%",
    height: "70vh",
    ease: "Power3.easeOut",
},'c')
.to(".aboutUsPage8cardFour",{
    top:"60%", 
    ease: "Power3.easeOut",
},"d")
.to(".aboutUsPage8cardThree",{
    width: "75%",
    height: "70vh",
    ease: "Power3.easeOut",
},'d')


var tl6 = gsap.timeline({scrollTrigger:{
    trigger:".aboutUsPage1",
    // markers:true,
    start:"110% 50%",
    end:"120% 50%",
    scrub:2,
    pin:true
}});

var smallNavAcess =document.querySelector(".smallNavAccessAboutUs");
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