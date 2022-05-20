import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './database/database.module';
import { XaVienModule } from './xavien/xavien.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ThuongLaiModule } from './thuonglai/thuonglai.module';
import { ThuocbaovethucvatModule } from './thuocbaovethucvat/thuocbaovethucvat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthenticationModule,
    DataBaseModule,
    XaVienModule,
    ThuongLaiModule,
    ThuocbaovethucvatModule,
  ],
})
export class AppModule {}
