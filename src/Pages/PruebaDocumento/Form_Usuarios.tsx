import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Form_Usuario } from '../../hooks/prueba/usuario/use_usuarios';

interface UserFormProps {
  onSubmit: (data: Form_Usuario) => void;
  defaultValues?: Form_Usuario;
}

// export interface FormData_Usuario {
//   nombre_usuario: string;
//   nombre: string;
//   contrasena: string;
// }

export const Form_Usuarios: React.FC<UserFormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Form_Usuario>({
    defaultValues: defaultValues,
  });

  const handleFormSubmit = (data: Form_Usuario) => {
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
            {...register('usuario', { required: true })}
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="dense"
            error={errors.usuario ? true : false}
          />
          {errors.usuario && (
            <Typography variant="body2" color="error">
              Este campo es requerido
            </Typography>
          )}
        </Grid>
        {
          !defaultValues &&
          <Grid item xs={12} sm={6}>
            <TextField
              size='small'
              {...register('contrasena', { required: true })}
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              margin="dense"
              error={errors.contrasena ? true : false}
            />
            {errors.contrasena && (
              <Typography variant="body2" color="error">
                Este campo es requerido
              </Typography>
            )}
          </Grid>
        }
      
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Guardar
      </Button>
    </form>
  );
};
