import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WorkSpaceModule } from './work-space/work-space.module';
import { WorkSpaceUserModule } from './work-space-user/work-space-user.module';
import { BoardsModule } from './boards/boards.module';
import { ColumnModule } from './column/column.module';

@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot(), WorkSpaceModule, WorkSpaceUserModule, BoardsModule, ColumnModule],
  providers: []
})
export class AppModule {}
