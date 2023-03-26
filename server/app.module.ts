import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DocumentModule],
})
export class AppModule {}
