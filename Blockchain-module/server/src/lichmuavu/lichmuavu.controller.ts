import { Controller } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { LichmuavuService } from './lichmuavu.service';

@Controller(ControllerConstant.lichmuavu)
export class LichmuavuController {

    constructor(
        private lichmuavu: LichmuavuService
    ) {}

}
