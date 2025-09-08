"use strict";
function getSlide(numberSlide = 0) {
    const slides = document.querySelectorAll(".slider-promo__item");
    slides.forEach((slide, index) => {
        const htmlSlide = slide;
        htmlSlide.style.display = "none";
        if (index === numberSlide) {
            htmlSlide.style.display = "block";
        }
    });
}
getSlide();
function navigationCircle() {
    const circles = document.querySelectorAll(".slider-promo__circle-container-circle");
    circles.forEach((circle, index) => {
        const htmlCircle = circle;
        htmlCircle.addEventListener('click', () => {
            getSlide(index);
        });
    });
}
navigationCircle();
