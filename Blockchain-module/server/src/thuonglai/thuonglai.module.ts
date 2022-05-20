import { Module } from '@nestjs/common';
import { thuonglaiProvider } from './thuonglai.provider';
import { ThuongLaiService } from './thuonglai.service';
import { ThuongLaiController } from './thuonglai.controller';

@Module({
  controllers: [ThuongLaiController],
  providers: [...thuonglaiProvider, ThuongLaiService],
})
export class ThuongLaiModule {}
