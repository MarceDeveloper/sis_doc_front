import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Form_Usuario } from '../../hooks/prueba/usuario/use_usuarios';
import { Secre_with_reparticiones, use_reparticiones } from '../../hooks/hooks_api/reparticion/use_reparticiones_prisma';
import { service_secretaria } from '../../api/service_secretaria';

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
  const { secretarias, reparticiones, secretarias_reparticiones, loading } = use_reparticiones()
  const [select_secretaria_rep, setselect_secretaria_rep] = useState<Secre_with_reparticiones>()
  const [secretaria_select, setSecretaria_select] = useState(0)
  const [lst_secretarias_with_reparticiones, setlst_secretarias_with_reparticiones] = useState<any[]>([])



  const { register, handleSubmit, watch, resetField, reset, setValue, formState: { errors } } = useForm<Form_Usuario>({
    defaultValues: defaultValues,
  });
  const handleFormSubmit = (data: Form_Usuario) => {
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    Get_Lst_Secretarias_reparticiones()
  }, [])

  const Get_Lst_Secretarias_reparticiones = async () => {
    const lst = await service_secretaria.getAllI_secretarias_with_reparticiones()
  
    setlst_secretarias_with_reparticiones(lst)
  }
  

  const RenderReparticiones = ()=>{
    const secre = lst_secretarias_with_reparticiones.find((x) => x.secretaria.id_reparticion == secretaria_select)
    console.log({secre})
    if (secre) {
      console.log({reparticiones:secre.lst_reparticiones})
      return secre.lst_reparticiones.map((r:any)=>(
        <MenuItem key={r.reparticion.id_reparticion} value={r.reparticion.id_reparticion}> {r.reparticion.nombre}</MenuItem>
      ))
      
    }
  }


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        
          <FormControl fullWidth variant="outlined" size="small" required>
            <InputLabel id="secretaria-label">Secretaria</InputLabel>
            <Select
              labelId="secretaria-label"
              label="Secretaria"
              onChange={(e) => {
                setSecretaria_select(Number(e.target.value))
              }}
              value={secretaria_select}
            >
              {
                lst_secretarias_with_reparticiones.map((item) => (
                  <MenuItem key={item.secretaria.id_reparticion} value={item.secretaria.id_reparticion}>{item.secretaria.nombre}</MenuItem>
                ))
              }

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
            
            >
               {
                  lst_secretarias_with_reparticiones.filter((x) => x.secretaria.id_reparticion == secretaria_select).map((item) => (
                    <MenuItem key={item.secretaria.id_reparticion} value={item.secretaria.id_reparticion}>{item.secretaria.nombre}</MenuItem>
                  ))
                }

                {
                  RenderReparticiones()
                }
             
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
