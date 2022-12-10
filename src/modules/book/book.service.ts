import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    constructor(
        
    ) {}

    async findAll() {
        return "Books route"
    }
}
