import { Inject, Injectable } from '@nestjs/common';
import { tbl_thuocbaovethucvat } from './thuocbaovethucvat.entity';

@Injectable()
export class ThuocbaovethucvatService {
  constructor(
    @Inject('THUOCBAOVETHUCVAT_REPOSITORY')
    private readonly thuocbaovethucvat: typeof tbl_thuocbaovethucvat,
  ) {}

  findAll(): Promise<tbl_thuocbaovethucvat[]> {
    return this.thuocbaovethucvat.findAll<tbl_thuocbaovethucvat>();
  }

  findOne(data: object): Promise<tbl_thuocbaovethucvat> {
    return this.thuocbaovethucvat.findOne<tbl_thuocbaovethucvat>({
      where: { ...data },
    });
  }
}
