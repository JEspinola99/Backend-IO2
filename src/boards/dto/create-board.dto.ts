import { IsNumber, IsString } from "class-validator";

export class CreateBoardDto {
    @IsString()
    nombre: string
    @IsNumber()
    espacioDeTrabajoId: number;
}
