import { Injectable } from '@nestjs/common';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WorkSpaceService {

  constructor(private prismaService: PrismaService) { }

  create(data: CreateWorkSpaceDto) {
    const users = data.usuarios.map((user) => ({ usuarioId: user }))
    return this.prismaService.espacioDeTrabajo.create({
      data: {
        nombre: data.nombre,
        creadorId: data.creadorId,
        usuarios: { create: users }
      }
    });
  }

  async getSpace(id: number) {
    const data = await this.prismaService.espacioDeTrabajo.findUnique(
      {
        where: { id },
        include: {
          usuarios: { include: { usuario: { select: { id: true, nombre: true, email: true } } } },
          tablero: { include: { columnas:  {orderBy: {id: 'asc'}, include: {tareas: {include: {etiqueta: true}}}} } }
        }
      })
      const boards = data.tablero.map((item) => ({
        ...item,
        columnas: item.columnas.map((col) => ({...col, numeroDeTareas: col.tareas.length}))
      }))

    const returnedData = {...data, tablero: boards}
    return returnedData; 
  }

  async updateSpace(data: UpdateWorkSpaceDto, id: number) {
    const users = data.usuarios.map((user) => ({ usuarioId: user }))
    return this.prismaService.espacioDeTrabajo.update({
      where: { id },
      data: { nombre: data.nombre, usuarios: { deleteMany: {}, create: users } }
    })
  }
}
