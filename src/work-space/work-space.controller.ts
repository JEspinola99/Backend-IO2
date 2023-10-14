import { WorkSpaceUser } from './../work-space-user/entities/work-space-user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, ParseIntPipe, Put } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { WorkSpaceUserService } from 'src/work-space-user/work-space-user.service';
import { Prisma } from '@prisma/client';

@Controller('work-space')
export class WorkSpaceController {
  constructor(private readonly workSpaceService: WorkSpaceService,
    private workSpaceUser: WorkSpaceUserService) { }

  @Post()
  async create(@Body() createWorkSpaceDto: CreateWorkSpaceDto) {
    const createdSpace = await this.workSpaceService.create(createWorkSpaceDto);
    await this.workSpaceUser.create([{usuarioId: createWorkSpaceDto.creadorId, espacioDeTrabajoId: createdSpace.id}])
    return createdSpace;
  }

  @Put(':id')
  update(@Param('id') id:number,  @Body() data: UpdateWorkSpaceDto){
    return this.workSpaceService.updateSpace(data, id)
  }

  @Get(':id')
  getSpace(@Param('id') id: number){
    return this.workSpaceService.getSpace(id)
  }
}
