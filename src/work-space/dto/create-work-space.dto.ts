import { IsNumber, IsString } from "class-validator";

export class CreateWorkSpaceDto {
    @IsString()
    nombre: string;
    @IsNumber()
    creadorId: number;
    usuarios?: number[];
}
