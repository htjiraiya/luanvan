import { Controller, Get, Param, Res, UseGuards, Req } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { XaVienService } from './xavien.service';
import { ResponseDTO } from '../dtos/response.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller(ControllerConstant.xavien)
export class XaVienController {
  constructor(private xavienService: XaVienService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@Req() req, @Res() res): Promise<ResponseDTO> {
    try {
      console.log(req.user);
      const list_xavien = await this.xavienService.findAll();
      if (list_xavien) {
        return res.status(200).json({
          statusCode: 200,
          message: 'OK',
          data: list_xavien,
        });
      }
      return res.status(400).json({
        statusCode: 400,
        message: 'Dữ liệu không được thành lập',
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        statusCode: 500,
        message: 'Lỗi server.',
      });
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id_xavien')
  async getById(@Param('id_xavien') id_xavien: number) {
    return this.xavienService.findOne({ id_xavien });
  }
}
