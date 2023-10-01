import { IsNumber, IsString } from "class-validator";

export class CreateColumnDto {
    @IsString()
    nombre: string;
    @IsNumber()
    tableroId: number;
}
