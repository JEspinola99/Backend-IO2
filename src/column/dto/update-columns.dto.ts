import { IsArray, IsNumber } from 'class-validator';
import { Prisma } from '@prisma/client';

export class UpdateColumnsDto  {
    @IsNumber()
    columnId1: number
    @IsArray()
    tasksColumn1: Prisma.TareaUpdateManyWithoutColumnaNestedInput[]
    @IsNumber()
    columnId2: number
    tasksColumn2: []
}
