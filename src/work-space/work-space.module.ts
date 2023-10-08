import { Module } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { WorkSpaceController } from './work-space.controller';
import { PrismaService } from 'prisma/prisma.service';
import { WorkSpaceUserService } from 'src/work-space-user/work-space-user.service';

@Module({
  controllers: [WorkSpaceController],
  providers: [WorkSpaceService, PrismaService, WorkSpaceUserService],
})
export class WorkSpaceModule {}
