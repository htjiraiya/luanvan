import { Module } from '@nestjs/common';
import { GiaodichController } from './giaodich.controller';
import { giaodichProvider } from './giaodich.provider';
import { GiaodichService } from './giaodich.service';

@Module({
  controllers: [GiaodichController],
  providers: [...giaodichProvider, GiaodichService],
})
export class GiaodichModule {}
