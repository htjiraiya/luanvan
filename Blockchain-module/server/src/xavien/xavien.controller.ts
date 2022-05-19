import { Controller, Get, Param, Res } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { XaVienService } from './xavien.service';
import { ResponseDTO } from '../dtos/response.dto';

@Controller(ControllerConstant.xavien)
export class XaVienController {
  constructor(private xavienService: XaVienService) {}

  @Get()
  async getAll(@Res() res): Promise<ResponseDTO> {
    try {
      const list_xavien = await this.xavienService.findAll();
      if (list_xavien.length > 0) {
        return res.status(401).json({
          status: 200,
          message: 'OK',
          data: list_xavien,
        });
      }
      return res.status(401).json({
        status: 401,
        message: 'Dữ liệu không được thành lập',
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: 'Lỗi server.',
      });
    }
  }

  @Get('/:id_xavien')
  async getById(@Param('id_xavien') id_xavien: number) {
    return this.xavienService.findOne({ id_xavien });
  }
}
