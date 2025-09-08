"use strict";
let currentSlide = 0;
function getSlide(index) {
    const slides = document.querySelectorAll(".slider-promo__item");
    const circles = document.querySelectorAll(".slider-promo__circle-container-circle");
    slides.forEach((slide, i) => {
        slide.classList.remove("slider-promo__item--active", "slider-promo__item--prev");
        if (i === index) {
            slide.classList.add("slider-promo__item--active");
        }
        else if (i === currentSlide) {
            slide.classList.add("slider-promo__item--prev");
        }
    });
    circles.forEach((circle, i) => {
        circle.classList.toggle("slider-promo__circle-container-circle--active", i === index);
    });
    currentSlide = index;
}
function navigationCircle() {
    const circles = document.querySelectorAll(".slider-promo__circle-container-circle");
    circles.forEach((circle, index) => {
        circle.addEventListener("click", () => {
            getSlide(index);
        });
    });
}
// инициализация
getSlide(currentSlide);
navigationCircle();
