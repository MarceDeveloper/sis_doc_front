export interface RootObject {
    data:    DTO_reporte_formato_6;
    message: string;
   }
   
   export interface DTO_reporte_formato_6 {
    data:                Datum[];
    secre_reparticiones: SecreReparticione[];
   }
   
   export interface Datum {
    antecedentes:            string;
    comentario:              string;
    descripcion:             Descripcion[];
    estado:                  string | null;
    estado_recomendacion:    string;
    id:                      number;
    id_informe:              number;
    informe:                 Informe;
    numero_de_recomendacion: string;
    plazo_de_implementacion: Date;
    reparticiones:           Reparticione[];
    titulo:                  string;
    titulo_informe:          string;
   }
   
   export interface Descripcion {
    aceptacion:                  boolean;
    estado:                      null | string;
    estado_descripcion:          string;
    id:                          number;
    id_recomendacion:            number;
    justificacion_no_aceptacion: string;
    tarea:                       Tarea[];
    texto:                       string;
    titulo:                      string;
   }
   
   export interface Tarea {
    acciones_tareas_mae: AccionesTareasMae[];
    id:                  number;
    id_descripcion:      number;
    tarea_responsable:   TareaResponsable[];
    texto:               string;
   }
   
   export interface AccionesTareasMae {
    accion:   string;
    id:       number;
    id_tarea: number;
   }
   
   export interface TareaResponsable {
    id:             number;
    id_responsable: number;
    id_tarea:       number;
    responsable:    Responsable;
   }
   
   export interface Responsable {
    cargo:          string;
    id:             number;
    id_reparticion: number;
    nombre:         string;
    reparticion:    Secretaria;
   }
   
   
   
   
   
   export interface Secretaria {
    actividad:       string;
    codigo:          number;
    createdAt:       Date;
    deletedAt:       Date | null;
    direccion:       string;
    estado:          string;
    id_actividad:    number;
    id_direccion:    number;
    id_reparticion:  number;
    id_unidad:       number;
    id_unidad_padre: number;
    id_user_create:  number;
    id_user_delete:  null;
    id_user_update:  null;
    nivel:           string;
    nombre:          string;
    updatedAt:       Date;
   }
   
   
   
   
   
   export interface Informe {
    estado:             string;
    fecha_de_recepcion: Date;
    id:                 number;
    informe_de_1:       string;
    informe_de_2:       string;
    informe_de_3:       string;
    numero_informe:     string;
    titulo:             string;
   }
   
   export interface Reparticione {
    id_reparticion:     number;
    nombre_reparticion: string;
   }
   
   
   export interface SecreReparticione {
    lst_reparticiones: LstReparticione[];
    secretaria:        Secretaria;
   }
   
   export interface LstReparticione {
    reparticion: Secretaria;
    secretaria:  Secretaria;
   }
   