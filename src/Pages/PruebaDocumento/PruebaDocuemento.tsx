


import React, { useState,useEffect } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  Checkbox,
  Grid,
  Typography,
  Box,
  Modal,
  Fab,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Colores } from '../../config/config_style';
import { Form_Documento } from './Form_Dodumento';
import { Navbar } from '../../components/Navbar/Navbar';
import { use_documentos } from '../../hooks/hooks_api/documento/use_documento';
import { Table_Documento } from './Table_Documento';
import {AiOutlinePlus} from 'react-icons/ai'
import Swal from 'sweetalert2';
import { DTO_documento } from '../../Model/DTO/DTO_Documento';
import { saveAs } from 'file-saver';
import { axios_ } from '../../axios/_axios';
import { Filter_Documentos } from './Filter_Documentos';
import withReactContent from 'sweetalert2-react-content'
import { useStore_sesion } from '../../store/store_sesion';
import { error_message_api } from '../../utils/message_error_api';


interface Iprops{
  type_route : "public" | "private"
}

export const PruebaDocuemento = ({type_route}:Iprops) => {
  const {usuario} = useStore_sesion()
  // console.log(usuario)
  const [lst_docs_filtrados, setlst_docs_filtrados] = useState<DTO_documento[]>([])
  const [accion_form, setaccion_form] = useState<"crear" | "actualizar" | "nueva_version">("crear")
  const [palabra_search, setpalabra_search] = useState("")
  const [OpenModal, setOpenModal] = useState(false)
  const [doc_selec_for_update, setdoc_selec_for_update] = useState<DTO_documento | null>(null)
  const {documentos,crear_documento,crear_version_documento,update_documento,getAll_documentos,delete_documento,anular_documento,loading, setDocmentos,get_documentos_permitidos} = use_documentos()

  const [moda_display, setmoda_display] = useState<"block"| "none">("block")

  const MySwal = withReactContent(Swal)



  useEffect(() => {
    getDocs()
  }, [usuario])

  const getDocs = async ()=>{
    let lst :DTO_documento[]= []
    if (usuario) {
      lst = await getAll_documentos()
    }else{

      lst = await get_documentos_permitidos()
    }
    setDocmentos(lst)
  }
  

  const handleClose = ()=>{
    setOpenModal(false)
  }


  const FilterLst = (): DTO_documento[] =>{
    const cadena = palabra_search.toUpperCase()
    let matchesSearch = true
    let matchesEstadoDocumento = true

    let matches_reparticion = true
    let matches_is_fisico = true
    let matches_is_digital = true
    
   

    if(!Array.isArray(documentos)){
      return []
    }
    
    return  documentos.filter((doc) => {
      if (cadena.length > 0 ) {
        matchesSearch = doc.nombre_documento.toUpperCase().includes(cadena)
      }
     

      return matchesSearch && matches_reparticion && matches_is_fisico && matches_is_digital && matchesEstadoDocumento;
    });
    // if (palabra_search.length == 0) {
    //   return lst_documento
    // }
    // const cadena = palabra_search.toUpperCase()
    // return lst_documento.filter((doc)=>{
    //   return doc.nombre_documento.toUpperCase().includes(cadena)
    // })
  }
  

  const DescargarDocumento = async (file_name:string)=>{
    try {
      if (file_name?.length > 0) {
        const response = await axios_.post('/api/files', {file_name:file_name},{ responseType: 'blob' });
        // Guardar la respuesta como un archivo
        saveAs(response.data, file_name);
      }
    } catch (error) {
      // Manejar errores
      console.error('Error al realizar la solicitud:', error);
    }
  }

  const onSubmit = async (data: any) => {
    setmoda_display("none")
    Swal.fire({
      title: 'Ingrese la contraseña',
      input: 'password',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      customClass: {
        container: 'my-swal-container', // Nombre de la clase CSS personalizada
      },
    }).then((result) => {
      setmoda_display("block")

      Confirmado_Submit(data,result.value)
      // else {
      //   Swal.fire('Contraseña incorrecta', '', 'error');
      // }
    });
   
    
  };
  const Confirmado_Submit = async (data:any,contrasena:string)=>{
    data.usuario = usuario?.usuario
    data.contrasena = contrasena

    try {
        if (!doc_selec_for_update) {
          //Validar tenga documentos
          if (data.file_word?.length == 0  || data.file_pdf?.length == 0) {
            Swal.fire({title:"error",text:"word y pdf obligatorios",icon:"error"})
          }else{
            //CREAR
            onCrear_Documento(data)
          }

        }else{
          if (accion_form == "actualizar") {
            onActualizar_Documento(data)

          }else if (accion_form == "nueva_version") {
            //VALIDAR TENGA DOCUMENTOS
            if (data.file_word?.length == 0  || data.file_pdf?.length == 0) {
              Swal.fire({title:"error",text:"word y pdf obligatorios",icon:"error"})
            }else{
              //CREAR VERSION
              onUpVersion(data)
            }
           
          }
        }
        
    } catch (error) {
        
        Swal.fire({title:"Error" ,text:error_message_api(error),icon:"error",timer:2000})
        setOpenModal(false)

    }
  }
  
  const onCrear_Documento = async (data:any)=>{
    try {
      const res = await crear_documento(data)
      Swal.fire({title:"OK" ,text:"documento creado con exito",icon:"success",timer:2000})
      setOpenModal(false)
    } catch (error:any) {
      Swal.fire({title:"Error" ,text:error_message_api(error),icon:"error",timer:2000})
    }
  }
  const onActualizar_Documento = async (data:any)=>{
    try {
      const res = await update_documento(data.id_documento,data)
      Swal.fire({title:"OK" ,text:"documento actualizado con exito",icon:"success",timer:2000})
      setOpenModal(false)
    } catch (error) {
      Swal.fire({title:"Error" ,text:error_message_api(error),icon:"error",timer:2000})
    }
    
  }
  const onUpVersion = async (data:any)=>{
    
    const id_doc = data.id_documento
    delete data.id_documento
    delete data.estado_documento
    delete data.version_documento
    delete data.fecha_creacion
    delete data.url_file_word
    delete data.url_file_pdf
    delete data.createdAt
    delete data.updatedAt
    delete data.deletedAt
    delete data.id_user_create
    delete data.id_user_update
    delete data.id_user_delete
    try {
      const res = await crear_version_documento(id_doc,data)
      Swal.fire({title:"OK" ,text:"version de documento creado con exito",icon:"success",timer:2000})
      setOpenModal(false)
    } catch (error) {
      Swal.fire({title:"Error" ,text:error_message_api(error),icon:"error",timer:2000})
    }
    
   
  }

  return (
    <Box>
      <Navbar/>
      { type_route == "private" && usuario?.reparticion.id_unidad == 30565 && 
        <Fab color='primary' aria-label="Add" onClick={()=>{}} style={{ position: 'fixed', bottom: 16, right: 16 }}>
          <AiOutlinePlus  size={50} onClick={()=>{
            setdoc_selec_for_update(null)
            setaccion_form("crear")
            setOpenModal(true)
          }}/>
        </Fab>
      }
      {/* <Typography>Aqui ira el filter</Typography> */}
      <Filter_Documentos lst_documentos={documentos || []} onFilter={(lst_documentos_filtrados)=>{setlst_docs_filtrados(lst_documentos_filtrados)}}/>
      <Modal open={OpenModal} onClose={handleClose} style={{zIndex:1000,display:moda_display}}>
        <div className="modal-container" style={{width:"90%", maxHeight:"90vh", overflow:"auto"}}>
          <Form_Documento accion_form={accion_form} onSubmit={onSubmit} documento={doc_selec_for_update}/>

          {/* <Form_Usuarios  onSubmit={selectedUser == undefined ? Crear : Edit} defaultValues={selectedUser} /> */}
        </div>
      </Modal>
      <Table_Documento 
        type_route={type_route}
        setaccion_form={setaccion_form}
        DescargarDocumento={DescargarDocumento}
        setdoc_selec_for_update={(doc:DTO_documento)=>{
          delete doc.reparticion
          setdoc_selec_for_update(doc)
          setOpenModal(true)
        }} 
        anular_documento = {anular_documento}
        delete_documento={delete_documento} documentos={lst_docs_filtrados}

      />
    </Box>
  );
};
