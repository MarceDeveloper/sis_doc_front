


import React, { useState } from 'react';
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


export const PruebaDocuemento = () => {
  const [OpenModal, setOpenModal] = useState(false)
  const [doc_selec_for_update, setdoc_selec_for_update] = useState<DTO_documento | null>(null)
  const {documentos,crear_documento,update_documento,getAll_documentos,delete_documento,loading} = use_documentos()
  console.log({documentos})

  const handleClose = ()=>{
    setOpenModal(false)
  }

  const onSubmit = async (data: any) => {
    console.log(data)
    try {
        if (!doc_selec_for_update) {
          // const res = await crear_documento(data)
          alert("crare")
          Swal.fire({title:"OK" ,text:"documento creado con exito",icon:"success",timer:2000})
        }else{
          alert("modificare")
          const res = await update_documento(data.id_documento,data)
          Swal.fire({title:"OK" ,text:"documento actualizado con exito",icon:"success",timer:2000})
        }
        setOpenModal(false)
    } catch (error) {
        console.log(error)
        Swal.fire({title:"Error" ,text:"no se pudo crear el document",icon:"error",timer:2000})
        setOpenModal(false)

    }
  };
  


  return (
    <Box>
      <Navbar/>
      <Fab color='primary' aria-label="Add" onClick={()=>{}} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AiOutlinePlus  size={50} onClick={()=>{
          setdoc_selec_for_update(null)
          setOpenModal(true)
        }}/>
      </Fab>

      <Typography>Aqui ira el filter</Typography>
      <Modal open={OpenModal} onClose={handleClose}>
        <div className="modal-container" style={{width:"90%", maxHeight:"90vh", overflow:"auto"}}>
          <Form_Documento onSubmit={onSubmit} documento={doc_selec_for_update}/>

          {/* <Form_Usuarios  onSubmit={selectedUser == undefined ? Crear : Edit} defaultValues={selectedUser} /> */}
        </div>
      </Modal>
      <Table_Documento 
        setdoc_selec_for_update={(doc:DTO_documento)=>{
          delete doc.reparticion
          setdoc_selec_for_update(doc)
          setOpenModal(true)
        }} 
        delete_documento={delete_documento} documentos={documentos}
      />
    </Box>
  );
};
