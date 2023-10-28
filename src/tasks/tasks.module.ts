import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from 'prisma/prisma.service';
import { ColumnService } from 'src/column/column.service';
import { WorkSpaceService } from 'src/work-space/work-space.service';
import { BoardsService } from 'src/boards/boards.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService, ColumnService, BoardsService, WorkSpaceService],
})
export class TasksModule {}
