import { Injectable, Patch } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateColumnsDto } from './dto/update-columns.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ColumnService {

  constructor(private prismaService: PrismaService) { }

  create(createColumnDto: CreateColumnDto) {
    return this.prismaService.columna.create(
      {
        data: { nombre: createColumnDto.nombre, tableroId: createColumnDto.tableroId }
      });
  }

  findAll() {
    return `This action returns all column`;
  }

  findById(id: number) {
    return this.prismaService.columna.findMany({ where: { tableroId: id } });
  }

  updateName(id: number, updateColumnDto: UpdateColumnDto) {
    return this.prismaService.columna.update({
      where: { id }, data: {
        nombre: updateColumnDto.nombre
      }
    });
  }

  async updateColumns(updateColumnDto: UpdateColumnsDto) {
    console.log(updateColumnDto)
    await this.prismaService.columna.update({
      where: { id: updateColumnDto.columnId1 },
      data: { tareas: updateColumnDto.tasksColumn1 as Prisma.TareaUpdateManyWithoutColumnaNestedInput }
    })
    await this.prismaService.columna.update({
      where: { id: updateColumnDto.columnId2 },
      data: { tareas: updateColumnDto.tasksColumn2 as Prisma.TareaUpdateManyWithoutColumnaNestedInput }
    })
    return "updated"
  }

  remove(id: number) {
    return this.prismaService.columna.delete({ where: { id } });
  }
}
