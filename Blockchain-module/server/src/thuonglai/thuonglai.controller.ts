import { Controller, Get } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { ThuongLaiService } from './thuonglai.service';

@Controller(ControllerConstant.thuonglai)
export class ThuongLaiController {
private thuonglaiService: ThuongLaiService;
}