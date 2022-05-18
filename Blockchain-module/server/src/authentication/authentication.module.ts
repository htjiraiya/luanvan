import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { authenticationProvider } from './authentication.provider';
import { AuthenticationService } from './authentication.service';
import { XaVienModule } from '../xavien/xavien.module';

@Module({
  imports: [XaVienModule],
  controllers: [AuthenticationController],
  providers: [...authenticationProvider, AuthenticationService],
})
export class AuthenticationModule {}
