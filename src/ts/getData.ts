// import * as dotenv from "dotenv";
// import * as path from "path";

// dotenv.config({ path: path.resolve(__dirname, "../.env") });

const apiKey = process.env.API_KEY!;


interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

interface Categories {
    index: number;
    category: string;
}

interface VolumeInfo {
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
  description: string;
  averageRating: number;
  ratingsCount: number;
  categories: Categories;
}

interface Book {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}


interface BookItem {
  id: number;
  title: string;
  authors: object;
  image: string;
  description: string;
  averageRating: number;
  ratingsCount: number;
  categories:Categories;
  country: string;
  saleInfo: SaleInfo;
  isEbook: boolean;
}

export async function getData(): Promise<BookItem[]> {
    const urlBooks: Response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
    );

    try {
        if (!urlBooks.ok){
            throw new Error("Таких данных нету!");
        }

        const jsonData: any = await urlBooks.json();
        const dataBooks: BookItem[] = jsonData.items.map((book: Book, index: number) => ({
            id: index + 1,
            title: book.volumeInfo.title || "Нет названия",
            authors: book.volumeInfo.authors || [],
            image: book.volumeInfo.imageLinks?.thumbnail || "",
            description: book.volumeInfo.description || "Нет описания",
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

