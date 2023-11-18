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
    try {
      const response = await this.workSpaceService.getSpace(createBoardDto.espacioDeTrabajoId)
       if (response.tablero.length >= 3) throw new BadRequestException('Un Espacio no puede tener mas de 3 tableros')
      return this.prismaService.tablero.create(
        {
          data:
          {
            nombre: createBoardDto.nombre,
            espacioDeTrabajoId: createBoardDto.espacioDeTrabajoId,
            columnas: { create: [{ nombre: 'PENDIENTE', maxTareas: 5 }, { nombre: 'EN PROGRESO', maxTareas: 5 }, { nombre: 'HECHO', maxTareas: 5 }] }
          }
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async get(id: number, params){
    const usuarioId = Number(params?.usuarioId)
    const boardData = await this.prismaService.tablero.findUnique({where: {id}, 
      include: {columnas: {include: {tareas: {include: {etiqueta: true}}}, orderBy: {id: 'asc'}}}})
      const tasksPerColumn = boardData.columnas.map(columna => columna.tareas.length)
    if(usuarioId){
      const filtetedData = await this.prismaService.tablero.findUnique({where: {id}, 
        include: {columnas: {orderBy: {id: 'asc'},include: {tareas: {include: {etiqueta: true}, where: {usuarioId}}}}}})      
      const returnedColumns = filtetedData.columnas.map((columna, index) => ({
        ...columna,
        numeroDeTareas: tasksPerColumn[index]
      }))
      const returnedData = {...filtetedData, columnas: returnedColumns}
      return returnedData;
    }else{
      const returnedColumns = boardData.columnas.map((columna, index) => ({
        ...columna,
        numeroDeTareas: tasksPerColumn[index]
      }))
      const returnedData = {...boardData, columnas: returnedColumns }
      return returnedData;
    }
  }

  getColumnTaskValue(id){
    return this.prismaService.tablero.findUnique({where: {id}, include: {columnas: true}})
  }

}
