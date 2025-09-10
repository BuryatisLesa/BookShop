import { getSlide, navigationCircle, startAutoSlide, currentSlide } from './slider';
import { getData } from './getData';
import { createCards } from './createCards';
import '../scss/books.scss';

getSlide(currentSlide);
navigationCircle();
startAutoSlide();

(async () => {
    const books = getData("Biography");
    createCards(books);
})();