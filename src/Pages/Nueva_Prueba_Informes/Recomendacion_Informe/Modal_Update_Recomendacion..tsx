// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Modal, Button, TextField, Grid, Paper, Typography } from '@mui/material';
// import { axios_ } from '../../../axios/_axios';

// interface FormData {
//     titulo: string;
//     numero_de_recomendacion: string;
//     estado_recomendacion: string;
//     antecedentes: string;
//     comentario: string;
//     id_informe: number;
//     plazo_de_implementacion: string;
// }



// export const useModal_Recomendacion_Update = () => {
//     const [id, setid] = useState(0)
//     const [isOpen, setIsOpen] = useState(false);
//     const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     const loadFormData = (id: number, formData: FormData) => {
//         setid(id)
//         console.log("resert ", formData)
//         reset(formData);
//         openModal();
//     };

//     const onSubmit: SubmitHandler<FormData> = async (data) => {
//         console.log(data);
//         closeModal();
//         const res = await axios_.put(`/api/recomendacion/update/${id}`,{data:data})
//         console.log(res)
//         setid(0)

//     };

//     const ModalContent = () => (
//         <Grid container justifyContent="center">
//             <Grid item xs={12}>
//                 <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
//                     <Typography variant="h5" gutterBottom>
//                         Actualizar Recomendacion
//                     </Typography>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <Grid container spacing={3}>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('titulo')}
//                                     fullWidth
//                                     label="Título"
//                                     error={!!errors.titulo}
//                                     helperText={errors.titulo && errors.titulo.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('antecedentes')}
//                                     fullWidth
//                                     label="antecedentes"
//                                     error={!!errors.antecedentes}
//                                     helperText={errors.antecedentes && errors.antecedentes.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('comentario')}
//                                     fullWidth
//                                     label="comentario"
//                                     error={!!errors.comentario}
//                                     helperText={errors.comentario && errors.comentario.message}
                                    
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('estado_recomendacion')}
//                                     fullWidth
//                                     label="estado_recomendacion 1"
//                                     error={!!errors.estado_recomendacion}
//                                     helperText={errors.estado_recomendacion && errors.estado_recomendacion.message}
                                    
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('plazo_de_implementacion', { required: 'Este campo es requerido' ,valueAsDate:true})}
//                                     fullWidth
//                                     type='date'
//                                     label="plazo_de_implementacion"
//                                     error={!!errors.plazo_de_implementacion}
//                                     helperText={errors.plazo_de_implementacion && errors.plazo_de_implementacion.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('numero_de_recomendacion')}
//                                     fullWidth
//                                     label="numero_de_recomendacion"
//                                     error={!!errors.numero_de_recomendacion}
//                                     helperText={errors.numero_de_recomendacion && errors.numero_de_recomendacion.message}
                                    
//                                 />
//                             </Grid>
                          
//                         </Grid>
//                         <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
//                             Crear Recomendacion
//                         </Button>
//                     </form>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );

//     return {
//         isOpen,
//         openModal,
//         closeModal,
//         loadFormData,
//         ModalContent,
//     };
// };





import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Button, TextField, Grid, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { axios_ } from '../../../axios/_axios';

interface FormData {
    titulo: string;
    numero_de_recomendacion: string;
    estado_recomendacion: string;
    antecedentes: string;
    comentario: string;
    id_informe: number;
    plazo_de_implementacion: string;
}

export const useModal_Recomendacion_Update = () => {
    const [id, setId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const loadFormData = (id: number, formData: FormData) => {
        setId(id);
        console.log("resert ", formData);
        reset(formData);
        openModal();
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data);
        closeModal();
        const res = await axios_.put(`/api/recomendacion/update/${id}`, { data: data });
        console.log(res);
        setId(0);
    };

    const ModalContent = () => (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Actualizar Recomendacion
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('titulo')}
                                    fullWidth
                                    label="Título"
                                    error={!!errors.titulo}
                                    helperText={errors.titulo && errors.titulo.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('antecedentes')}
                                    fullWidth
                                    label="Antecedentes"
                                    error={!!errors.antecedentes}
                                    helperText={errors.antecedentes && errors.antecedentes.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('comentario')}
                                    fullWidth
                                    label="Comentario"
                                    error={!!errors.comentario}
                                    helperText={errors.comentario && errors.comentario.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="estado_recomendacion-label">Estado Recomendación</InputLabel>
                                    <Select
                                        labelId="estado_recomendacion-label"
                                        {...register('estado_recomendacion', { required: 'Este campo es requerido' })}
                                        label="Estado Recomendación"
                                        error={!!errors.estado_recomendacion}
                                    >
                                        <MenuItem value="PENDIENTE">PENDIENTE</MenuItem>
                                        <MenuItem value="PROCESO">PROCESO</MenuItem>
                                        <MenuItem value="DESCARGADA">DESCARGADA</MenuItem>
                                        <MenuItem value="LEVANTADA">LEVANTADA</MenuItem>
                                    </Select>
                                    {errors.estado_recomendacion && <Typography color="error">{errors.estado_recomendacion.message}</Typography>}
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('plazo_de_implementacion', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    label="Plazo de Implementación"
                                    error={!!errors.plazo_de_implementacion}
                                    helperText={errors.plazo_de_implementacion && errors.plazo_de_implementacion.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('numero_de_recomendacion')}
                                    fullWidth
                                    label="Número de Recomendación"
                                    error={!!errors.numero_de_recomendacion}
                                    helperText={errors.numero_de_recomendacion && errors.numero_de_recomendacion.message}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
                            Actualizar Recomendacion
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
