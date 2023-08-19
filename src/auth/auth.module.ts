import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthHelper } from './authHelper';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthHelper],
  imports: [PrismaModule, JwtModule]
})
export class AuthModule {}
