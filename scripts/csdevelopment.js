

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        start:"90% 40%",
        end : "120% 40%",
        scrub:2,
        }
})

tl3.from(".csdevelopmentPage5box1",{
    x:450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut", // Ease function for the animation
},"c")
tl3.from(".csdevelopmentPage5box3",{
    x:-450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut" // Ease function for the animation
},"c")

tl3.from(".csdevelopmentPage5row2",{
    y:-450,
    opacity:0,
    zIndex:-2,
    duration: 1.5,   // Duration of the animation in seconds
    delay: 0.5,      // Delay before the animation starts in seconds
    ease: "power2.inOut" // Ease function for the animation
})



var tl7 = gsap.timeline({scrollTrigger:{
    trigger:".csdevelopmentPage8",
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
.to(".csdevelopmentPage8cardOne",{
    top: "40%",
    ease: "Power3.easeOut",
},'a')
.to(".csdevelopmentPage8cardTwo",{
    top: "135%",
    ease: "Power3.easeOut",
},'a')
.to(".csdevelopmentPage8cardTwo",{
    top: "47%",
    ease: "Power3.easeOut",
},'b')
.to(".csdevelopmentPage8cardOne",{
    width: "65%",
    height: "65vh",
    ease: "Power3.easeOut",
},'b')
.to(".csdevelopmentPage8cardThree",{
    top: "135%",
    ease: "Power3.easeOut",
}, 'b')
.to(".csdevelopmentPage8cardThree",{
    top: "55%",
    ease: "Power3.easeOut",
}, 'c')
.to(".csdevelopmentPage8cardTwo",{
    width: "75%",
    height: "70vh",
    ease: "Power3.easeOut",
},'c')
.to(".csdevelopmentPage8cardFour",{
    top:"60%", 
    ease: "Power3.easeOut",
},"d")
.to(".csdevelopmentPage8cardThree",{
    width: "75%",
    height: "70vh",
    ease: "Power3.easeOut",
},'d')


var smallNavAcess =document.querySelector(".smallNavAccesscsdevelopment");
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