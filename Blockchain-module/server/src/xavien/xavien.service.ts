import { Inject, Injectable } from '@nestjs/common';
import { tbl_xavien } from './xavien.entity';

@Injectable()
export class XaVienService {
  constructor(
    @Inject('XAVIEN_REPOSITORY')
    private readonly xavien: typeof tbl_xavien,
  ) {}

  async findAll(): Promise<tbl_xavien[]> {
    return this.xavien.findAll<tbl_xavien>();
  }

  async findOne(data: object): Promise<tbl_xavien> {
    return this.xavien
      .findOne({
        where: { ...data },
      })
      .then((t) => t?.get());
  }
}
