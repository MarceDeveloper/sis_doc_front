// interface Responsable {
//     idResponsable: number;
//     nombreResponsable: string;
//     cargoResponsable: string;
// }

// interface Tarea {
//     idTarea: number;
//     textoTarea: string;
//     responsables: Responsable[];
// }

// interface Descripcion {
//     titulo: string;
//     texto: string;
//     aceptacion: boolean;
//     justificacion_no_aceptacion: string;
//     estado: string;
//     estado_descripcion: string;
//     tareas: Tarea[];
// }

// interface Recomendacion {
//     titulo: string;
//     numero_de_recomendacion: string;
//     estado: string;
//     estado_recomendacion: string;
//     plazo_de_implementacion: string; // Puede que necesites ajustar el tipo si es una fecha
//     antecedentes: string;
//     comentario: string;
//     descripcion: Descripcion[];
// }

// export interface DTO_reporte_formato_2 {
//     titulo: string;
//     numero_informe: string;
//     fecha_de_recepcion: string; // Puede que necesites ajustar el tipo si es una fecha
//     recomendaciones: Recomendacion[];
// }



// src/api/DTO_Seguimiento/DTO_formato_2.ts

 interface Responsable {
    idResponsable: number;
    nombreResponsable: string;
    cargoResponsable: string;
}

 interface Tarea {
    idTarea: number;
    textoTarea: string;
    responsables: Responsable[];
}

 interface Descripcion {
    titulo: string;
    texto: string;
    aceptacion: boolean;
    justificacion_no_aceptacion: string;
    estado: string;
    estado_descripcion: string;
    tareas: Tarea[];
}

 interface Recomendacion {
    titulo: string;
    numero_de_recomendacion: string;
    estado: string;
    estado_recomendacion: string;
    plazo_de_implementacion: string; // Puede que necesites ajustar el tipo si es una fecha
    antecedentes: string;
    comentario: string;
    descripcion: Descripcion[];
}

export interface DTO_reporte_formato_2 {
    titulo: string;
    tipo_informe_2:string;
    numero_informe: string;
    fecha_de_recepcion: string; // Puede que necesites ajustar el tipo si es una fecha
    recomendaciones: Recomendacion[];
}

