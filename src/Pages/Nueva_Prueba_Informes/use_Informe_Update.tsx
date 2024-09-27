import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReactSwal } from '../../utils/ReactSwall/ReactSwall';
import { Button, TextField, Typography, Container, Grid, Paper } from '@mui/material'
import { axios_ } from '../../axios/_axios';

interface InformeFormData_Update {
    titulo: string;
}





export const use_Informe_Update = () => {
    const { handleSubmit, reset,trigger, getValues, register, formState: { errors } } = useForm<InformeFormData_Update>();
    const [data_for_create, setData_for_create] = useState<InformeFormData_Update | null>(null)
    

    const onSubmit: SubmitHandler<InformeFormData_Update> = (data) => {
        console.log(data);
        setData_for_create(data)
    };

    const Update = async (id:number,data:InformeFormData_Update) => {
        let formData = getValues()
        let result : any 
        reset(data)
        

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
                             
                            </Grid>
                            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}
                                onClick={async () => {
                                    const isValid = await trigger()
                                    if (!isValid) {
                                        return
                                    }
                                    formData = getValues()
                                    try {
                                        const res = await axios_.post(`api/informes/update/${id}`,{data:formData})
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
        Update
    }

}
