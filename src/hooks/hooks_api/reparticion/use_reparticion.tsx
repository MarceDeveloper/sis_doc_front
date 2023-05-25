import React from 'react'
import * as DTO from './DTO_reparticion'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_reparticion = () => {

  const getAll_reparticion = async ()=>{
    const res = await axios_.get("/api/reparticiones")
    return res.data as DTO.DTO_Reparticion[]
  }
  const crear_reparticion = async (new_secretaria:DTO.DTO_create_Reparticion)=>{
    const res  = await axios_.post("/reparticion",new_secretaria)
    swal.fire({title:"OK" ,text:"reparticion creada con exito",icon:"success",timer:2000})
    return res
  }
  

  return {
    getAll_reparticion,
    crear_reparticion
  }
}
