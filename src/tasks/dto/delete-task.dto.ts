import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsNumber, IsString, IsArray,IsDate } from 'class-validator';

export class DeleteTaskDto extends PartialType(CreateTaskDto) {
    @IsNumber()
    columnaId?: number;
  
    @IsNumber()
    id: number  
}
