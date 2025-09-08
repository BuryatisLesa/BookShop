let currentSlide = 0;
let slideInterval: number;

function getSlide(index: number): void {
  const slides: NodeListOf<HTMLElement> = document.querySelectorAll(".slider-promo__item");
  const circles: NodeListOf<HTMLElement> = document.querySelectorAll(".slider-promo__circle-container-circle");

  slides.forEach((slide, i) => {
    slide.classList.remove("slider-promo__item--active", "slider-promo__item--prev");

    if (i === index) {
      slide.classList.add("slider-promo__item--active");
    } else if (i === currentSlide) {
      slide.classList.add("slider-promo__item--prev");
    }
  });

  circles.forEach((circle, i) => {
    circle.classList.toggle("slider-promo__circle-container-circle--active", i === index);
  });

  currentSlide = index;
}

function navigationCircle(): void {
  const circles: NodeListOf<HTMLElement> = document.querySelectorAll(".slider-promo__circle-container-circle");

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      getSlide(index);
      resetAutoSlide(); // при клике сбрасываем таймер
    });
  });
}

function autoSlide(): void {
  const slides: NodeListOf<HTMLElement> = document.querySelectorAll(".slider-promo__item");
  const nextSlide = (currentSlide + 1) % slides.length; // если дошли до конца — идем к первому
  getSlide(nextSlide);
}

function startAutoSlide(): void {
  slideInterval = window.setInterval(autoSlide, 5000); // каждые 5 секунд
}

function resetAutoSlide(): void {
  clearInterval(slideInterval);
  startAutoSlide();
}

// запуск
getSlide(currentSlide);
navigationCircle();
startAutoSlide();
