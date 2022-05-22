import { Injectable, Inject } from '@nestjs/common';
import { tbl_lohang } from './lohang.entity';

@Injectable()
export class LohangService {
  constructor(
    @Inject('LOHANG_REPOSITORY')
    private readonly lohang: typeof tbl_lohang,
  ) {}

  async findAll(): Promise<tbl_lohang[]> {
    return this.lohang.findAll<tbl_lohang>();
  }

  async findOne(data: object): Promise<tbl_lohang> {
    return this.lohang.findOne({
      where: { ...data },
    });
  }

  async create(data): Promise<tbl_lohang> {
    return this.lohang.create(data).then((t) => t?.get());
  }
}
