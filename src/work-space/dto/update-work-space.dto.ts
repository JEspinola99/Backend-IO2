import { PartialType } from '@nestjs/swagger';
import { CreateWorkSpaceDto } from './create-work-space.dto';
import { IsNumber, IsString, IsArray } from 'class-validator';

export class UpdateWorkSpaceDto extends PartialType(CreateWorkSpaceDto) {
    @IsString()
    nombre: string
    @IsArray()
    usuarios?: number[];
}
