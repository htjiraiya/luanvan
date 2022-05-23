import { Controller } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { NhatkydongruongService } from './nhatkydongruong.service';

@Controller(ControllerConstant.nhatkydongruong)
export class NhatkydongruongController {
    constructor(
        private nhatkydongruong: NhatkydongruongService
    ) {}
}
