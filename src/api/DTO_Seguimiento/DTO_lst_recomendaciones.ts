import { DTO_lst_informes } from "./DTO_lst_informes";

export interface DTO_lst_recomendaciones {
    data: Recomendacion[];
    success: boolean;
}
type Informe = DTO_lst_informes["data"][0];
 
interface Recomendacion {
    aceptacion:                  boolean;
    antecedentes:                string;
    comentario:                  string;
    descripcion:                 string;
    estado:                      string;
    estado_recomendacion:        string;
    id:                          number;
    id_informe:                  number;
    justificacion_no_aceptacion: string;
    numero_de_recomendacion:     string;
    plazo_de_implementacion:     Date;
    titulo:                      string;
    informe:Informe
   }
   
  