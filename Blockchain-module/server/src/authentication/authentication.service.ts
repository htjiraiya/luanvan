import { Injectable } from '@nestjs/common';
import { XaVienService } from '../xavien/xavien.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private xavienService: XaVienService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.xavienService.findOne({ username });
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return this.jwtService.sign(payload);
  }
}
