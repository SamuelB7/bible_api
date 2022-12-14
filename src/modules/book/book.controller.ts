import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { ParseIdPipe } from './book.pipe';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(
        private bookService: BookService
    ) {}

    @Get()
    async findAll() {
        return this.bookService.findAll()
    }

    @Get(':id')
    @UsePipes(new ParseIdPipe())
    async findById(@Param() id: string) {
        const book = await this.bookService.findById(id)
        return book
    }

    @Get(':id/:chapter')
    async findBookChapter(@Param('id') id: string, @Param('chapter') chapter: number) {
        const bookChapter = await this.bookService.findBookChapter(id, chapter)
        return bookChapter
    }
}
