import { Controller } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { GiongluaService } from './gionglua.service';

@Controller(ControllerConstant.gionglua)
export class GiongluaController {
    constructor(
        private readonly gionglua: GiongluaService
    ) {}
}
