import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentEntity } from 'server/entitiy/document.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(DocumentEntity)
    private readonly repo: Repository<DocumentEntity>,
  ) {}

  public async getDocument(name: string) {
    const byName = await this.repo.findOneBy({ name });
    return byName;
  }

  public async updateDocument(id: number, content: string) {
    return await this.repo.save({ id, content });
  }
}
