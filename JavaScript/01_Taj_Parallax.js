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
            let speedx =el.dataset.speedx;
            let speedy =el.dataset.speedy;
            el.style.transform = `translateX(calc( -50% + ${-xValue * speedx}px)) translateY(calc( -50% + ${-yValue * speedy}px))`;
        });
    });
});
