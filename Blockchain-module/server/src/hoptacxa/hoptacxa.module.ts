import { Module } from '@nestjs/common';
import { HoptacxaController } from './hoptacxa.controller';
import { HoptacxaService } from './hoptacxa.service';
import { hoptacxaProvider } from './hoptacxa.provider';

@Module({
  controllers: [HoptacxaController],
  providers: [HoptacxaService, ...hoptacxaProvider]
})
export class HoptacxaModule {}
