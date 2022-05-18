import { Controller, Get, Param } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { XaVienService } from './xavien.service';

@Controller(ControllerConstant.xavien)
export class XaVienController {
  constructor(private xavienService: XaVienService) {}

  @Get()
  async getAll() {
    return this.xavienService.findAll();
  }

  @Get('/:id_xavien')
  async getById(@Param('id_xavien') id_xavien: number) {
    return this.xavienService.findOne({ id_xavien });
  }
}
