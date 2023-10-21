import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Controller('column')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnService.create(createColumnDto);
  }

  @Get()
  findAll() {
    return this.columnService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: UpdateColumnDto) {
    return this.columnService.update(id, updateData)
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.columnService.findById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnService.remove(+id);
  }
}
