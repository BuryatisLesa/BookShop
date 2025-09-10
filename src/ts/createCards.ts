import { BookItem } from "./typeBooks";
import { truncateDescription } from "./truncateDescriptions";
// import { getData } from "./getData";

export function createCards(data: Promise<BookItem[]>){
    data.then(books => {
        const containerBooks = document.querySelector(".books-content__items");



        if (!containerBooks){
            return;};

        books.forEach(book => {
            let bookCard = document.createElement("div");
            bookCard.classList.add("books-content__item");
            const shortDesc = truncateDescription(book.description, 25);
            bookCard.innerHTML += `
                <div class="books-content__item-left">
                    <img class="books-content__item-left-image" src="${book.image}" alt="${book.title}">
                </div>
                <div class="books-content__item-right">
                    <p class="books-content__item-right-author">${book.authors.join(", ")}</p>
                    <h3 class="books-content__item-right-title">${book.title}</h3>
                <div class="books-content__item-right-rating">
                    <p class="books-content__item-right-rating-averageRating">${book.averageRating}</p>
                    <p class="books-content__item-right-rating-ratingsCount">${book.ratingsCount}</p>
                </div>
                <p class="books-content__item-right-description">${shortDesc}</p>
                <p class="books-content__item-right-saleInfo">${book.saleInfo.saleability}</p>
                </div>
            `;
            containerBooks.appendChild(bookCard);
        })
    })

};