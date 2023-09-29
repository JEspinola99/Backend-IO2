import { IsNumber } from "class-validator";

export class CreateWorkSpaceUserDto {
    @IsNumber()
    usuarioId: number;
    @IsNumber()
    espacioDeTrabajoId: number;
}
