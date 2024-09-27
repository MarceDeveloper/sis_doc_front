import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { axios_ } from '../../../axios/_axios';
import { CheckBox } from '@mui/icons-material';

interface FormData {
    accion: string,
    id_tarea: number

}



export const useModal_Create_Accion_MAE = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const loadFormData = (id: number, formData: FormData) => {
        console.log("resert ", formData)
        reset(formData);
        openModal();
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data);
        const res = await axios_.post(`/api/accion_tarea_mae/crear`, { data: data })
        console.log(res)
        closeModal();
    };

    const ModalContent = () => (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Crear Accion para tarea MAE
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('accion', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    label="accion"
                                    error={!!errors.accion}
                                    helperText={errors.accion && errors.accion.message}
                                />
                            </Grid>
                          
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                            Crear Accion Mae
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );

    return {
        isOpen,
        openModal,
        closeModal,
        loadFormData,
        ModalContent,
    };
};

