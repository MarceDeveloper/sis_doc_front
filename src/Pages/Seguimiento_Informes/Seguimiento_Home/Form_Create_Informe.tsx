


import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Container, Paper, Grid, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import moment from 'moment-timezone';
import { axios_ } from '../../../axios/_axios';





type InformeFormData = {
    titulo: string;
    numero_informe: string;
    fecha_de_recepcion: string;
    informe_de_1: string
    informe_de_2: string
    informe_de_3: string

};

interface Iprops {
    onCreate: () => void
}

export const CrearInformeForm: React.FC<Iprops> = ({ onCreate }) => {
    const { control, handleSubmit, register, reset } = useForm<InformeFormData>();


    const onSubmit = async (data: InformeFormData) => {
        console.log(data);
        try {
            console.log(data)
            return
            const res = await axios_.post("/api/informes/crear", data)
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
                                label="Título del Informe"
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
                                {...register('numero_informe')}
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
                                {...register('fecha_de_recepcion')}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <InputLabel>Informe Emitido Por</InputLabel>
                            <Select
                                size='small'
                                required
                                fullWidth
                                variant="outlined"
                                {...register('informe_de_1')}
                            >
                                <MenuItem value="DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)">DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)</MenuItem>
                                <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E.)">CONTRALORIA GENERAL DEL ESTADO (C.G.E.)</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Informe de</InputLabel>
                            <Select
                                size='small'
                                required
                                fullWidth
                                variant="outlined"
                                {...register('informe_de_2')}
                            >
                                <MenuItem value="AUDITORIA">AUDITORIA</MenuItem>
                                <MenuItem value="SEGUIMIENTO">SEGUIMIENTO</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Informe de Auditoria</InputLabel>
                            <Select
                                size='small'
                                required
                                fullWidth
                                variant="outlined"
                                {...register('informe_de_3')}
                            >
                                <MenuItem value="DE CONFIABILIDAD">DE CONFIABILIDAD</MenuItem>
                                <MenuItem value="OPERACIONAL">OPERACIONAL</MenuItem>
                                <MenuItem value="DE CUMPLIMIENTO">DE CUMPLIMIENTO</MenuItem>
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

