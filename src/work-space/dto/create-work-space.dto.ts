import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateWorkSpaceDto {
    @IsString()
    nombre: string;
    @IsNumber()
    creadorId: number;
    @IsArray()
    usuarios?: number[];
}
