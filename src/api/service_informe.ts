import { axios_ } from "../axios/_axios"
import { DTO_lst_informes } from "./DTO_Seguimiento/DTO_lst_informes"

export const api_service_informe  = {
   
    lst : async () =>{
        const res = await axios_.get<DTO_lst_informes>("/api/informes/lista")
       
        return res.data?.data 
    },
    by_id : async (id_informe:number) =>{
        const res = await axios_.get<DTO_lst_informes>(`/api/informes/${id_informe}`)
        return res.data?.data 
    },
    create:async ()=>{
        const res = await axios_.post("/api/informes/create")
        return res.data?.data

    },
    update : async (id:number,data:any)=>{
        const res = await axios_.post(`/api/informes/update/${id}`,data)
        return res.data?.data
    },
    delete : async (id:number)=>{
        const res = await axios_.delete(`/api/informes/delete/${id}`)
        return res.data?.data
    }
    
}