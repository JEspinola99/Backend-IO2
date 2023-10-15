import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, Put } from '@nestjs/common';
import { WorkSpaceUserService } from './work-space-user.service';
import { CreateWorkSpaceUserDto } from './dto/create-work-space-user.dto';
import { UpdateWorkSpaceUserDto } from './dto/update-work-space-user.dto';

@Controller('work-space-user')
export class WorkSpaceUserController {
  constructor(private readonly workSpaceUserService: WorkSpaceUserService) {}

  @Post('create')
  async create(@Body() createWorkSpaceUserDto: CreateWorkSpaceUserDto) {
    const data = createWorkSpaceUserDto.usuarioId.map(usuario =>
      ({usuarioId: usuario, 
        espacioDeTrabajoId: createWorkSpaceUserDto.espacioDeTrabajoId
      }))
    return await this.workSpaceUserService.create(data);
  }

  @Get('getSpaces/:id')
  @UsePipes(new ParseIntPipe())
  async findAll(@Param('id') id: number ) {
    const res = await this.workSpaceUserService.getSpacesByUserId(id);
    const spaces = res.map(item => item.espacioDeTrabajo)
    return spaces;
  }

  @Get('getUsers/:id')
  async getUsers(@Param('id') id: number){
    return this.workSpaceUserService.getUsersBySpaceId(id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workSpaceUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkSpaceUserDto: UpdateWorkSpaceUserDto) {
    return this.workSpaceUserService.update(+id, updateWorkSpaceUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workSpaceUserService.remove(+id);
  }
}
