import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-boot.dto.js';

@Injectable()//decorator untuk menandai kelas ini sebagai provider yang dapat di-inject ke dalam controller atau service lain
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',  
            author: 'F. Scott Fitzgerald',
            isbn: '9780743273565',
            publishedYear: 1925,
            isAvailable: true,
        }
    ];

    //mencari semua data buku
    findAll(): Book[] {
        return this.books;
    }

    //menyimpan data buku baru
    create(book: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true,
        };

        //simpan ke database 
        this.books.push(newBook);

        return newBook;
    }

    //menampilkan data buku berdasarkan id
    findById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    //update data buku berdasarkan id
    update(id: number, updatedBook: Partial<Book>): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
            return this.books[bookIndex];
        }
        return undefined;
    }

    //hapus data buku berdasarkan id
    delete(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true;
        }
        return false;
    }
}

