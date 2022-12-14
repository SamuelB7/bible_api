import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: Model<Book>
    ) {}

    async findAll() {
        const books =  await this.bookModel.find().select('name')
        return books
    }

    async findById(id: string) {
        const book = await this.bookModel.findById(id)
        return book
    }

    async findBookChapter(id: string, chapter: number) {
        const book = await this.bookModel.findById(id)
        const getChapter = book.chapters[chapter]
        return getChapter
    }
}
