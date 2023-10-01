import { Injectable } from '@nestjs/common';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorkSpaceService {

  constructor (private prismaService: PrismaService){}

  create(data: CreateWorkSpaceDto) {
    return this.prismaService.espacioDeTrabajo.create({
      data: {
        nombre: data.nombre,
        creadorId: data.creadorId
      }
    });
  }
}
