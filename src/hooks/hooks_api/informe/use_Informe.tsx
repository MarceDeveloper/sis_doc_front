import React from 'react'
import * as DTO from './DTO_Informe'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_informe = () => {

  const getAll_informe = async ()=>{
    const res = await axios_.get("/informe")
    return res.data as DTO.DTO_Informe[]
  }
  const crear_informe = async (new_item :DTO.DTO_creata_Informe)=>{
    const res  = await axios_.post("/informe",new_item)
    swal.fire({title:"OK" ,text:"informe creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_informe,
    crear_informe
  }
}
