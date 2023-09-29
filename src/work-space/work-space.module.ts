import { Module } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { WorkSpaceController } from './work-space.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [WorkSpaceController],
  providers: [WorkSpaceService, PrismaService],
})
export class WorkSpaceModule {}
