import React from 'react'
import * as DTO from './DTO_estado_documento'
import { axios_ } from '../../../axios/_axios'

export const use_estado_documento = () => {

  const getAll_estado_documento = async ()=>{
    // const res = await axios_.get("/estado_documento")
    const res = await axios_.get("/api/estado_documento")

    return res.data as DTO.DTO_Estado_Documento[]
  }


  return {
    getAll_estado_documento,
    
  }
}
