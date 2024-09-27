import { axios_ } from "../axios/_axios"
import { DTO_lst_informes } from "./DTO_Seguimiento/DTO_lst_informes"
import { DTO_lst_recomendaciones } from "./DTO_Seguimiento/DTO_lst_recomendaciones"
import { api_service_responsable } from "./service_responsable"


const seguimiento_informes = {
    // lst_informes : async () =>{
    //     const res = await axios_.get<DTO_lst_informes>("/api/informes/lst_informes")
    //     return res.data?.data 
    // },
    // lst_recomendaciones_filter_ano_and_entidad: async (ano:number,entidad:string)=>{
    //     const res = await axios_.post<DTO_lst_recomendaciones>("/api/informes/lst_recomendaciones_por_ano_y_entidad",{ano:ano,entidad:entidad})
    //     return res.data?.data  
        
    // },
    // create_responsable: async (nombre:string,cargo:string,id_reparticion:number)=>{
    //     const res = await axios_.post<any>("/api/responsables",{nombre,cargo,id_reparticion})
    //     return res.data?.data  
    // },
    // listar_responsables : async ()=>{
    //     const res = await axios_.get<any>("/api/responsables")
    //     return res.data?.data  
    // }
}

export const api_service = {
    seguimiento_informes
}


