import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BoardsService {

  constructor(private prismaService: PrismaService) { }

  create(createBoardDto: CreateBoardDto) {
    return this.prismaService.tablero.create(
      {
        data:
        {
          nombre: createBoardDto.nombre,
          espacioDeTrabajoId: createBoardDto.espacioDeTrabajoId
        }
      }
    );
  }

  findAll() {
    return `This action returns all boards`;
  }

  findById(id: number) {
    return this.prismaService.tablero.findMany({where: {espacioDeTrabajoId: id}});
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
