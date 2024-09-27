


import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Container, Paper, Grid, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import moment from 'moment-timezone';
import { axios_ } from '../../../axios/_axios';





type InformeFormData = {
    titulo: string;
    texto: string;
    aceptacion: boolean;
    justificacion_no_aceptacion: string
    plazo_de_implementacion: Date | string
    estado_descripcion: string
    id_informe : number
};

interface Iprops {
    onCreate: () => void
}

export const Adm_Descripcion: React.FC<Iprops> = ({ onCreate }) => {
    const { control, handleSubmit, register, reset } = useForm<InformeFormData>();


    const onSubmit = async (data: InformeFormData) => {
        console.log(data);
        try {
            const res = await axios_.post("/api/descripcion_recomendacion/crear_descripcion", data)
            console.log(res)
            onCreate()
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Container maxWidth="xl">
            <Paper elevation={3} style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                required
                                label="Título descripcion"
                                fullWidth
                                variant="outlined"
                                {...register('titulo')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                required
                                label="Número de Informe"
                                fullWidth
                                variant="outlined"
                                {...register('texto')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                required
                                label="Fecha de Recepción"
                                type="date"
                                fullWidth
                                variant="outlined"
                                defaultValue={moment(new Date()).utc().format("YYYY-MM-DD")}
                                {...register('plazo_de_implementacion')}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <InputLabel>Informe Emitido Por</InputLabel>
                            <Select
                                size='small'
                                required
                                fullWidth
                                variant="outlined"
                                {...register('justificacion_no_aceptacion')}
                            >
                                <MenuItem value="DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)">DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)</MenuItem>
                                <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E.)">CONTRALORIA GENERAL DEL ESTADO (C.G.E.)</MenuItem>
                            </Select>
                        </Grid>
                      
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">
                                Crear Informe
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

