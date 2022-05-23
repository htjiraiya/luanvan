import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './database/database.module';
import { XaVienModule } from './xavien/xavien.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ThuongLaiModule } from './thuonglai/thuonglai.module';
import { ThuocbaovethucvatModule } from './thuocbaovethucvat/thuocbaovethucvat.module';
import { GiaodichModule } from './giaodich/giaodich.module';
import { LohangModule } from './lohang/lohang.module';
import { HoptacxaModule } from './hoptacxa/hoptacxa.module';

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
    GiaodichModule,
    LohangModule,
    HoptacxaModule,
  ],
})
export class AppModule {}
