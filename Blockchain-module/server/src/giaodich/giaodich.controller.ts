import { Controller, Get, UseGuards, Res } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { GiaodichService } from './giaodich.service';
import { AuthGuard } from '@nestjs/passport';
import { ResponseDTO } from '../dtos/response.dto';

@Controller(ControllerConstant.giaodich)
export class GiaodichController {
  constructor(private readonly giaodichService: GiaodichService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@Res() res): Promise<ResponseDTO> {
    try {
      const list_giaodich = await this.giaodichService.findAll();
      if (list_giaodich) {
        return res.status(200).json({
          statusCode: 200,
          message: 'OK',
          data: list_giaodich,
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
        message: 'Lỗi server.',
      });
    }
  }
}
