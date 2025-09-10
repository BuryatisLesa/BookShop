import { getSlide, navigationCircle, startAutoSlide, currentSlide } from './slider';
import { getData } from './getData';
import { createCards } from './createCards';
import '../scss/books.scss';

getSlide(currentSlide);
navigationCircle();
startAutoSlide();

(async () => {
    const books = getData("Architecture", 30);
    createCards(books);
})();