import { BookItem } from "./typeBooks";
// import { getData } from "./getData";

export function createCards(data: Promise<BookItem[]>){
    data.then(books => {
        const containerBooks = document.querySelector(".books-content__items");

        if (!containerBooks){
            return;};

        books.forEach(book => {
            let bookCard = document.createElement("div");
            bookCard.classList.add("books-content__item");
            bookCard.innerHTML += `
                <h3 class="books-content__item-title">${book.title}</h3>
                <p class="books-content__item-author">${book.authors.join(", ")}</p>
                <img class="books-content__item-image" src="${book.image}" alt="${book.title}" />
                <p class="books-content__item-description">${book.description}</p>
            `;
            containerBooks.appendChild(bookCard);
        })
    })

};