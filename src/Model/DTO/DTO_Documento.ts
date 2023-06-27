import { DTO_Reparticion } from "./DTO_Reparticion";

export interface DTO_documento {
    id_documento: number;
    permitido: boolean;
    nombre_documento: string;
    version_documento: number;
    estado_documento: string
    fecha_vigencia: Date;
    codigo_del_documento: string;
    tipo_documento : string
    // estatuto: boolean;
    // codigo: boolean;
    // reglamento: boolean;
    // manual: boolean;
    // guia: boolean;
    // instructivo: boolean;
    // formato: boolean;
    // registro: boolean;
    elaborado_por?: string | null;
    revisado_por?: string | null;
    aprobado_por?: string | null;
    aprobado_con?: string | null;
    numero_de_paginas: number;
    observaciones: string;
    estado: string;
    fecha_creacion: Date;
    formato_fisico: boolean;
    url_file_word: string;
    url_file_pdf: string;
    id_reparticion: number;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    id_user_create: number;
    id_user_update?: number;
    id_user_delete?: number;
    reparticion?:DTO_Reparticion
  }