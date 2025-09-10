import { getSlide, navigationCircle, startAutoSlide, currentSlide } from './slider';
import { getData } from './getData';
import { createCards } from './createCards';
import '../scss/books.scss';

getSlide(currentSlide);
navigationCircle();
startAutoSlide();

const categories = document.querySelectorAll<HTMLElement>(".nav-categories__item");

(async () => {
    const books = await getData("Architecture", 6);
    createCards(books);
})();

categories.forEach(category => {
    category.addEventListener("click", async () => {
        categories.forEach(c => c.classList.remove("nav-categories__item--active"));
        category.classList.add("nav-categories__item--active");

        const selectedCategory = category.textContent?.trim() || "";
        const books = await getData(selectedCategory, 6);
        createCards(books);
    });
});
