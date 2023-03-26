import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';
import { DocumentEntity } from './entitiy/document.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DocumentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASS,
      database: 'wiki_lite_db',
      synchronize: true,
      entities: [DocumentEntity],
    }),
  ],
})
export class AppModule {}
