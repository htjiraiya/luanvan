import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { authenticationProvider } from './authentication.provider';
import { AuthenticationService } from './authentication.service';
import { XaVienModule } from '../xavien/xavien.module';
import { AuthenticationStrategy } from './authentication.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './authentication-local.strategy';
import { ThuongLaiModule } from '../thuonglai/thuonglai.module';

@Module({
  imports: [
    XaVienModule,
    ThuongLaiModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.SECRET_KEY,
          signOptions: { expiresIn: '1h' },
        };
      },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    ...authenticationProvider,
    AuthenticationService,
    AuthenticationStrategy,
    LocalStrategy,
  ],
})
export class AuthenticationModule {}
