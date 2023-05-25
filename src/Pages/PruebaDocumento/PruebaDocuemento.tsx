


import React from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  Checkbox,
  Grid,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Colores } from '../../config/config_style';

interface Documento {
  id_documento: number;
  nombre_documento: string;
  descripcion: string;
  estado: string;
  estatuto: string;
  codigo_manual: string;
  reglamento: string;
  manual_procedimiento: string;
  guia: string;
  instructivo: string;
  formato: string;
  registro: string;
  elaborado_por: string;
  revisado_por: string;
  aprobado_por: string;
  resolucion: string;
  fecha: Date;
  observaciones: string;
  fecha_creacion: Date;
  vigencia: string;
  codigo: string;
  version_documento: string;
  formato_fisico: boolean;
  formato_digital: boolean;
  numero_documento: string;
  url_file: string;
  id_estado_documento: number;
  id_reparticion: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}


export const PruebaDocuemento = () => {
  const { handleSubmit, register ,control ,formState:{errors} } = useForm<Documento>({
    defaultValues: {},
  });

  const handleFormSubmit = handleSubmit((data) => {
    // Procesar los datos del formulario aquí
    console.log(data);
  });



  return (
    <form onSubmit={handleFormSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* <TextField
            label="Nombre del documento"
            defaultValue={1} // Agrega un valor predeterminado vacío
            // name="nombre_documento"
            inputRef={register("nombre_documento",{ required: true }) as any}
            fullWidth
          /> */}
            <FormControl >
              <Controller control={control}
                name="estatuto" defaultValue=""
                rules={{ required: "el estatuto es obligatorio" }}
                render={(ren) => (
                  <TextField 
                    placeholder="estatuto" value={ren.field.value}   
                    onChange={(val) => ren.field.onChange(val)}
                  />
                )}
                
                />
                <Typography  color={Colores.error}>{errors.estatuto?.message}</Typography>
                {/* <label color={"orange"}>{errors.estatuto?.message}</label> */}
            </FormControl>
        </Grid>
        
      </Grid>

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};
