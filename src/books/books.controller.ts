import { Controller, Delete, Get, Param, Post, Put, Patch, Body } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { Book } from './entities/book-entity.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getBooks(){
        return this.booksService.findAll();
    }

    @Post()
    CreateBooks(@Body() createBookDto: CreateBookDto){
        return this.booksService.create(createBookDto);
    }

    @Get(':id')
    getBookById(@Param('id') id: string) {
        return this.booksService.findById(id);
    }

    @Put(':id')
    updateBook(@Param('id') id: string, @Body() updatedBook: CreateBookDto) {
        return this.booksService.update(id, updatedBook);
    }

    @Patch(':id')
    partiallyUpdateBook(@Param('id') id: string) {
        return `Data buku berhasil diperbarui sebagian berdasarkan ID: ${id}`;
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.remove(id);
    }
    // //menampilkan data buku berdasarkan id 1
    // @Get(':id')
    // getBooksById(@Param('id') id:string){
    //     return this.booksService.findById(parseInt(id));
    // }

    // @Put(':id')
    // UpdateBooksPut(@Param('id') id:string, @Body() updatedBook: Partial<Book>){
    //     return this.booksService.update(parseInt(id), updatedBook);
    // }

    // @Patch(':id')
    // UpdateBooksPatch(@Param('id') id:string, @Body() updatedBook: Partial<Book>){
    //     return this.booksService.update(parseInt(id), updatedBook);
    // }

    // //hapus buku berdasarkan id
    // @Delete(':id')
    // DeleteBooks(@Param('id') id:string):string{
    //     return this.booksService.delete(parseInt(id))
    //     ? `Buku dengan ID ${id} berhasil dihapus.`
    //     : `Buku dengan ID ${id} tidak ditemukan.`;
    // }
}