import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';

@Controller('work-space')
export class WorkSpaceController {
  constructor(private readonly workSpaceService: WorkSpaceService) {}

  @Post('create')
  async create(@Body() createWorkSpaceDto: CreateWorkSpaceDto) {
    return await this.workSpaceService.create(createWorkSpaceDto);
  }
}
