export interface DTO_lst_informes {
    data: Informe[];
    success: boolean;
}

interface Informe {
    estado: string;
    fecha_de_recepcion: Date;
    id: number;
    informe_de: string;
    numero_informe: string;
    recomendacion: Recomendacion[];
    tipo_de_informe: string;
    titulo: string;
}

interface Recomendacion {
    accion_por_la_mae: Accion_Por_LaMae[];
    acciones_responsables: any[];
    aceptacion: boolean;
    antecedentes: string;
    comentario: string;
    descripcion: string;
    estado: string;
    estado_recomendacion: string;
    id: number;
    id_informe: number;
    justificacion_no_aceptacion: string;
    numero_de_recomendacion: string;
    plazo_de_implementacion: Date;
    tarea: Tarea[];
    recomendacion_responsable:Recomendacion_responsable[]
    titulo: string;
}

interface Accion_Por_LaMae {
    accion: string;
    id: number;
    id_recomendacion: number;
}

interface Tarea {
    descripcion: string;
    id: number;
    id_recomendacion: number;
}

interface Recomendacion_responsable{
    id:number
    id_recomendacion:number
    id_responsable:number
    responsable:Responsable
}
interface Responsable{
    id:number
    cargo:string
    id_reparticion:number
    nombre:string
}
