import React, { useEffect, useState } from 'react'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'
import { DTO_documento } from '../../../Model/DTO/DTO_Documento';



export const use_documentos = () => {
  const [documentos, setDocmentos] = useState<DTO_documento[]>([]);
  const [documentos_permitidos, setdocumentos_permitidos] = useState<DTO_documento[]>([]);
  const [documentos_permitidos_by_secre, setdocumentos_documentos_permitidos_by_secre] = useState<DTO_documento[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchDocumentos();
  // }, []);

  const fetchDocumentos = async () => {
    try {
      setLoading(true);
      const response = await axios_.get('/api/documentos'); 
      setDocmentos(response.data?.data)
      setLoading(false);
    } catch (error) {
      setError('Error al obtener los documentos');
      setLoading(false);
    }
  };

  const getAll_documentos = async ()=>{
    const response = await axios_.get('/api/documentos'); 
    // setDocmentos(response.data.data)
    return response.data.data
  }
  const get_documentos_permitidos = async ()=>{
    const response = await axios_.get('/api/documentos/permitidos'); 
    // setdocumentos_permitidos(response.data.data)
    return response.data.data
  }
  const get_documentos_by_secre = async (id:number)=>{
    const response = await axios_.get(`/api/documentos/${id}`); 
    setdocumentos_documentos_permitidos_by_secre(response.data)
    return response.data
  }
  const crear_documento = async (data:any)=>{
    const formData = new FormData();

    formData.append("file_word", data.file_word[0]);
    formData.append("file_pdf", data.file_pdf[0]);

    let temp = data as any;
    delete temp.file_word;
    delete temp.file_pdf;
    formData.append("data", JSON.stringify({ ...temp }));

    const res = await axios_.post("/api/documentos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    fetchDocumentos()
    return res
    
  }
  const crear_version_documento = async (id_documento:number,data:any)=>{
    const formData = new FormData();

    formData.append("file_word", data.file_word[0]);
    formData.append("file_pdf", data.file_pdf[0]);

    let temp = data as any;
    delete temp.file_word;
    delete temp.file_pdf;
    formData.append("data", JSON.stringify({ ...temp }));
    
    const res = await axios_.post(`/api/documentos/nueva_version/${id_documento}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    fetchDocumentos()
    return res

    
  }
  const update_documento = async (id_documento:number,newDocumento :any)=>{
    
    // const config = {
    //   headers: {
    //     // 'Content-Type': 'application/json'
    //     'Content-Type': 'multipart/form-data'

    //   }
    // };
    // const formData = new FormData();
    // formData.append('file_data', newDocumento.file_data);
    // let temp = newDocumento as any
    // delete temp.file_data
    // console.log("antes ",newDocumento)
    // formData.append('data', JSON.stringify({...temp}));

    // console.log(newDocumento)
    // const res  = await axios_.put(`/api/documentos/${id_documento}`,formData,{
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    const formData = new FormData();

    formData.append("file_word", newDocumento.file_word[0]);
    formData.append("file_pdf", newDocumento.file_pdf[0]);

    let temp = newDocumento as any;
    delete temp.file_word;
    delete temp.file_pdf;
    formData.append("data", JSON.stringify({ ...temp }));

    const res = await axios_.put(`/api/documentos/${id_documento}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    fetchDocumentos()

    return res
    // const res  = await axios_.post("/documento",formData,{
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // console.log({res:res})
    // swal.fire({title:"OK" ,text:"documento creado con exito",icon:"success",timer:2000})
    // return res
  }

  const delete_documento = async (id_documento:number,usuario:string,contrasena:string)=>{
    const res  = await axios_.post(`/api/documentos/delete/${id_documento}`,{usuario,contrasena})
    fetchDocumentos()
    swal.fire({title:"OK" ,text:"documento eliminado con exito",icon:"success",timer:2000})
    return res
  }
  const anular_documento = async (id_documento:number,usuario:string,contrasena:string,anulado_con:string)=>{
    const res  = await axios_.post(`/api/documentos/anular/${id_documento}`,{usuario,contrasena,anulado_con})
    fetchDocumentos()
    // swal.fire({title:"OK" ,text:"documento anulado con exito",icon:"success",timer:2000})
    return res
  }
  return {
    documentos,
    loading,
    getAll_documentos,
    get_documentos_permitidos,
    crear_documento,
    crear_version_documento,
    update_documento,
    delete_documento,
    anular_documento,
    setDocmentos
  }
}

// //EXPORT TYPE
// const use_docu = use_documentos(); // Valor de retorno del custom hook

// export type TYPE_use_documentos = typeof use_docu;

