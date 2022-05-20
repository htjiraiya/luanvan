import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ControllerConstant } from 'src/constant/api.constant';
import { ResponseDTO } from '../dtos/response.dto';
import { AuthenticationService } from './authentication.service';
import { JwtService } from '@nestjs/jwt';
import { LocalAuthGuard } from './local-guard.guard';

@Controller(ControllerConstant.authentication)
export class AuthenticationController {
  constructor(
    private authenticationService: AuthenticationService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @Body() account: { username: string; password: string },
    @Res() res,
  ): Promise<ResponseDTO> {
    try {
      if (!account.username || !account.password) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Dữ liệu không được thành lập',
        });
      }

      const xavien = await this.authenticationService.validateUser(
        account.username,
        account.password,
      );

      if (xavien) {
        const user = {
          id: xavien.id_xavien,
          username: xavien.username,
        };
        const token = await this.authenticationService.login(user);
        return res.status(200).json({
          statusCode: 200,
          data: {
            token,
          },
        });
      }
      return res.status(401).json({
        statusCode: 400,
        message: 'Không thể xác thực',
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        statusCode: 500,
        message: 'Server error.',
      });
    }
  }
}
