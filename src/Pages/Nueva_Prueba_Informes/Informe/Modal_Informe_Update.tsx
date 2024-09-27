import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Button, TextField, Grid, Paper, Typography, Select, MenuItem } from '@mui/material';
import { useModal_Crear_Informe } from './Modal_Informe_Create';
import { axios_ } from '../../../axios/_axios';

interface InformeFormData {
    titulo: string;
    numero_informe: string;
    fecha_de_recepcion: string;
    informe_de_1: string;
    informe_de_2: string;
    informe_de_3: string;
}

interface Iprops {
    onCloce?: () => void
    onSubmit_Modal?: () => void
}

export const useModal_Update_Informe = ({ onCloce, onSubmit_Modal }: Iprops) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, set_id] = useState(0)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<InformeFormData>();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        onCloce && onCloce()
    };

    const loadInformeData = (id: number, formData: InformeFormData) => {
        console.log("resert ", formData)
        set_id(id)
        reset(formData);
        openModal();
    };

    const onSubmit: SubmitHandler<InformeFormData> = async (data) => {
        if (typeof data.fecha_de_recepcion == "string") {
            data.fecha_de_recepcion = new Date(data.fecha_de_recepcion) as any
        }
        console.log(data);
        closeModal();
        set_id(0)
        onSubmit_Modal && onSubmit_Modal()
        //llamar api enviar id para actualizar
        const res = await axios_.put(`/api/informes/update/${id}`, { data: data })
        console.log(res)
    };

    const ModalContent = () => (
        <Grid container justifyContent="center">

            <Grid item xs={12} >
                <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Actualizar Informe
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('titulo')}
                                    fullWidth
                                    label="Título"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('numero_informe')}
                                    fullWidth
                                    label="Número de Informe"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('fecha_de_recepcion')}
                                    fullWidth
                                    type="date"
                                    label="Fecha de Recepción"
                                />
                            </Grid>
                            <Grid item xs={6}>

                                <Select
                                    {...register('informe_de_1', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    value={watch("informe_de_1")}
                                    label="Informe de"
                                    error={!!errors.informe_de_1}
                                >
                                    <MenuItem value="DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)">DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)</MenuItem>
                                    <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E.)">CONTRALORIA GENERAL DEL ESTADO (C.G.E.)</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                {/* <TextField
                                    {...register('informe_de_2')}
                                    fullWidth
                                    label="Informe 2"
                                /> */}
                                <Select
                                    {...register('informe_de_2', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    value={watch("informe_de_2")}
                                    label="Informe de"
                                    error={!!errors.informe_de_2}
                                >
                                    <MenuItem value="AUDITORIA">AUDITORIA</MenuItem>
                                    <MenuItem value="SEGUIMIENTO">SEGUIMIENTO</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                {/* <TextField
                                    {...register('informe_de_3')}
                                    fullWidth
                                    label="Informe 3"
                                /> */}
                                <Select
                                    {...register('informe_de_3', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    value={watch("informe_de_3")}
                                    label="Informe de"
                                    error={!!errors.informe_de_3}
                                >
                                    <MenuItem value="DE CONFIABILIDAD">DE CONFIABILIDAD</MenuItem>
                                    <MenuItem value="OPERACIONAL">OPERACIONAL</MenuItem>
                                    <MenuItem value="DE CUMPLIMIENTO">DE CUMPLIMIENTO</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                            Actualizar Informe
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
        loadInformeData,
        ModalContent,
    };
};

