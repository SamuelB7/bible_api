import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './config/mongo.config';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig]
    }),
    BookModule,
    MongooseModule.forRoot(process.env.DATABASE_URL)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
