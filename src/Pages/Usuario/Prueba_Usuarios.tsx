import React, { useEffect, useState } from 'react';
import { Button, Modal, Fab, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Typography } from '@mui/material';
import { Form_Usuarios } from './Form_Usuarios';
import { Form_Usuario, Usuario, use_usuarios } from '../../hooks/prueba/usuario/use_usuarios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai';

import { TfiWrite } from 'react-icons/tfi'
import { GrAddCircle } from 'react-icons/gr'
import { Navbar } from '../../components/Navbar/Navbar';
import { Colores } from '../../config/config_style';
import { ScreenLoading } from '../../components/ScreenLoading/ScreenLoading';
import { validate_map } from '../../utils/validate_map';
import { useForm } from 'react-hook-form';
import { service_secretaria } from '../../api/service_secretaria';
import { useNavigate } from 'react-router-dom';
import { service_usuario } from '../../api/service_usuario';
import { ReactSwal } from '../../utils';


export const Prueba_Usuarios: React.FC = () => {
  const navi = useNavigate()
  const [lst_usuarios, setlst_usuarios] = useState<any[]>([])
  const { usuarios, createUser, loading, updateUser, deleteUser } = use_usuarios()
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Form_Usuario | undefined>(undefined);
  const [secretaria_select, setSecretaria_select] = useState(0)
  const [lst_secretarias_with_reparticiones, setlst_secretarias_with_reparticiones] = useState<any[]>([])



  
  const { register, handleSubmit, watch, resetField, reset, setValue, formState: { errors } } = useForm({
    
  });

  useEffect(() => {
    Get_Lst_Secretarias_reparticiones()
    Get_Users()
  }, [])




  const handleFormSubmit = async (data: any) => {
    try {
      const {usuario, contrasena, nombre, id_reparticion, puede_ver_documentos} = data;
      const res = await service_usuario.create(usuario,contrasena,nombre,id_reparticion,puede_ver_documentos)
      Get_Users()
      ReactSwal.fire({icon:"success", text:"usuario creado con exito"})
    } catch (error) {
      console.log(error) 
    }
    reset();
  };

  
  const Get_Lst_Secretarias_reparticiones = async () => {
    const lst = await service_secretaria.getAllI_secretarias_with_reparticiones()
    setlst_secretarias_with_reparticiones(lst)
  }

  const Get_Users = async ()=>{
    try {
      const res = await service_usuario.getAll();
      setlst_usuarios(res)
    } catch (error) {
      console.log(error)
    }
  }
  

  const RenderReparticiones = ()=>{
    const secre = lst_secretarias_with_reparticiones.find((x) => x.secretaria.id_reparticion == secretaria_select)
    console.log({secre})
    if (secre) {
      console.log({reparticiones:secre.lst_reparticiones})
      return secre.lst_reparticiones.map((r:any)=>(
        <MenuItem key={r.reparticion.id_reparticion} value={r.reparticion.id_reparticion}> {r.reparticion.nombre}</MenuItem>
      ))
      
    }
  }


  const handleClose = () => {
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

  const Crear = (usuario: Form_Usuario) => {
    console.log(usuario)
    // createUser(usuario)
    setOpen(false)
  }
  const Edit = (usuario: Form_Usuario) => {
    // updateUser(usuario.id_usuario,usuario)
    setOpen(false)

  }
  // const Delete = (id:number)=>{

  // }

  // const Change_Create = async (params:type) => {

  // }
  // const Change_Update = async (params:type) => {

  // }
  // const Delte = async (params:type) => {

  // }
  // const Confirm_Delete = async (params:type) => {

  // }




  return (
    <div>
      <ScreenLoading is_visible={loading} />
      <Navbar />

      <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AiOutlinePlus size={50} onClick={() => { handleModalCreateUser() }} />
      </Fab>
      <TableContainer sx={{ maxWidth: ["100%", "90%"], mx: "auto", mt: 2 }}>
        <Table className='customTable' size='small'>
          <TableHead>
            <TableRow className='customTableRowHead'>
              <TableCell className='cell_head'>ID</TableCell>
              <TableCell className='cell_head'>Usuario</TableCell>
              <TableCell className='cell_head'>Nombre</TableCell>
              <TableCell className='cell_head'>Estado</TableCell>
              <TableCell className='cell_head'>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {validate_map(lst_usuarios).map((usuario) => (
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
                  <Button size='small' variant='contained'
                    onClick={()=>{navi("/designar_reparticiones_usuario",{state:{id_usuario:usuario.id_usuario,usuario:usuario}})}}
                  >
                    agregar reparticion
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {/* Mostrar el modal para crear/actualizar usuarios */}
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container" style={{ width: "90%" }}>
          {/* <Form_Usuarios  onSubmit={selectedUser == undefined ? Crear : Edit} defaultValues={selectedUser} /> */}
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>

                <FormControl fullWidth variant="outlined" size="small" required>
                  <InputLabel id="secretaria-label">Secretaria</InputLabel>
                  <Select
                    labelId="secretaria-label"
                    label="Secretaria"
                    onChange={(e) => {
                      setSecretaria_select(Number(e.target.value))
                    }}
                    value={secretaria_select}
                  >
                    {
                      lst_secretarias_with_reparticiones.map((item) => (
                        <MenuItem key={item.secretaria.id_reparticion} value={item.secretaria.id_reparticion}>{item.secretaria.nombre}</MenuItem>
                      ))
                    }

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined" size="small" required>
                  <InputLabel id="id_reparticion-label">Reparticion</InputLabel>
                  <Select
                    {...register("id_reparticion")}
                    labelId="id_reparticion-label"
                    label="Reparticion"

                  >
                    {
                      lst_secretarias_with_reparticiones.filter((x) => x.secretaria.id_reparticion == secretaria_select).map((item) => (
                        <MenuItem key={item.secretaria.id_reparticion} value={item.secretaria.id_reparticion}>{item.secretaria.nombre}</MenuItem>
                      ))
                    }

                    {
                      RenderReparticiones()
                    }

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  {...register('nombre', { required: true })}
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.nombre ? true : false}
                />
                {errors.nombre && (
                  <Typography variant="body2" color="error">
                    Este campo es requerido
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  {...register('usuario', { required: true })}
                  label="Usuario"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.usuario ? true : false}
                />
                {errors.usuario && (
                  <Typography variant="body2" color="error">
                    Este campo es requerido
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  {...register('contrasena', { required: true })}
                  label="Contraseña"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.usuario ? true : false}
                />
                {errors.contrasena && (
                  <Typography variant="body2" color="error">
                    Este campo es requerido
                  </Typography>
                )}
              </Grid>
              {/* {
                !defaultValues &&
                <Grid item xs={12} sm={6}>
                  <TextField
                    size='small'
                    {...register('contrasena', { required: true })}
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="dense"
                    error={errors.contrasena ? true : false}
                  />
                  {errors.contrasena && (
                    <Typography variant="body2" color="error">
                      Este campo es requerido
                    </Typography>
                  )}
                </Grid>
              } */}

            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </form>
        </div>
      </Modal>


    </div>
  );
};
