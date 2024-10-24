var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".abpage2",
        // markers:true,
        start:"140% 50%",
        end : "190% 50%",
        scrub:2,
    }
})


tl.from(".vcpage3One" , {
    rotationX: 45, // Rotate 360 degrees about the x-axis
    duration: 2, // Animation duration in seconds
    ease: "power2.out", // Easing function


});

var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".vcpage3One",
        start:"140% 50%",
        end : "190% 50%",
        scrub:2,
    }
})


tl1.from(".vcpage3Two" , {
    rotationX: 45, // Rotate 360 degrees about the x-axis
    duration: 2, // Animation duration in seconds
    ease: "power2.out" // Easing function

});

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".vcpage3Two",
        start:"140% 50%",
        end : "190% 50%",
        scrub:2,
    }
})


tl2.from(".vcpage3Three" , {
    rotationX: 45, // Rotate 360 degrees about the x-axis
    duration: 2, // Animation duration in seconds
    ease: "power2.out" // Easing function

});