import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal, Button, TextField, Grid, Paper, Typography, Select, MenuItem } from '@mui/material';
import { axios_ } from '../../../axios/_axios';

interface FormData {
  titulo: string;
  numero_informe: string;
  fecha_de_recepcion: string;
  informe_de_1: string;
  informe_de_2: string;
  informe_de_3: string;
}



export const useModal_Crear_Informe = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { register, handleSubmit, reset } = useForm<InformeFormData>();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const loadInformeData = (id: number, formData: InformeFormData) => {
  //   console.log("resert ", formData)
  //   reset(formData);
  //   openModal();
  // };

  const loadInformeData = (id: number, formData: FormData) => {
    console.log("resert ", formData)
    reset(formData);
    openModal();
};
  // const onSubmit: SubmitHandler<InformeFormData> = async (data) => {
  //   console.log(data);
  //   const res = await axios_.post("/api/informes/crear", { data: data })
  //   closeModal();
  // };
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    const res = await axios_.post("/api/informes/crear", { data: data })
    console.log(res)
    closeModal();
};

  const ModalContent = () => (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h5" gutterBottom>
            Crear Informe
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
                  {...register('numero_informe', { required: 'Este campo es requerido' })}
                  fullWidth
                  label="Número de Informe"
                  error={!!errors.numero_informe}
                  helperText={errors.numero_informe && errors.numero_informe.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register('fecha_de_recepcion', { required: 'Este campo es requerido', valueAsDate:true })}
                  fullWidth
                  type="date"
                  label="Fecha de Recepción"
                  error={!!errors.fecha_de_recepcion}
                  helperText={errors.fecha_de_recepcion && errors.fecha_de_recepcion.message}
                />
              </Grid>
              <Grid item xs={6}>
                <Select
                  {...register('informe_de_1', { required: 'Este campo es requerido' })}
                  fullWidth
                  label="Informe de"
                  error={!!errors.informe_de_1}
                  // helperText={errors.informe_de_1 && errors.informe_de_1.message}
                >
                  <MenuItem value="DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)">DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)</MenuItem>
                  <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E.)">CONTRALORIA GENERAL DEL ESTADO (C.G.E.)</MenuItem>
                  {/* Agrega más opciones según sea necesario */}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  {...register('informe_de_2', { required: 'Este campo es requerido' })}
                  fullWidth
                  label="Informe 2"
                  error={!!errors.informe_de_2}
                  // helperText={errors.informe_2 && errors.informe_2.message}
                >
                  <MenuItem value="AUDITORIA">AUDITORIA</MenuItem>
                  <MenuItem value="SEGUIMIENTO">SEGUIMIENTO</MenuItem>
                  {/* Agrega más opciones según sea necesario */}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  {...register('informe_de_3', { required: 'Este campo es requerido' })}
                  fullWidth
                  label="Informe 3"
                  error={!!errors.informe_de_3}
                  // helperText={errors.informe_3 && errors.informe_3.message}
                >
                  <MenuItem value="DE CONFIABILIDAD">DE CONFIABILIDAD</MenuItem>
                  <MenuItem value="OPERACIONAL">OPERACIONAL</MenuItem>
                  <MenuItem value="DE CUMPLIMIENTO">DE CUMPLIMIENTO</MenuItem>
                  
                  {/* Agrega más opciones según sea necesario */}
                </Select>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
              Crear Informe
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
    // <Grid container justifyContent="center">
    //   <Grid item xs={12} >
    //     <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
    //       <Typography variant="h5" gutterBottom>
    //         Crear Informe
    //       </Typography>
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <Grid container spacing={3}>
    //           <Grid item xs={6}>
    //             <TextField
    //               {...register('titulo')}
    //               fullWidth
    //               label="Título"
    //             />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextField
    //               {...register('numero_informe')}
    //               fullWidth
    //               label="Número de Informe"
    //             />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextField
    //               {...register('fecha_de_recepcion')}
    //               fullWidth
    //               type="date"
    //               label="Fecha de Recepción"
    //             />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextField
    //               {...register('informe_de_1')}
    //               fullWidth
    //               label="Informe 1"
    //             />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextField
    //               {...register('informe_de_2')}
    //               fullWidth
    //               label="Informe 2"
    //             />
    //           </Grid>
    //           <Grid item xs={6}>
    //             <TextField
    //               {...register('informe_de_3')}
    //               fullWidth
    //               label="Informe 3"
    //             />
    //           </Grid>
    //         </Grid>
    //         <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
    //           Crear Informe
    //         </Button>
    //       </form>
    //     </Paper>
    //   </Grid>
    // </Grid>
  );

  return {
    isOpen,
    openModal,
    closeModal,
    loadInformeData,
    ModalContent,
  };
};

