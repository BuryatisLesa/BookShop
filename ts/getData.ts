import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const apiKey = process.env.API_KEY!;
console.log("API Key:", apiKey);


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

async function getData() {
    const urlBooks: any = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    try {
        if (!urlBooks.ok){
            throw new Error("Таких данных нету!");
        }
        let jsonData: any = await urlBooks.json();
        jsonData.items.forEach((book: Book, index:number) => {
            console.log(`Книга ${index + 1}:`);
            console.log('  Title:', book.volumeInfo.title);
            console.log('  Authors:', book.volumeInfo.authors?.join(', ') || 'Не указаны');
            console.log('  Thumbnail:', book.volumeInfo.imageLinks?.thumbnail || 'Нет изображения');
            console.log('  Description:', book.volumeInfo.description || 'Нет описания');
            console.log('  Average Rating:', book.volumeInfo.averageRating || 'Нет рейтинга');
            console.log('  Ratings Count:', book.volumeInfo.ratingsCount || 'Нет оценок');
            console.log('  Categories:', book.volumeInfo.categories || 'Нет оценок');
            console.log('  Country:', book.saleInfo.country);
            console.log('  Saleability:', book.saleInfo.saleability);
            console.log('  Is Ebook:', book.saleInfo.isEbook);
            });

    } catch (e:any) {
        console.log(e.message, "Блок отработал с ошибкой!")
    };
};


getData();
