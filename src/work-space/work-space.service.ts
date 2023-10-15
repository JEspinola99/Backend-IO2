import { Board } from './../boards/entities/board.entity';
import { Injectable } from '@nestjs/common';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

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

  getSpace(id: number) {
    return this.prismaService.espacioDeTrabajo.findUnique({ where: { id }, include: { usuarios: true, Tablero: true } })
  }

  async updateSpace(data: UpdateWorkSpaceDto, id: number) {
    const users = data.usuarios.map((user) => ({ usuarioId: user }))
    console.log(users)
    return this.prismaService.espacioDeTrabajo.update({
      where: { id },
      data: { nombre: data.nombre, usuarios: {deleteMany: {}, create: users }}
    })
  }
}
