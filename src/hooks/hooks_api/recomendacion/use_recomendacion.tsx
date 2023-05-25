import React from 'react'
import * as DTO from './DTO_recomendacion'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_recomendacion = () => {

  const getAll_recomendacion = async ()=>{
    const res = await axios_.get("/recomendacion")
    return res.data as DTO.DTO_Recomendacion[]
  }
  const get_by_id_informe = async (id_informe:number)=>{
    const res = await axios_.post("/recomendacion/get_by_id_informe",{id_informe})
    return res.data as DTO.DTO_Recomendacion[]
  }
  const crear_recomendacion = async (new_secretaria:DTO.DTO_create_Recomendacion)=>{
    const res  = await axios_.post("/recomendacion",new_secretaria)
    swal.fire({title:"OK" ,text:"entidad creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_recomendacion,
    get_by_id_informe,
    crear_recomendacion
  }
}
