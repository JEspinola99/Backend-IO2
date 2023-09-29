import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WorkSpaceModule } from './work-space/work-space.module';

@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot(), WorkSpaceModule]
})
export class AppModule {}
