import { Module } from '@nestjs/common';
import { WorkSpaceUserService } from './work-space-user.service';
import { WorkSpaceUserController } from './work-space-user.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [WorkSpaceUserController],
  providers: [WorkSpaceUserService, PrismaService],
})
export class WorkSpaceUserModule {}
