import React from 'react'
import * as DTO from './DTO_secretaria'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_secretaria = () => {

  const getAll_Secretaria = async ()=>{
    const res = await axios_.get("/secretaria")
    return res.data as DTO.DTO_Secretaria[]
  }
  const crear_secretaria = async (new_secretaria:DTO.DTO_create_Secreataria)=>{
    const res  = await axios_.post("/secretaria",new_secretaria)
    swal.fire({title:"OK" ,text:"secretaria creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    crear_secretaria,
    getAll_Secretaria
  }
}
