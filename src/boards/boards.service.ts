import { WorkSpaceService } from './../work-space/work-space.service';
import { Column } from './../column/entities/column.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BoardsService {

  constructor(private prismaService: PrismaService, private workSpaceService: WorkSpaceService) { }

  async create(createBoardDto: CreateBoardDto) {
    const { tablero } = await this.workSpaceService.getSpace(createBoardDto.espacioDeTrabajoId)
    if (tablero.length > 6) return new BadRequestException()
    return this.prismaService.tablero.create(
      {
        data:
        {
          nombre: createBoardDto.nombre,
          espacioDeTrabajoId: createBoardDto.espacioDeTrabajoId,
          Columna: { create: [{ nombre: 'PENDIENTE' }, { nombre: 'EN PROGRESO' }, { nombre: 'HECHO' }] }
        }
      }
    );
  }

}
