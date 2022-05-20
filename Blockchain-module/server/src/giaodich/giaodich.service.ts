import { Inject, Injectable } from '@nestjs/common';
import { tbl_giaodich } from './giaodich.entity';

@Injectable()
export class GiaodichService {
  constructor(
    @Inject('GIAODICH_REPOSITORY')
    private readonly giaodich: typeof tbl_giaodich,
  ) {}

  async findAll(): Promise<tbl_giaodich[]> {
    return this.giaodich.findAll<tbl_giaodich>();
  }

  async findOne(data: object): Promise<tbl_giaodich> {
    return this.giaodich.findOne({
      where: { ...data },
    });
  }
}
