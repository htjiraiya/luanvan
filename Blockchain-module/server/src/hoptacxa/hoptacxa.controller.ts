import { Controller } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { HoptacxaService } from './hoptacxa.service';

@Controller(ControllerConstant.hoptacxa)
export class HoptacxaController {
    constructor(private readonly hoptacxac: HoptacxaService) {}
}
