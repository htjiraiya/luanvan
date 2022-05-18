import { Module } from '@nestjs/common';
import { XaVienController } from './xavien.controller';
import { xavienProvider } from './xavien.provider';
import { XaVienService } from './xavien.service';

@Module({
  controllers: [XaVienController],
  providers: [...xavienProvider, XaVienService],
  exports: [...xavienProvider, XaVienService],
})
export class XaVienModule {}
