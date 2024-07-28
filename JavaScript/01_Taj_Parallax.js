document.addEventListener("DOMContentLoaded", function() {
    // Your parallax effect JavaScript code here
    const parallax_el = document.querySelectorAll(".parallax");

    let xValue=0;
    let yValue=0; //variables to track the movement
    
    window.addEventListener("mousemove",(e) => {
        xValue = e.clientX - window.innerWidth/2;
        yValue = e.clientY - window.innerHeight/2;
        //made the coordinates relative to the center of window
    
        parallax_el.forEach((el) => {
            let speedx = parseFloat(el.dataset.speedx);
            let speedy = parseFloat(el.dataset.speedy);
            el.style.transform = `translateX(calc( -50% + ${-xValue * speedx}px)) translateY(calc( -50% + ${-yValue * speedy}px))`;
        });
    });

    let timeline = gsap.timeline();

    Array.from(parallax_el)
    .filter(el => !el.classList.contains("text"))
    .forEach(el => {
        timeline.from(
            el,
            {
                top:`${el.offsetHeight / 2 + parseFloat(el.dataset.distance)}px`,
                duration:2,
            },
            "1"
        );
        // timeline.fromTo(
        //     el,
        //     { autoAlpha: 0, top: `calc(50% + ${el.dataset.distance}px)` },
        //     { autoAlpha: 1, top: '50%', duration: 1 }
        // );
    });

});
