import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
  @Get(':name')
  public async getDocuemnt(@Param('name') name: string) {
    return await this.documentService.getDocument(name);
  }

  @Post('content/:id')
  public async updateDocument(
    @Param('id', ParseIntPipe) id: number,
    @Body('content') content: string,
  ) {
    return this.documentService.updateDocument(id, content);
  }
}
