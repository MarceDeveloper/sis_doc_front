export interface Descripcion {
    titulo: string;
    texto: string;
    aceptacion: boolean;
    justificacion_no_aceptacion: string;
    estado: string | null;
    estado_descripcion: string;
}

export interface Recomendacion {
    titulo: string;
    numero_de_recomendacion: string | null;
    estado: string | null;
    estado_recomendacion: string;
    plazo_de_implementacion: string; // DateTime
    antecedentes: string | null;
    comentario: string | null;
    descripcion: Descripcion[];
}

export interface DTO_reporte_formato_1 {
    titulo: string;
    tipo_informe_2:string;
    numero_informe: string;
    fecha_de_recepcion: string; // DateTime
    recomendaciones: Recomendacion[];
}