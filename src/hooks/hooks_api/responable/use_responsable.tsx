import React from 'react'
import * as DTO from './DTO_Responsable'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_responsable = () => {

  const getAll_responsable = async ()=>{
    const res = await axios_.get("/responsable")
    return res.data as DTO.DTO_Responsable[]
  }
  const crear_responsable = async (new_item :DTO.DTO_create_Responsable)=>{
    const res  = await axios_.post("/responsable",new_item)
    swal.fire({title:"OK" ,text:"entidad creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_responsable,
    crear_responsable
  }
}
