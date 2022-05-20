import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { LohangService } from './lohang.service';
import { AuthGuard } from '@nestjs/passport';
import { ControllerConstant } from 'src/constant/api.constant';
import { ResponseDTO } from '../dtos/response.dto';

@Controller(ControllerConstant.lohang)
export class LohangController {
  constructor(private readonly lohangService: LohangService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@Res() res): Promise<ResponseDTO> {
    try {
      const list_lohang = await this.lohangService.findAll();
      if (list_lohang) {
        return res.status(200).json({
          statusCode: 200,
          message: 'OK',
          data: [],
        });
      }

      return res.status(400).json({
        statusCode: 400,
        message: 'Dữ liệu không được thành lập.',
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        statusCode: 500,
        message: 'Lỗi server',
      });
    }
  }
}
