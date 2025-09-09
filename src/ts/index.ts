import { getSlide, navigationCircle, startAutoSlide, currentSlide } from './slider';
import { getData } from './getData';
import '../scss/books.scss';

getSlide(currentSlide);
navigationCircle();
startAutoSlide();
// getData();