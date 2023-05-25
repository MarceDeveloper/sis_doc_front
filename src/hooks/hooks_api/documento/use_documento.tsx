import React from 'react'
import * as DTO from './DTO_Documento'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'

export const use_documento = () => {

  const getAll_documentos = async ()=>{
    const res = await axios_.get("/api/documentos")
    return res.data as DTO.DTO_Documento[]
  }
  const crear_documento = async (newDocumento:DTO.DTO_create_Docuemento)=>{
    
    const config = {
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'multipart/form-data'

      }
    };
    const formData = new FormData();
    formData.append('file_data', newDocumento.file_data);
    let temp = newDocumento as any
    delete temp.file_data
    console.log("antes ",newDocumento)
    formData.append('data', JSON.stringify({...temp}));

    console.log(newDocumento)
    const res  = await axios_.post("/api/documentos",formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    // const res  = await axios_.post("/documento",formData,{
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    console.log({res:res})
    swal.fire({title:"OK" ,text:"documento creado con exito",icon:"success",timer:2000})
    return res
  }
  
  const update_documento = async (id_documento:number,newDocumento:DTO.DTO_create_Docuemento)=>{
    
    const config = {
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'multipart/form-data'

      }
    };
    const formData = new FormData();
    formData.append('file_data', newDocumento.file_data);
    let temp = newDocumento as any
    delete temp.file_data
    console.log("antes ",newDocumento)
    formData.append('data', JSON.stringify({...temp}));

    console.log(newDocumento)
    const res  = await axios_.put(`/api/documentos/${id_documento}`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    // const res  = await axios_.post("/documento",formData,{
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    console.log({res:res})
    swal.fire({title:"OK" ,text:"documento creado con exito",icon:"success",timer:2000})
    return res
  }

  const delete_documento = async (id_documento:number)=>{
    const res  = await axios_.delete(`/api/documentos/${id_documento}`)
  
    swal.fire({title:"OK" ,text:"documento eliminado con exito",icon:"success",timer:2000})
    return res
  }
  return {
    getAll_documentos,
    crear_documento,
    update_documento,
    delete_documento
  }
}
