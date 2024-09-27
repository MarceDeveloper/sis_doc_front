import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReactSwal } from '../../utils/ReactSwall/ReactSwall';
import { Button, TextField, Typography, Container, Grid, Paper } from '@mui/material'
import { axios_ } from '../../axios/_axios';

interface InformeFormData_Create {
    titulo: string;
    numero_informe: string;
    fecha_de_recepcion: string;
    informe_de_1: string;
    informe_de_2: string;
    informe_de_3: string;
}





export const use_Informe_Create = () => {
    const { handleSubmit, trigger, getValues, register, formState: { errors } } = useForm<InformeFormData_Create>();
    const [data_for_create, setData_for_create] = useState<InformeFormData_Create | null>(null)


    const onSubmit: SubmitHandler<InformeFormData_Create> = (data) => {
        console.log(data);
        setData_for_create(data)
    };

    const Create = async () => {
        let formData = getValues()
        let result : any 
        

        await ReactSwal.fire({
            html: (
                <Container component="main" maxWidth="md">
                    <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                        <Typography variant="h5" gutterBottom>
                            Crear Informe 
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        {...register('titulo', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Título"
                                        error={!!errors.titulo}
                                        helperText={errors.titulo && errors.titulo.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('numero_informe', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Número de Informe"
                                        error={!!errors.numero_informe}
                                        helperText={errors.numero_informe && errors.numero_informe.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('fecha_de_recepcion', { required: 'Este campo es requerido' , valueAsDate:true })}
                                        fullWidth
                                        type="date"
                                        label="Fecha de Recepción"
                                        error={!!errors.fecha_de_recepcion}
                                        helperText={errors.fecha_de_recepcion && errors.fecha_de_recepcion.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('informe_de_1', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Informe 1"
                                        error={!!errors.informe_de_1}
                                        helperText={errors.informe_de_1 && errors.informe_de_1.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('informe_de_2', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Informe 2"
                                        error={!!errors.informe_de_2}
                                        helperText={errors.informe_de_2 && errors.informe_de_2.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('informe_de_3', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Informe 3"
                                        error={!!errors.informe_de_3}
                                        helperText={errors.informe_de_3 && errors.informe_de_3.message}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}
                                onClick={async () => {
                                    const isValid = await trigger()
                                    if (!isValid) {
                                        return
                                    }
                                    formData = getValues()
                                    try {
                                        const res = await axios_.post("api/informes/crear",{data:formData})
                                        result = res.data?.data
                                    } catch (error) {
                                        console.log(error)
                                        result = null
                                    }
                                    
                                }}
                            >
                                Crear Informe
                            </Button>
                        </form>
                    </Paper>
                </Container>
              
            )
        })


    }
    return {
        Create
    }

}
