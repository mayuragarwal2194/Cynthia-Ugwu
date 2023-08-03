// LOCOMOTIVE js code for smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// Landing page js code(With the help of GSAP)
function firstPageAnim(params) {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: '-10',
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
  })

    .to(".bounding-element", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: .2,
      delay: -1
    })

    .from(".hero-bottom", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1
    })
}

firstPageAnim();




// Js Code for Chapta MOuse Ciecle
var timeout;



function circleChaptaKaro() {
  //1- define default scale value
  var xscale = 1;
  var yscale = 1;

  //2- last value (At the very start previous value will be 0)
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (details) {
    clearTimeout(timeout);

    //3- diff between current value and previous value 
    var xdiff = details.clientX - xprev;
    var ydiff = details.clientY - yprev;

    //4- Clamp means min and max value decide karna
    xscale = gsap.utils.clamp(.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(.8, 1.2, ydiff);

    // 5
    xprev = details.clientX;
    yprev = details.clientY;

    // console.log(xdiff, ydiff);

    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(function () {
      document.querySelector("#pointer-circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`
    }, 100)
  })
}



// Pointer circle js code
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY);
    document.querySelector("#pointer-circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`
  })
}

circleChaptaKaro();
circleMouseFollower();


// Second Section Animation

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5
    });
  });

  elem.addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY);
    var diff = details.clientY - elem.getBoundingClientRect().top;
    diffrot = details.clientX - rotate;
    rotate = details.clientX;
    var rotateScale = gsap.utils.clamp(-20,20, diffrot);

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: rotateScale
    })
  });
});





// Footer Current Time
var today = new Date();
timeOnly = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var time = document.getElementById("currentTime").innerHTML = timeOnly + " IST";


// Footer Current Year
currentYear =  today.getFullYear();
var year = document.getElementById("currentYear").innerHTML = currentYear;