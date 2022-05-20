import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { ThuongLaiService } from './thuonglai.service';
import { AuthGuard } from '@nestjs/passport';
import { ResponseDTO } from '../dtos/response.dto';

@Controller(ControllerConstant.thuonglai)
export class ThuongLaiController {
  constructor(private thuonglaiService: ThuongLaiService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@Res() res): Promise<ResponseDTO> {
    try {
      const list_thuonglai = await this.thuonglaiService.findAll();
      if (list_thuonglai) {
        return res.status(200).json({
          statusCode: 200,
          message: 'OK',
          data: list_thuonglai,
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
}
