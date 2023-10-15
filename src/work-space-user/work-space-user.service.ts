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

  async getUsersBySpaceId(espacioDeTrabajoId: number){
    const users =  await this.prismaService.espaciosDeTrabajoUsuario.findMany({where: {espacioDeTrabajoId}, include: {usuario: true, espacioDeTrabajo: true}}) 
    console.log(users)
    if(users.length == 0) return []
    const usersFormat = users.map(user => ({id: user.usuario.id, email: user.usuario.email}))
    const res = { id: users[0].espacioDeTrabajo.id,nombre: users[0].espacioDeTrabajo.nombre, usuarios: usersFormat}
    return res;
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
