import React, { useState } from 'react';
import {  Button, Modal, Fab } from '@mui/material';
import { Form_Usuarios } from './Form_Usuarios';
import { Form_Usuario, Usuario, use_usuarios } from '../../hooks/prueba/usuario/use_usuarios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import {AiFillDelete} from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai';

import {TfiWrite} from 'react-icons/tfi'
import {GrAddCircle} from 'react-icons/gr'
import { Navbar } from '../../components/Navbar/Navbar';
import { Colores } from '../../config/config_style';
import { ScreenLoading } from '../../components/ScreenLoading/ScreenLoading';
import { validate_map } from '../../utils/validate_map';


export const Prueba_Usuarios: React.FC = () => {
  const {usuarios,createUser,loading,updateUser,deleteUser} = use_usuarios()
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Form_Usuario | undefined>(undefined);

  
  const handleClose = ()=>{
    setOpen(false)
  }

  

  const handleModalCreateUser = () => {
    setSelectedUser(undefined);
    setOpen(true)
  };

  const handleModalEditUser = (usuario: Form_Usuario) => {
    setSelectedUser(usuario);
    setOpen(true);
  };
  const handleModalDelete = (id: number) => {
    deleteUser(id)
  };

  const Crear = (usuario:Form_Usuario)=>{
    createUser(usuario)
    setOpen(false)
  }
  const Edit = (usuario:Form_Usuario)=>{
    updateUser(usuario.id_usuario,usuario)
    setOpen(false)

  }
  const Delete = (id:number)=>{
    
  }


 

  
  return (
    <div>
      <ScreenLoading is_visible={loading}/>
      <Navbar/>

      <Fab color='primary' aria-label="Add" onClick={()=>{}} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AiOutlinePlus  size={50} onClick={()=>{handleModalCreateUser()}}/>
      </Fab>
      <TableContainer sx={{maxWidth:["100%","90%"], mx:"auto" ,mt:2}}>
      <Table className='customTable' size='small'>
        <TableHead>
          <TableRow className='customTableRowHead'>
            <TableCell className='cell_head'>ID</TableCell>
            <TableCell className='cell_head'>Usuario</TableCell>
            <TableCell className='cell_head'>Nombre</TableCell>
            <TableCell className='cell_head'>Estado</TableCell>
            {/* <TableCell className='cell_head'>Acciones</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {validate_map(usuarios).map((usuario) => (
            <TableRow key={usuario?.id_usuario}>
              <TableCell className='customTableRowBody'>{usuario?.id_usuario}</TableCell>
              <TableCell className='customTableRowBody'>{usuario?.usuario}</TableCell>
              <TableCell className='customTableRowBody'>{usuario?.nombre}</TableCell>
              <TableCell className='customTableRowBody'>{usuario?.estado}</TableCell>
              <TableCell align='center' className='customTableRowBody'>
                {/* <Button size='small' sx={{mr:1}} onClick={() => {handleModalDelete(usuario.id_usuario)}} variant='outlined' color='error'><AiFillDelete/></Button>
                <Button size='small' sx={{ml:1}} onClick={() => {handleModalEditUser(usuario)}} variant='outlined' color='info'><TfiWrite/></Button> */}

                {/* <IconButton color="primary" >
                  <Edit />
                </IconButton>
                <IconButton color="secondary" >
                  <Delete />
                </IconButton> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      

      {/* Mostrar el modal para crear/actualizar usuarios */}
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container" style={{width:"90%"}}>
          <Form_Usuarios  onSubmit={selectedUser == undefined ? Crear : Edit} defaultValues={selectedUser} />
        </div>
      </Modal>

     
    </div>
  );
};
