import { Controller, UseGuards, Get, Res } from '@nestjs/common';
import { ThuocbaovethucvatService } from './thuocbaovethucvat.service';
import { AuthGuard } from '@nestjs/passport';
import { ResponseDTO } from '../dtos/response.dto';
import { ControllerConstant } from 'src/constant/api.constant';

@Controller(ControllerConstant.thuocbaovethucvat)
export class ThuocbaovethucvatController {
  constructor(
    private readonly thuocbaovethucvatService: ThuocbaovethucvatService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@Res() res): Promise<ResponseDTO> {
    try {
      // eslint-disable-next-line prettier/prettier
      const list_thuocbaovethucvat = await this.thuocbaovethucvatService.findAll();
      if (list_thuocbaovethucvat) {
        return res.status(200).json({
          statusCode: 200,
          message: 'OK',
          data: list_thuocbaovethucvat,
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
        message: 'Lỗi server',
      });
    }
  }
}
