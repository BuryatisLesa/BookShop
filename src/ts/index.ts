import { getSlide, navigationCircle, startAutoSlide, currentSlide } from './slider';
import { getData } from './getData';
import { createCards } from './createCards';
import '../scss/books.scss';

getSlide(currentSlide);
navigationCircle();
startAutoSlide();

const categories = document.querySelectorAll<HTMLElement>(".nav-categories__item");
const loadMore = document.querySelector<HTMLElement>(".footer__load-more-button");

let quantityBook = 6;
let selectedCategory = "Architecture"; // дефолтная категория

// Функция для загрузки и отображения книг
async function loadBooks() {
    const books = await getData(selectedCategory, quantityBook);
    createCards(books);
}

// Первая загрузка
(async () => {
    await loadBooks();
})();

// Клики по категориям
categories.forEach(category => {
    category.addEventListener("click", async () => {
        categories.forEach(c => c.classList.remove("nav-categories__item--active"));
        category.classList.add("nav-categories__item--active");

        // меняем категорию и сбрасываем количество
        selectedCategory = category.textContent?.trim() || "Architecture";
        quantityBook = 6;

        await loadBooks();
    });
});

// Клик по кнопке Load More
if (loadMore) {
    loadMore.addEventListener("click", async () => {
        quantityBook += 6;
        await loadBooks();
    });
}
