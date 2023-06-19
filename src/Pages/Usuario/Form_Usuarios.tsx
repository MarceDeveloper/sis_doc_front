import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Form_Usuario } from '../../hooks/prueba/usuario/use_usuarios';
import { Secre_with_reparticiones, use_reparticiones } from '../../hooks/hooks_api/reparticion/use_reparticiones_prisma';

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
  const {secretarias,reparticiones,secretarias_reparticiones, loading} = use_reparticiones()
  const [select_secretaria_rep, setselect_secretaria_rep] = useState<Secre_with_reparticiones>()
  const { register, handleSubmit,watch, resetField,reset,setValue, formState: { errors } } = useForm<Form_Usuario>({
    defaultValues: defaultValues,
  });
  const handleFormSubmit = (data: Form_Usuario) => {
    onSubmit(data);
    reset();
  };
  
  console.log({secre:secretarias?.length,rep:reparticiones.length,total:secretarias?.length || 0 +reparticiones.length})
  
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" size="small" required>
            <InputLabel id="secretaria-label">Secretaria</InputLabel>
            <Select
              required = {true}
              labelId="secretaria-label"
              label="Secretaria"
              onChange={(e)=>{
                resetField("id_reparticion")
                const sec_r = secretarias_reparticiones?.find((sec_rep)=>sec_rep.secretaria.id_reparticion == Number(e.target.value))
          
                if (sec_r) {
                  setselect_secretaria_rep(sec_r)
                }
              }}
              value={select_secretaria_rep}
                // renderValue={(selected :any) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
            >
              {
                  secretarias?.map((sec,index)=><MenuItem key={sec.id_reparticion} value={sec.id_reparticion}>{sec.nombre}</MenuItem>)
              }
              {/* Agrega más opciones según tus necesidades */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" size="small" required>
            <InputLabel id="id_reparticion-label">Reparticion</InputLabel>
            <Select
              {...register("id_reparticion")}
              labelId="id_reparticion-label"
              label="Reparticion"
              // value={watch("id_reparticion")}
              //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
            >
              {
                  select_secretaria_rep?.reparticiones.map((repart,index)=><MenuItem key={repart.id_reparticion} value={repart.id_reparticion}>{repart.nombre}</MenuItem>)
              }
              {/* Agrega más opciones según tus necesidades */}
            </Select>
          </FormControl>
        </Grid>
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
