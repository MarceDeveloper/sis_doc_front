import { DTO_Reparticion } from "./DTO/DTO_Reparticion";

export interface Usuario {
    id_usuario: number;
    usuario: string;
    nombre: string;
    estado: string;
    contrasena:string
    id_reparticion:number
    reparticion:DTO_Reparticion
}