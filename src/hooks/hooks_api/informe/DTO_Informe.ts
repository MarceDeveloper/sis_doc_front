export interface DTO_creata_Informe{
    descripcion: string,
    entidad_id: number,
    fecha_actualizacion: string,
    fecha_creacion: string,
    subtipo_informe_id: number,
    titulo: string,

}


export interface DTO_Informe {
    id_informe     :     number;
    titulo	:string
    descripcion  : string;
    fecha_creacion:string
    fecha_actualizacion	:string
    entidad_id   : number;
    subtipo_informe_id	:number
    estado  : number;
    
}
   