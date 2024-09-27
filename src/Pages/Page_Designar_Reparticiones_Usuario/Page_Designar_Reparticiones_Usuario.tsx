


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
import { useShallow } from 'zustand/react/shallow'
import { service_reparticion } from '../../api/service_reparticion';
import { service_secretaria } from '../../api/service_secretaria';
import { AiOutlinePlus } from 'react-icons/ai';
import { AxiosError } from 'axios';
import { Navbar } from '../../components/Navbar/Navbar';
import { use_Page_Designar_Reparticion_Usuario_Sotore } from './use_Page_Designar_Reparticiones_Usuario_Store';
import { useNavigate, useLocation } from 'react-router-dom';
import { service_usuario } from '../../api/service_usuario';






export const Page_Designar_Reparticiones_Usuario = () => {
    const [lst_usuarios_with_reparticiones, setLst_usuarios_with_reparticiones] = useState<any[]>([])
    const [Secretaria_select, setSecretaria_select] = useState<any>()
    const page_Store = use_Page_Designar_Reparticion_Usuario_Sotore(useShallow((store) => store))

    // console.log(page_store)

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const state_location = useLocation().state


    useEffect(() => {
        OnInit()

    }, [])


    const OnInit = async () => {
        if (state_location.id_usuario) {
            const lst_secre: any[] = await service_secretaria.getAllI_secretarias_with_reparticiones()
            console.log({ lst_secre })
            page_Store.secretarias_with_reparticiones.set_lst(lst_secre)
            await Listar()
        }
    }

    const Listar = async ()=>{
        try {
            const Lista = await service_usuario.get_user_with_reparticiones(state_location?.id_usuario)
            console.log({Lista})
            setLst_usuarios_with_reparticiones(Lista)
        } catch (error) {
            console.log(error)
            Error_Sawall(error as Axios_Error_Api)
        }
    }

    const handleFormSubmit = async (data: any) => {
        console.log(data)
        try {
            const res = await service_usuario.designar_reparticion_usuario(state_location.id_usuario,data?.id_reparticion)
            await Listar()
            page_Store.modal.cloce_modal()
            reset();
        } catch (error) {
            Error_Sawall(error as Axios_Error_Api)
            console.log("a ocurrido un error")
        }
    };





    // const Change_Item_Update = async (id_usuario: any, is_reparticion: any) => {
    //     page_Store.reparticiones.set_update_reparticion(reparticion)
    //     const { nombre, id_reparticion, id_unidad_padre } = reparticion

    //     reset({
    //       nombre,
    //       id_reparticion,
    //       id_unidad_padre: secretaria.id_unidad
    //     })

    //     page_Store.modal.open_modal()
    // }


    const Confirmar_eliminar_reparticion_usuario = async (id_reparticion_usuario: number) => {
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
              try {
                const res = await service_usuario.quitar_reparticion_usuario(id_reparticion_usuario)
                await Listar()
              } catch (error) {
                
              }
            }
          } catch (error) {
            console.error('Error al mostrar modal de confirmación:', error);
          }
        };

        confirmarEliminacion();
    }


    if (!state_location?.id_usuario) {
        return <h1>error</h1>
    }

    return (
        <>
            <Navbar />
            
            <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16 }}>
                <AiOutlinePlus size={50} onClick={() => {
                    page_Store.modal.open_modal()
                }} />
            </Fab>


            <Title_Page > Reparticiones Del Usuario {state_location?.usuario?.nombre}  </Title_Page>
            <My_Modal cloce_modal={page_Store.modal.cloce_modal} is_open={page_Store.modal.is_visible}>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>

                            <FormControl fullWidth variant="outlined" size="small" required>
                                <InputLabel id="secretaria-label">Secretaria</InputLabel>
                                <Select
                                    labelId="secretaria-label"
                                    label="Secretaria"
                                    onChange={(e: any) => {
                                        setSecretaria_select(page_Store.secretarias_with_reparticiones.lst.find((x) => x.secretaria.id_reparticion == Number(e.target.value)))
                                        // setSecretaria_select(Number(e.target.value))
                                    }}
                                    // value={Secretaria_select}
                                >
                                    {
                                        page_Store.secretarias_with_reparticiones.lst.map((item) => (
                                            <MenuItem key={item.secretaria.id_reparticion} value={item.secretaria.id_reparticion}>{item.secretaria.nombre}</MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <FormControl fullWidth variant="outlined" size="small" required>
                                <InputLabel id="secretaria-label">Reparticion</InputLabel>
                                <Select
                                    labelId="secretaria-label"
                                    label="Secretaria"
                                    {...register("id_reparticion")}
                                   
                                >
                                    {
                                        Secretaria_select && Secretaria_select.lst_reparticiones?.map((item:any) => (
                                            <MenuItem key={item.reparticion.id_reparticion} value={item.reparticion.id_reparticion}>{item.reparticion.nombre}</MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>
                        </Grid>


                     
                        <Grid item xs={12} sm={12}>
                            {/* <FormControl fullWidth variant="outlined" size="small" required>
                <InputLabel id="secretaria-label">Secretaria</InputLabel>
                <Select
                  {...register('id_unidad_padre', { required: true })}
                  labelId="secretaria-label"
                  label="Secretaria"
                >
                  {
                    page_Store.lst_secretarias_with_reparticiones.lst?.map((item, index) => {
                      const { secretaria, lst_reparticiones } = item
                      return <MenuItem key={secretaria.id_reparticion} value={secretaria.id_unidad}>{secretaria.id_unidad} {secretaria.nombre} </MenuItem>
                    })
                  }
                </Select>
              </FormControl> */}
                          
                        </Grid>

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
                            <th>Reparticion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lst_usuarios_with_reparticiones.map((item, index) => (
                            <tr key={item.reparticion.id}>
                                <td> {index + 1}</td>
                                <td>{item.reparticion.nombre}</td>
                                <td style={{ display: "flex" }}>
                                   
                                    <div onClick={() => { Confirmar_eliminar_reparticion_usuario(item.id) }}>
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
