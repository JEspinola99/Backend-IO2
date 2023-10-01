import { Injectable } from '@nestjs/common';
import { CreateWorkSpaceUserDto } from './dto/create-work-space-user.dto';
import { UpdateWorkSpaceUserDto } from './dto/update-work-space-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { WorkSpaceUser } from './entities/work-space-user.entity';

@Injectable()
export class WorkSpaceUserService {

  constructor(private prismaService: PrismaService) { }


  create(data: WorkSpaceUser[]) {
    return this.prismaService.espaciosDeTrabajoUsuario.createMany({data});
  }

  async getSpacesByUserId(usuarioId: number) {
    return this.prismaService.espaciosDeTrabajoUsuario.findMany(
      {
        where: { usuarioId },
        include: { espacioDeTrabajo: true },
      })
  }

  findAll() {
    return `This action returns all workSpaceUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workSpaceUser`;
  }

  update(id: number, updateWorkSpaceUserDto: UpdateWorkSpaceUserDto) {
    return `This action updates a #${id} workSpaceUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} workSpaceUser`;
  }
}
