import React from 'react'
import * as DTO from './DTO_entidad'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_entidad = () => {

  const getAll_entidad = async ()=>{
    const res = await axios_.get("/entidad")
    return res.data as DTO.DTO_Entidad[]
  }
  const crear_entidad = async (new_secretaria:DTO.DTO_create_Entidad)=>{
    const res  = await axios_.post("/entidad",new_secretaria)
    swal.fire({title:"OK" ,text:"entidad creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_entidad,
    crear_entidad
  }
}
