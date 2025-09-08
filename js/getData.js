"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const apiKey = process.env.API_KEY;
console.log("API Key:", apiKey);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlBooks = yield fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`);
        try {
            if (!urlBooks.ok) {
                throw new Error("Таких данных нету!");
            }
            let jsonData = yield urlBooks.json();
            jsonData.items.forEach((book, index) => {
                var _a, _b;
                console.log(`Книга ${index + 1}:`);
                console.log('  Title:', book.volumeInfo.title);
                console.log('  Authors:', ((_a = book.volumeInfo.authors) === null || _a === void 0 ? void 0 : _a.join(', ')) || 'Не указаны');
                console.log('  Thumbnail:', ((_b = book.volumeInfo.imageLinks) === null || _b === void 0 ? void 0 : _b.thumbnail) || 'Нет изображения');
                console.log('  Description:', book.volumeInfo.description || 'Нет описания');
                console.log('  Average Rating:', book.volumeInfo.averageRating || 'Нет рейтинга');
                console.log('  Ratings Count:', book.volumeInfo.ratingsCount || 'Нет оценок');
                console.log('  Categories:', book.volumeInfo.categories || 'Нет категории');
                console.log('  Country:', book.saleInfo.country);
                console.log('  Saleability:', book.saleInfo.saleability);
                console.log('  Is Ebook:', book.saleInfo.isEbook);
            });
        }
        catch (e) {
            console.log(e.message, "Блок отработал с ошибкой!");
        }
        ;
    });
}
;
getData();
