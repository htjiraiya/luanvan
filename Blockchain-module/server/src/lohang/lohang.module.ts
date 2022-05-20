import { Module } from '@nestjs/common';
import { LohangController } from './lohang.controller';
import { LohangService } from './lohang.service';
import { lohangProvider } from './lohang.provider';

@Module({
  controllers: [LohangController],
  providers: [...lohangProvider, LohangService],
})
export class LohangModule {}
