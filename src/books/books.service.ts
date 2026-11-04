import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}


  private readonly relations = {
    category: true,
    publisher: true,
    bookAuthors: { author: true },
  };

  // Menampilkan semua buku
  async findAll(): Promise<Book[]> {
    return (await this.bookRepository.find({
      relations: this.relations as any,
    })) as any;
  }

  // Menambahkan buku baru
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create(createBookDto as any);
    return (await this.bookRepository.save(newBook)) as any;
  }

  // Mencari buku berdasarkan ID
  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id } as any,
      relations: this.relations as any,
    });

    if (!book) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    }

    return book as any;
  }

  // Mengubah data buku
  async update(
    id: string,
    updateBookDto: CreateBookDto,
  ): Promise<Book> {
    const book = await this.findById(id);

    Object.assign(book, updateBookDto);

    return (await this.bookRepository.save(book)) as any;
  }

  // Menghapus buku
  async remove(id: string): Promise<{ message: string }> {
    const book = await this.findById(id);

    await this.bookRepository.remove(book);

    return { message: `Buku dengan ID ${id} berhasil dihapus` };
  }
}