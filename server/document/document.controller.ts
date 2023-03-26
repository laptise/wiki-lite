import { Controller, Get, Param } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}
  @Get(':name')
  public async getDocuemnt(@Param('name') name: string) {
    return await this.documentService.getDocument(name);
  }
}
