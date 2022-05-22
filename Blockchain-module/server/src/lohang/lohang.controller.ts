import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { LohangService } from './lohang.service';
import { AuthGuard } from '@nestjs/passport';
import { ControllerConstant } from 'src/constant/api.constant';
import { ResponseDTO } from '../dtos/response.dto';
import { LohangCreatedRequestDTO } from '../dtos/request/lohang/created.request.dto';

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

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() lohang: LohangCreatedRequestDTO,
    @Res() res,
  ): Promise<ResponseDTO> {
    try {
      const { id_gionglua, id_nhatkydongruong, id_xavien } = lohang;
      const {
        name_lohang,
        soluong_lua,
        date_thuhoach,
        image_lohang,
        status_lohang,
      } = lohang;

      if (!id_gionglua || !id_nhatkydongruong || !id_xavien) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Dữ liệu không được thành lập',
        });
      }

      if (
        !name_lohang ||
        !soluong_lua ||
        !date_thuhoach ||
        !image_lohang ||
        !status_lohang
      ) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Dữ liệu không được thành lập',
        });
      }

      const createdLohang = await this.lohangService.create(lohang);

      if (lohang) {
        return res.status(200).json({
          statusCode: 200,
          message: 'OK',
          data: {
            ...lohang,
            id_lohang: createdLohang.id_lohang,
          },
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
