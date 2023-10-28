import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'prisma/prisma.service';
import { DeleteTaskDto } from './dto/delete-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}
  // async create(createTaskDto: CreateTaskDto): Promise<any> {

  //   const { descripcion, titulo, fechaVencimiento } = createTaskDto;

  //   const taskData = {
  //     descripcion: createTaskDto.descripcion,
  //     titulo: createTaskDto.titulo,
  //     fechaVencimiento: new Date(createTaskDto.fechaVencimiento),
  //     fechaCreacion: new Date(), 
  //     usuario: { connect: { id: createTaskDto.usuarioId } }, 
  //     etiqueta: { connect: { id: createTaskDto.etiquetaId } }, 

  //   };

  //   const nuevaTarea = await this.prismaService.tarea.create({
  //     data: taskData,
  //   });

  //   return nuevaTarea;
  // }

  createTask(newTask: CreateTaskDto) {
    const data = {...newTask, fechaVencimiento: new Date(newTask.fechaVencimiento)}
    return this.prismaService.tarea.create({data})
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return this.prismaService.tarea.findUnique({where: {id}, include: {usuario: true, etiqueta: true}});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(data: DeleteTaskDto) {
    console.log(data)
    return this.prismaService.tarea.delete({where: {id: data.id, columnaId: data.columnaId}});
  }
}
