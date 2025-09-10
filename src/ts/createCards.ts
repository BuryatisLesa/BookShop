import { BookItem } from "./typeBooks";
import { truncateDescription } from "./truncateDescriptions";
import { translateCurrencyOfUDS } from "./translateСurrency";

export function createCards(books: BookItem[]) {
    const containerBooks = document.querySelector(".books-content__items");
    if (!containerBooks) return;

    containerBooks.innerHTML = ""; // очищаем контейнер

    books.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("books-content__item");
        const shortDesc = truncateDescription(book.description, 25);
        const translateInUDS = translateCurrencyOfUDS(book.saleInfo?.listPrice?.amount || 0);

        bookCard.innerHTML = `
            <div class="books-content__item-left">
                <img class="books-content__item-left-image" src="${book.image}" alt="${book.title}">
            </div>
            <div class="books-content__item-right">
                <p class="books-content__item-right-author">${book.authors.join(", ")}</p>
                <h3 class="books-content__item-right-title">${book.title}</h3>
                <div class="books-content__item-right-rating">
                    <div class="books-content__item-right-rating-containerStar"></div>
                    <p class="books-content__item-right-rating-ratingsCount">${book.ratingsCount} review</p>
                </div>
                <p class="books-content__item-right-description">${shortDesc}</p>
                <p class="books-content__item-right-saleInfo">${translateInUDS}</p>
                <button class="books-content__item-right-buttonBuy">Buy Now</button>
            </div>
        `;

        containerBooks.appendChild(bookCard);
    });
}
