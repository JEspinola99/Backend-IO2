import { Optional } from "@nestjs/common";
import { IsString, IsNotEmpty, IsDate, IsInt, IsNumber } from "class-validator"; 

export class CreateTaskDto {
    @IsString()
    descripcion: string;
  
    @IsString()
    titulo: string;
  
    @IsString()
    fechaVencimiento:  string;
  
    @Optional()
    usuarioId?: number;
  
    @Optional()
    etiquetaId?: number;

    @IsNumber()
    columnaId: number;

}
