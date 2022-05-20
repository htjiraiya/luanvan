import { Module } from '@nestjs/common';
import { thuocbaovethucvatProvider } from './thuocbaovethucvat.provider';
import { ThuocbaovethucvatService } from './thuocbaovethucvat.service';
import { ThuocbaovethucvatController } from './thuocbaovethucvat.controller';

@Module({
  controllers: [ThuocbaovethucvatController],
  providers: [...thuocbaovethucvatProvider, ThuocbaovethucvatService],
})
export class ThuocbaovethucvatModule {}
