import { Injectable } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { PrismaService } from 'prisma/prisma.service';

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
    return this.prismaService.columna.findMany({where: {tableroId: id}});
  }

  update(id: number, updateColumnDto: UpdateColumnDto) {
    return `This action updates a #${id} column`;
  }

  remove(id: number) {
    return `This action removes a #${id} column`;
  }
}
