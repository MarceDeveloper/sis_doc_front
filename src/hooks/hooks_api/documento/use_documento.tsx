import React, { useEffect, useState } from 'react'
import { axios_ } from '../../../axios/_axios'
import { swal } from '../../../utils/alert_swal/swal'
import { DTO_documento } from '../../../Model/DTO/DTO_Documento';

export const use_documentos = () => {
  const [documentos, setDocmentos] = useState<DTO_documento[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDocumentos();
  }, []);

  const fetchDocumentos = async () => {
    try {
      setLoading(true);
      const response = await axios_.get('/api/documentos'); // Reemplaza '/api/reparticiones' con la ruta correcta de tu API
      setDocmentos(response?.data?.data);
      setLoading(false);
    } catch (error) {
      setError('Error al obtener los documentos');
      setLoading(false);
    }
  };

  const getAll_documentos = async ()=>{
    const res = await axios_.get("/api/documentos")
    return res.data as []
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
  const anular_documento = async (id_documento:number,usuario:string,contrasena:string)=>{
    const res  = await axios_.post(`/api/documentos/anular/${id_documento}`,{usuario,contrasena})
    fetchDocumentos()
    // swal.fire({title:"OK" ,text:"documento anulado con exito",icon:"success",timer:2000})
    return res
  }
  return {
    documentos,
    loading,
    getAll_documentos,
    crear_documento,
    crear_version_documento,
    update_documento,
    delete_documento,
    anular_documento
  }
}
