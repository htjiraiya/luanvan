import { Module } from '@nestjs/common';
import { GiongluaController } from './gionglua.controller';
import { giongluaProvider } from './gionglua.provider';
import { GiongluaService } from './gionglua.service';

@Module({
  controllers: [GiongluaController],
  providers: [ ...giongluaProvider, GiongluaService]
})
export class GiongluaModule {}
