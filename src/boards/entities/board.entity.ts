import { Timestamp } from "rxjs";

export class Board {
    id: number;
    nombre: string;
    fechaCreacion: Timestamp<1>;
    espacioDeTrabajoId: number;
}
