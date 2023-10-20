import { IsString, IsNotEmpty, IsDate, IsInt } from "class-validator"; 

export class CreateTaskDto {
    @IsString()
    descripcion: string;
  
    @IsString()
    titulo: string;
  
    @IsDate()
    fechaVencimiento: Date;
  
}
