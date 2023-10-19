import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { PrismaService } from 'prisma/prisma.service';
import { WorkSpaceService } from 'src/work-space/work-space.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, PrismaService, WorkSpaceService],
})
export class BoardsModule {}
