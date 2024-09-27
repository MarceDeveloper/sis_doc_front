import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Button, TextField, Grid, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, IconButton } from '@mui/material';
import { axios_ } from '../../../axios/_axios';
import { CheckBox } from '@mui/icons-material';
import { FaTasks } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';

interface FormData {
    id_tarea: number,
    id_responsable: number

}



export const useModal_Create_Responsable_Tarea = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [responsables, set_responsables] = useState<any[]>([]);
    const [id_tarea, set_id_tarea] = useState(0)


    const openModal = (id_tarea: number) => {
        reset({ id_tarea: id_tarea })
        set_id_tarea(id_tarea)
        get_responsables_habilitados_para_tarea(id_tarea)
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const get_responsables_habilitados_para_tarea = async (id_tarea: number) => {
        try {
            const res = await axios_.get(`/api/responsables/habiilitado_para_tarea/by_tarea/${id_tarea}/lista`)
            set_responsables(res.data?.data)
            console.log(res.data.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    const vincular_responsable_a_tarea = async (id_responsable: number,) => {
        if (id_tarea != 0) {
            const res = await axios_.post(`/api/tarea_responsable/crear`, { data: { id_responsable: id_responsable, id_tarea: id_tarea } })
            console.log(res)
            get_responsables_habilitados_para_tarea(id_tarea)
        }
    }
   



    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data);
        const res = await axios_.post(`/api/tarea_responsable/crear`, { data: data })
        console.log(res)
        closeModal();
    };

    const ModalContent = () => (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Vincular Responsable a tarea {id_tarea}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID responsable</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Cargo</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {responsables.map((responsable) => (
                                    <TableRow key={responsable.id}>
                                        <TableCell>{responsable.id}</TableCell>
                                        <TableCell>{responsable.nombre}</TableCell>
                                        <TableCell>{responsable.cargo}</TableCell>
                                        <TableCell>
                                            <Tooltip title="Vincular" arrow placement='top-start'>
                                                <IconButton onClick={() => { vincular_responsable_a_tarea(responsable.id) }}>
                                                    <FaTasks />
                                                </IconButton>
                                            </Tooltip>
                                            

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('texto', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    label="texto"
                                    error={!!errors.texto}
                                    helperText={errors.texto && errors.texto.message}
                                />
                            </Grid>
                          
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                            Crear Descripcion
                        </Button>
                    </form> */}
                </Paper>
            </Grid>
        </Grid>
    );

    return {
        isOpen,
        openModal,
        closeModal,

        ModalContent,
    };
};

