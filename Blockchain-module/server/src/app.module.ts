import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './database/database.module';
import { XaVienModule } from './xavien/xavien.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DataBaseModule,
    XaVienModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
