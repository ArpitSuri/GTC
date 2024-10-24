var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".gdpage3",
        // markers:true,
        start:"30% 30%",
        end : "60% 30%",
        scrub:2,
        pin:true
    }
})


tl.to(".gdpage3Top" , {
    top:"-50%",
},"a")

tl.to(".gdpage3Buttom",{
    bottom : "-50%",
},"a")


tl.to(".gdpage3Top h1" , {
    top:"100%",
},"a")

tl.to(".gdpage3Buttom h1",{
    bottom : "100%",
},"a")





var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".gdpage3",
        start:"90% 40%",
        end : "120% 40%",
        // markers:true,
        scrub:2,
        }
})

tl3.from("gdPage5box1",{
    x:450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut", // Ease function for the animation
},"c")
tl3.from("gdPage5box3",{
    x:-450,
    zIndex:-1,
    duration: 1.5,   // Duration of the animation in seconds
    ease: "power2.inOut" // Ease function for the animation
},"c")

tl3.from("gdPage5row2",{
    y:-450,
    opacity:0,
    zIndex:-2,
    duration: 1.5,   // Duration of the animation in seconds
    delay: 0.5,      // Delay before the animation starts in seconds
    ease: "power2.inOut" // Ease function for the animation
})

