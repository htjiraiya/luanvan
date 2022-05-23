import { Module } from '@nestjs/common';
import { NhatkydongruongController } from './nhatkydongruong.controller';
import { nhatkydongruongProvider } from './nhatkydongruong.provider';
import { NhatkydongruongService } from './nhatkydongruong.service';

@Module({
  controllers: [NhatkydongruongController],
  providers: [ ...nhatkydongruongProvider, NhatkydongruongService]
})
export class NhatkydongruongModule {}
