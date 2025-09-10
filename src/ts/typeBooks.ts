export interface listPrice {
    amount: number;
    currencyCode: string;
}



export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: listPrice;
}

 export interface Categories {
    index: number;
    category: string;
}

 export interface VolumeInfo {
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

 export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}


 export interface BookItem {
  id: number;
  title: string;
  authors: string[]
  image: string;
  description: string;
  averageRating: number;
  ratingsCount: number;
  categories: Categories;
  country: string;
  saleInfo: SaleInfo;
  isEbook: boolean;
}