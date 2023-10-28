import { BadRequestException, Injectable, Patch } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateColumnsDto } from './dto/update-columns.dto';
import { Prisma } from '@prisma/client';
import { BoardsService } from 'src/boards/boards.service';

@Injectable()
export class ColumnService {

  constructor(private prismaService: PrismaService, private boardService: BoardsService) { }

  async create(createColumnDto: CreateColumnDto) {
    const tablero = await this.boardService.get(createColumnDto.tableroId, null)
    if(tablero.columnas.length >= 6){
      throw new BadRequestException('Un Tablero no puede tener mas de 6 columnas')
    }else{
      return this.prismaService.columna.create(
        {
          data: { nombre: createColumnDto.nombre, tableroId: createColumnDto.tableroId, maxTareas: createColumnDto.maxTareas }
        });
    }

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

  getTasksByColumnId(id: number){
    return this.prismaService.columna.findUnique({where: {id}, include: {tareas: true}})
  }
}
