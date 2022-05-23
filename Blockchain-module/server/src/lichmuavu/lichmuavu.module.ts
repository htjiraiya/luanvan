import { Module } from '@nestjs/common';
import { LichmuavuController } from './lichmuavu.controller';
import { lichmuavuProvider } from './lichmuavu.provider';
import { LichmuavuService } from './lichmuavu.service';

@Module({
  controllers: [LichmuavuController],
  providers: [ ...lichmuavuProvider, LichmuavuService]
})
export class LichmuavuModule {}
