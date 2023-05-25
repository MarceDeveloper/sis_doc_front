import React from 'react'
import * as DTO from './DTO_sub_tipo_informe'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_sub_tipo_informe = () => {

  const getAll_sub_tipo_informe = async ()=>{
    const res = await axios_.get("/sub_tipo_informe")
    return res.data as DTO.DTO_Sub_Tipo_Informe[]
  }
  const crear_sub_tipo_informe = async (new_item :DTO.DTO_create_Sub_Tipo_Informe)=>{
    const res  = await axios_.post("/sub_tipo_informe",new_item)
    swal.fire({title:"OK" ,text:"entidad creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_sub_tipo_informe,
    crear_sub_tipo_informe
  }
}
