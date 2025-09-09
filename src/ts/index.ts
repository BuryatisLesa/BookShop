import { getSlide, navigationCircle, startAutoSlide, currentSlide } from './slider';
import { getData } from './getData';
import '../scss/books.scss';

getSlide(currentSlide);
navigationCircle();
startAutoSlide();

(async () => {
    const books = await getData();
    console.log(books);
})();