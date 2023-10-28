import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LabelService {

  constructor (private readonly prismaService: PrismaService) {}


  create(createLabelDto: CreateLabelDto) {
    return 'This action adds a new label';
  }

  findAll() {
    return this.prismaService.etiqueta.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} label`;
  }

  update(id: number, updateLabelDto: UpdateLabelDto) {
    return `This action updates a #${id} label`;
  }

  remove(id: number) {
    return `This action removes a #${id} label`;
  }
}
