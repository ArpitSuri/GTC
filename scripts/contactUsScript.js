

var tl7 = gsap.timeline({scrollTrigger:{
    trigger:".contactUsPage8",
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
.to(".contactUsPage8cardOne",{
    top: "40%",
    ease: "Power3.easeOut",
},'a')
.to(".contactUsPage8cardTwo",{
    top: "135%",
    ease: "Power3.easeOut",
},'a')
.to(".contactUsPage8cardTwo",{
    top: "47%",
    ease: "Power3.easeOut",
},'b')
.to(".contactUsPage8cardOne",{
    width: "65%",
    height: "65vh",
    ease: "Power3.easeOut",
},'b')
.to(".contactUsPage8cardThree",{
    top: "135%",
    ease: "Power3.easeOut",
}, 'b')
.to(".contactUsPage8cardThree",{
    top: "55%",
    ease: "Power3.easeOut",
}, 'c')
.to(".contactUsPage8cardTwo",{
    width: "75%",
    height: "70vh",
    ease: "Power3.easeOut",
},'c')
.to(".contactUsPage8cardFour",{
    top:"60%", 
    ease: "Power3.easeOut",
},"d")
.to(".contactUsPage8cardThree",{
    width: "75%",
    height: "70vh",
    ease: "Power3.easeOut",
},'d')


var tl6 = gsap.timeline({scrollTrigger:{
    trigger:".contactUsPage1",
    // markers:true,
    start:"110% 50%",
    end:"120% 50%",
    scrub:2,
    pin:true
}});

tl6.from(".contactUsPage2Center" , {
    opacity:0,
    y:200,
    duration:0.5,
    ease: "Power3.easeOut",
})


var smallNavAcess =document.querySelector(".smallNavAccessContactUs");
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