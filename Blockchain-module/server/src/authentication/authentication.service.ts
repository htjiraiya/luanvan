import { Injectable } from '@nestjs/common';
import { XaVienService } from '../xavien/xavien.service';
import { JwtService } from '@nestjs/jwt';
import { ThuongLaiService } from '../thuonglai/thuonglai.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private xavienService: XaVienService,
    private thuonglaiService: ThuongLaiService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const xavien = await this.xavienService.findOne({ username });
    if (xavien && xavien.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = xavien;
      return result;
    } else {
      const thuonglai = await this.thuonglaiService.findOne({ username });
      if (thuonglai && thuonglai.password === pass) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = thuonglai;
        return result;
      } else {
        return null;
      }
    }
  }

  async login(user: any) {
    return this.jwtService.sign(user);
  }
}
