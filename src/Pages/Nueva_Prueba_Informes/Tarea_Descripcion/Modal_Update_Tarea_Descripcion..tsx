import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { axios_ } from '../../../axios/_axios';

interface FormData {
    texto: string;
    

}



export const useModal_Update_Tarea_Descripcion = () => {
    const [id, setid] = useState(0)
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const loadFormData = (id: number, formData: FormData) => {
        setid(id)
        console.log("resert ", formData)
        reset(formData);
        openModal();
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data);
        closeModal();
        const res = await axios_.put(`/api/tarea_descripcion/update/${id}`, { data: data })
        console.log(res)
        setid(0)

    };

    const ModalContent = () => (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Crear Descripcion
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

