import React from 'react'
import * as DTO from './DTO_tipo_informe'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_tipo_informe = () => {

  const getAll_tipo_informe = async ()=>{
    const res = await axios_.get("/tipo_informe")
    return res.data as DTO.DTO_Tipo_Informe[]
  }
  const crear_tipo_informe = async (new_secretaria:DTO.DTO_create_Tipo_Informe)=>{
    const res  = await axios_.post("/tipo_informe",new_secretaria)
    swal.fire({title:"OK" ,text:"entidad creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_tipo_informe,
    crear_tipo_informe
  }
}
