// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Modal, Button, TextField, Grid, Paper, Typography } from '@mui/material';
// import { axios_ } from '../../../axios/_axios';
// import { CheckBox } from '@mui/icons-material';

// interface FormData {
//     titulo: string;
//     texto: string;
//     aceptacion: boolean;
//     justificacion_no_aceptacion: string;
    
//     estado: string;
//     estado_descripcion: string;
//     id_recomendacion: number;


// }



// export const useModal_Create_Descripcion = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     const loadFormData = (id: number, formData: FormData) => {
//         console.log("resert ", formData)
//         reset(formData);
//         openModal();
//     };

//     const onSubmit: SubmitHandler<FormData> = async (data) => {
//         console.log(data);
//         const res = await axios_.post(`/api/descripcion_recomendacion/crear`, { data: data })
//         console.log(res)
//         closeModal();
//     };

//     const ModalContent = () => (
//         <Grid container justifyContent="center">
//             <Grid item xs={12}>
//                 <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
//                     <Typography variant="h5" gutterBottom>
//                         Crear Descripcion
//                     </Typography>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <Grid container spacing={3}>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('titulo', { required: 'Este campo es requerido' })}
//                                     fullWidth
//                                     label="Título"
//                                     error={!!errors.titulo}
//                                     helperText={errors.titulo && errors.titulo.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('texto', { required: 'Este campo es requerido' })}
//                                     fullWidth
//                                     label="Texto"
//                                     error={!!errors.texto}
//                                     helperText={errors.texto && errors.texto.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     type='checkbox'
//                                     {...register('aceptacion', { required: 'Este campo es requerido' })}
//                                     fullWidth
//                                     variant='standard'
//                                     label="aceptacion"
//                                     error={!!errors.aceptacion}
//                                     helperText={errors.aceptacion && errors.aceptacion.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('justificacion_no_aceptacion', { required: 'Este campo es requerido' })}
//                                     fullWidth
//                                     label="justificacion_no_aceptacion"
//                                     error={!!errors.justificacion_no_aceptacion}
//                                     helperText={errors.justificacion_no_aceptacion && errors.justificacion_no_aceptacion.message}
//                                 />
//                             </Grid>
                            
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('estado', { required: 'Este campo es requerido' })}
//                                     fullWidth
//                                     label="estado"
//                                     error={!!errors.estado}
//                                     helperText={errors.estado && errors.estado.message}
//                                 />
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <TextField
//                                     {...register('estado_descripcion', { required: 'Este campo es requerido' })}
//                                     fullWidth
//                                     label="estado_descripcion"
//                                     error={!!errors.estado_descripcion}
//                                     helperText={errors.estado_descripcion && errors.estado_descripcion.message}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
//                             Crear Descripcion
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
import { Modal, Button, TextField, Grid, Paper, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { axios_ } from '../../../axios/_axios';

interface FormData {
    titulo: string;
    texto: string;
    aceptacion: boolean;
    justificacion_no_aceptacion?: string;
    estado: string;
    estado_descripcion: string;
    id_recomendacion: number;
}

export const useModal_Create_Descripcion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            aceptacion: false,
        }
    });

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const loadFormData = (id: number, formData: FormData) => {
        reset(formData);
        openModal();
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const res = await axios_.post(`/api/descripcion_recomendacion/crear`, { data });
        console.log(res);
        closeModal();
    };

    const aceptacionValue = watch('aceptacion', false);

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
                                    {...register('titulo', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    label="Título"
                                    error={!!errors.titulo}
                                    helperText={errors.titulo && errors.titulo.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('texto', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    label="Texto"
                                    error={!!errors.texto}
                                    helperText={errors.texto && errors.texto.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            {...register('aceptacion')}
                                            checked={aceptacionValue}
                                            color="primary"
                                        />
                                    }
                                    label="Aceptación"
                                />
                            </Grid>
                            {!aceptacionValue && (
                                <Grid item xs={6}>
                                    <TextField
                                        {...register('justificacion_no_aceptacion', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Justificación No Aceptación"
                                        error={!!errors.justificacion_no_aceptacion}
                                        helperText={errors.justificacion_no_aceptacion && errors.justificacion_no_aceptacion.message}
                                    />
                                </Grid>
                            )}
                            {/* <Grid item xs={6}>
                                <TextField
                                    {...register('estado', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    label="Estado"
                                    error={!!errors.estado}
                                    helperText={errors.estado && errors.estado.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    {...register('estado_descripcion', { required: 'Este campo es requerido' })}
                                    fullWidth
                                    label="Estado Descripción"
                                    error={!!errors.estado_descripcion}
                                    helperText={errors.estado_descripcion && errors.estado_descripcion.message}
                                />
                            </Grid> */}
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



