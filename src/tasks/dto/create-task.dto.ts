import { Optional } from "@nestjs/common";
import { IsString, IsNotEmpty, IsDate, IsInt, IsNumber, IsOptional } from "class-validator"; 

export class CreateTaskDto {
    @IsString()
    descripcion: string;
  
    @IsString()
    titulo: string;
  
    @IsString()
    fechaVencimiento:  string;
  
    @IsNumber()
    usuarioId?: number;
  
    @IsOptional()
    @IsNumber()
    etiquetaId?: number;

    @IsNumber()
    columnaId: number;

}
