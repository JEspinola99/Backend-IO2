import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsNumber, IsString, IsArray,IsDate } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsString()
    descripcion: string;
  
    @IsString()
    titulo: string;
  
    @IsString()
    fechaVencimiento: string;
}
