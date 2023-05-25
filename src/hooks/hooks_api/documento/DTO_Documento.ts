export interface DTO_create_Docuemento{
    file_data :File ,// Uint8Array

    id_reparticion  :     number;
    estatuto :string,
    codigo_manual :string,
    reglamento :string,
    manual_procedimiento :string,
    guia :string,
    instructivo :string,
    // formato :string,
    registro :string,
    nombre_documento :string,
    elaborado_por :string,
    revisado_por :string,
    aprobado_por :string,
    resolucion :string,
    fecha :string,
    estado :string,
    id_estado_documento :number,
    observaciones :string,
    fecha_creacion :string,
    // vigencia :string,
    codigo :string,
    version_documento :string,
    formato_fisico: boolean,
    formato_digital :boolean,
    // unidad :string,
    numero_documento :string,
}


export interface DTO_Documento {
    //Reparticion
    nombre_reparticion:string
    codigo_reparticion:number
    id_unidad : number
    
    
    url_file:string
    id_documento:number


    id_reparticion  :     number;
    estatuto :string,
    codigo_manual :string,
    reglamento :string,
    manual_procedimiento :string,
    guia :string,
    instructivo :string,
    formato :string,
    registro :string,
    nombre_documento :string,
    elaborado_por :string,
    revisado_por :string,
    aprobado_por :string,
    resolucion :string,
    fecha :string,
    estado :string,
    id_estado_documento:number
    nombre_estado_documento :string,
    observaciones :string,
    fecha_creacion :string,
    vigencia :string,
    codigo :string,
    version_documento :string,
    formato_fisico: boolean,
    formato_digital :boolean,
    unidad :string,
    numero_documento :string,

    
}
   
