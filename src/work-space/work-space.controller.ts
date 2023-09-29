import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, ParseIntPipe } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';

@Controller('work-space')
export class WorkSpaceController {
  constructor(private readonly workSpaceService: WorkSpaceService) {}

  @Post('create')
  // @UsePipes(new ParseIntPipe())
  create(@Body() createWorkSpaceDto: CreateWorkSpaceDto) {
    console.log(createWorkSpaceDto)
    return this.workSpaceService.create(createWorkSpaceDto);
  }
}
