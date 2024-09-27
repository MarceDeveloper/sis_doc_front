// MagnitudPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingOverlay, My_Modal } from '../../components';
import { FormContainer, Checkbox, CheckboxContainer, InputField, Label, SelectField, SubmitButton, ErrorMessage, WrapperInput } from '../../styled_components/styled_form';
// import { use_Page_Unidad_Store } from './use_Page_nota_recepcion_Store';
import { FabButton } from '../../styled_components/styled_buttons';
import { Add, Delete, Edit } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form'
// import { service_insumo, service_nota_recepcion } from '../../API';

import { Error_Sawall } from '../../utils/Error_Swall_Axios';
import { Box, Button, Fab, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import { TableStyle, TableStyleComun, Td, Th, Wrapper_Table } from '../../styled_components/styled_table';
import { Heading1, Heading2 } from '../../styled_components/styled_text';
import { ReactSwal } from '../../utils';
import { Axios_Error_Api } from '../../utils/Type_Axios_Error';
import { Navbar } from '../../components/Navbar/Navbar';
import { use_Page_Secretari_Store } from './use_Page_Secretaria_Store';
import { useShallow } from 'zustand/react/shallow'
import { service_reparticion } from '../../api/service_reparticion';
import { service_secretaria } from '../../api/service_secretaria';
import { AiOutlinePlus } from 'react-icons/ai';
import { AxiosError } from 'axios';






export const Page_Secretaria = () => {
  const page_Store = use_Page_Secretari_Store(useShallow((store) => store))

  // console.log(page_store)

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()


  useEffect(() => {

    const onInit_Page = async () => {
      try {
        const [reparticiones, reparticiones_with_secretarias, secretarias_with_reparticiones] = await Promise.all([
          service_reparticion.getAllI(),
          service_reparticion.getAllI_reparticiones_with_secretaria(),
          service_secretaria.getAllI_secretarias_with_reparticiones(),
        ])
        const lst_temp: any[] = reparticiones_with_secretarias
        const repar = lst_temp.find((x) => x.reparticion.nombre == "INSTITUTO DE IDIOMAS - SEDE BERMEJO")
        console.log({ repar })
        console.log(reparticiones_with_secretarias)
        page_Store.reparticiones.set_lst(reparticiones_with_secretarias)
        page_Store.lst_secretarias_with_reparticiones.set_lst(secretarias_with_reparticiones)
        console.log(secretarias_with_reparticiones)
      } catch (error) {
        console.log(error)
      }
    }
    onInit_Page()
  }, [])





  const List_page = async () => {
    const lst = await service_secretaria.getAllI_secretarias_with_reparticiones()
    page_Store.lst_secretarias_with_reparticiones.set_lst(lst)
  }

  const handleFormSubmit = async (data: any) => {
    const { nombre, id_unidad_padre, id_reparticion } = data
    if (id_reparticion) {
     
      await Update_Secretaria(id_reparticion,nombre)
    } else {
      await Crear_secretaria(nombre)
    }

    reset();
  };
  const Crear_secretaria = async ( nombre:string) => {
    page_Store.loading.start_loading()
    try {
      await service_reparticion.create(158, nombre)
      await List_page()
      page_Store.loading.stop_loading()
      page_Store.modal.cloce_modal()
      ReactSwal.fire({ title: "accion realizada con exito", icon: "success" })

    } catch (error) {
      page_Store.loading.stop_loading()
      Error_Sawall(error as any)
      console.log(error)
    }
  }
  const Update_Secretaria = async (id_reparticion:number, nombre:string) => {
    page_Store.loading.start_loading()
    try {
      await service_reparticion.update( id_reparticion,158, nombre)
      List_page()
      page_Store.loading.stop_loading()
      page_Store.modal.cloce_modal()
      ReactSwal.fire({ title: "accion realizada con exito", icon: "success" })

    } catch (error) {
      page_Store.loading.stop_loading()
      Error_Sawall(error as any)
      console.log(error)
    }
  }

  const Delete_secretaria = async (id: number) => {
    page_Store.loading.start_loading()
    try {
      await service_reparticion.delete(id)
      await List_page()
      page_Store.loading.stop_loading()
      ReactSwal.fire({ title: "Accion realizada con exito", icon: "success" })
    } catch (error) {
      console.log(error)
      page_Store.loading.stop_loading()
      Error_Sawall(error as any)
    }
  }

  const Change_Item_Update = async (reparticion: any, secretaria: any) => {
    page_Store.reparticiones.set_update_reparticion(reparticion)
    const { nombre, id_reparticion, id_unidad_padre } = reparticion

    reset({
      nombre,
      id_reparticion,
      id_unidad_padre: 158
    })

    page_Store.modal.open_modal()
  }
  const Change_Create = async () => {
    page_Store.reparticiones.set_update_reparticion(null)
    reset({id_unidad_padre: 158})
    reset({id_unidad_padre: 158})
    page_Store.modal.open_modal()
  }

  const Confirmar_eliminar = async(id_reparticion:number)=>{
    const confirmarEliminacion = async () => {
      try {
        const confirmacion = await ReactSwal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Una vez eliminado, no podrás recuperar este elemento',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, eliminarlo',
          cancelButtonText: 'Cancelar',
        });
    
        if (confirmacion.isConfirmed) {
          Delete_secretaria(id_reparticion)
        }
      } catch (error) {
        console.error('Error al mostrar modal de confirmación:', error);
      }
    };
    
    // Llamas a esta función cuando desees mostrar el modal de confirmación
    confirmarEliminacion();
  }


  return (
    <>
      <Navbar />

      <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AiOutlinePlus size={50} onClick={() => { Change_Create() }} />
      </Fab>



      <Title_Page >Secretarias  </Title_Page>
      <My_Modal cloce_modal={page_Store.modal.cloce_modal} is_open={page_Store.modal.is_visible}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
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

            {/* <Grid item xs={12} sm={12}>
          
              <select id="miSelect" {...register('id_unidad_padre', { required: true })}>
                {
                  page_Store.lst_secretarias_with_reparticiones.lst?.map((item, index) => {
                    const { secretaria, lst_reparticiones } = item
                    return <option value={secretaria.id_unidad}>{secretaria.nombre}</option>
                  })
                }

              </select>
            </Grid> */}

          </Grid>
          <Button sx={{ mt: 2 }} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </form>
      </My_Modal>



      <Wrapper_Content_Table>
        <TableStyleComun>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>

            </tr>
          </thead>
          <tbody>
            {page_Store.lst_secretarias_with_reparticiones.lst.map((item, index) => (
              <tr key={item.secretaria.id_reparticion}>
                <td> {index + 1}</td>
                <td>{item.secretaria.nombre}</td>
                <td style={{ display: "flex" }}>
                  <div onClick={() => { Change_Item_Update(item.secretaria, item.secretaria) }}>
                    <Edit />
                  </div>
                  <div onClick={() => { Confirmar_eliminar(item.secretaria.id_reparticion) }}>
                    <Delete />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </TableStyleComun>

      </Wrapper_Content_Table>




    </>
  );
};


const Title_Page = styled(Heading1)`
              margin-top: 20px;
              text-align: center;
              `

const Wrapper_Content_Table = styled.div`
              padding: 0 16px;
              position: relative;
              `
