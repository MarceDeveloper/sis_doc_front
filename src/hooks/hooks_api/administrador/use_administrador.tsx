import React from 'react'
import * as DTO from './DTO_administrador'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_administrador = () => {


  const getAll_administradores = async ()=>{
    const res = await axios_.get("/administrador")
    return res.data 
  }

  const crear_Administrador = async (adm:DTO.DTO_create_Administrador)=>{
    const res = axios_.post("/administrador",adm)
    swal.fire({title:"OK" ,text:"administrador creado con exito",color:"success",timer:2000})
    return (await res).data
  }


  return {
    getAll_administradores,
    crear_Administrador
  }
}
