// import * as dotenv from "dotenv";
// import * as path from "path";
// dotenv.config({ path: path.resolve(__dirname, "../.env") });

import { BookItem, Book } from "./typeBooks";

const apiKey = process.env.API_KEY!;



export async function getData(category: string, maxResults: number): Promise<BookItem[]> {
    const urlBooks: Response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${apiKey}&printType=books&startIndex=0&maxResults=${maxResults}&langRestrict=en`
    );

    try {
        if (!urlBooks.ok){
            throw new Error("Таких данных нету!");
        }

        const jsonData: any = await urlBooks.json();
        const dataBooks: BookItem[] = jsonData.items.map((book: Book, index: number) => ({
            id: index + 1,
            title: book.volumeInfo.title || "Not name",
            authors: book.volumeInfo.authors || [],
            image: book.volumeInfo.imageLinks?.thumbnail || "",
            description: book.volumeInfo.description || "Not descriptions",
            averageRating: book.volumeInfo.averageRating || 0,
            ratingsCount: book.volumeInfo.ratingsCount || 0,
            categories: book.volumeInfo.categories,
            country: book.saleInfo.country,
            saleInfo: book.saleInfo,
            isEbook: book.saleInfo.isEbook,
        }));

        return dataBooks;

    } catch (e: any) {
        console.log(e.message, "Блок отработал с ошибкой!");
        return [];
    }
}

