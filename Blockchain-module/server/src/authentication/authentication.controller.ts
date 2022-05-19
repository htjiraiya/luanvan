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
      console.log(process.env.SECRET_KEY);
      if (!account.username || !account.password) {
        return res.status(401).json({
          status: 401,
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
        };
        const token = await this.authenticationService.login(user);
        return res.status(200).json({
          status: 200,
          data: {
            token,
          },
        });
      }
      return res.status(401).json({
        status: 401,
        message: 'Dữ liệu không được thành lập',
      });
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        status: 500,
        message: 'Server error.',
      });
    }
  }
}
