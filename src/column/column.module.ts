import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { PrismaService } from 'prisma/prisma.service';
import { BoardsService } from 'src/boards/boards.service';
import { WorkSpaceService } from 'src/work-space/work-space.service';

@Module({
  controllers: [ColumnController],
  providers: [ColumnService, PrismaService, BoardsService, WorkSpaceService],
})
export class ColumnModule {}
