import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Form_Reparticion } from '../../hooks/prueba/usuario/use_reparticiones_prisma';

interface UserFormProps {
  onSubmit: (data: Form_Reparticion) => void;
  defaultValues?: Form_Reparticion;
}

// export interface FormData_Usuario {
//   nombre_usuario: string;
//   nombre: string;
//   contrasena: string;
// }

export const Form_Reparticiones: React.FC<UserFormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Form_Reparticion>({
    defaultValues: defaultValues,
  });

  const handleFormSubmit = (data: Form_Reparticion) => {
    onSubmit(data);
    reset();
  };

  
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            size='small'
            {...register('nombre', { required: true })}
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="dense"
            error={errors.nombre ? true : false}
          />
          {errors.nombre && (
            <Typography variant="body2" color="error">
              Este campo es requerido
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size='small'
            {...register('codigo', { required: true })}
            label="Codigo"
            type="number"
            variant="outlined"
            fullWidth
            margin="dense"
            error={errors.codigo ? true : false}
          />
          {errors.codigo && (
            <Typography variant="body2" color="error">
              Este campo es requerido
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size='small'
            {...register('id_unidad', { required: true })}
            label="Id unidad"
            variant="outlined"
            type="number"
            fullWidth
            margin="dense"
            error={errors.id_unidad ? true : false}
          />
          {errors.id_unidad && (
            <Typography variant="body2" color="error">
              Este campo es requerido
            </Typography>
          )}
        </Grid>
      
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Guardar
      </Button>
    </form>
  );
};
