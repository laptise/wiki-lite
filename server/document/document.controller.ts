import { Controller, Get, Param } from '@nestjs/common';

@Controller('document')
export class DocumentController {
  @Get(':id')
  public async getDocuemnt(@Param('id') id: string) {
    console.log(id);
    return 'hi';
  }
}
