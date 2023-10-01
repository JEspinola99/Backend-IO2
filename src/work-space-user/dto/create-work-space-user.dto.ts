import { Prisma } from "@prisma/client";
import { IsArray, IsNumber, IsString } from "class-validator";
import { CreateWorkSpaceDto } from "src/work-space/dto/create-work-space.dto";

export class CreateWorkSpaceUserDto {
    @IsArray()
    usuarioId: number[];
    @IsNumber()
    espacioDeTrabajoId: number;
}
