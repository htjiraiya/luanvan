import { Body, Controller, Post } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { ResponseDTO } from '../dtos/response.dto';
import { AuthenticationService } from './authentication.service';
import { XaVienService } from '../xavien/xavien.service';

@Controller(ControllerConstant.authentication)
export class AuthenticationController {
  constructor(
    private xavienService: XaVienService,
    private authenticationService: AuthenticationService,
  ) {}

  @Post('/login')
  async login(
    @Body() account: { username: string; password: string },
  ): Promise<ResponseDTO> {
    try {
      if (!account.username || !account.password) {
        return {
          status: 401,
          message: 'Dữ liệu không được thành lập',
        };
      }

      const xavien = await this.xavienService.findOne({
        username: account.username,
      });

      if (xavien) {
        if (account.password == xavien.password) {
          return {
            status: 200,
            message: 'OK',
            data: xavien,
          };
        }
        return {
          status: 401,
          message: 'Dữ liệu không được thành lập',
        };
      }
      return {
        status: 401,
        message: 'Dữ liệu không được thành lập',
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        message: 'Server error.',
      };
    }
  }
}
