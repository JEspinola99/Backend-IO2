import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthHelper } from './authHelper';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthHelper, UsersService],
  imports: [PrismaModule, JwtModule, PassportModule]
})
export class AuthModule {}
