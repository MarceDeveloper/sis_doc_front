export interface DTO_create_Recomendacion{
    aceptacion: boolean,
    antecedente: string,
    comentario: string,
    descripcion: string,
    estado_impl: string,
    id_informe: number,
    justificacion_rechazo: string,
    numero_recomendacion: string,
    plazo_impl: string,
    titulo: string,

}


export interface DTO_Recomendacion {
    id_recomendacion   :     number;
    numero_recomendacion : string;
    titulo: string
    descripcion:string
    aceptacion:boolean
    justificacion_rechazo: string
    antecedente:string
    plazo_impl:string
    comentario:string   
    estado_impl:string
    id_informe :number
    estado:string
}
   