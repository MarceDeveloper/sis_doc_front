import react , {useState,useEffect} from 'react'
import { useForm,Controller } from "react-hook-form";
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { FaFile } from "react-icons/fa";
import { AiOutlineFileWord } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";
import { Is_Word, Validate_Peso_File } from "../../utils/file/validate_file";
import Swal from "sweetalert2";
import { axios_ } from "../../axios/_axios";
import { use_reparticiones } from "../../hooks/hooks_api/reparticion/use_reparticiones_prisma";
import { use_documentos } from "../../hooks/hooks_api/documento/use_documento";
import { DTO_documento } from "../../Model/DTO/DTO_Documento";
import moment_time from 'moment-timezone'


interface Iprops{
  onSubmit: (data: any) => Promise<void>
  documento:DTO_documento | null
  accion_form:"crear" | "actualizar" | "nueva_version"
}

export const Form_Documento = ({onSubmit,documento,accion_form}:Iprops) => {
  const [secretaria_select, setSecretaria_select] = useState("")
  const {crear_documento} = use_documentos()
  const { reparticiones,secretarias } = use_reparticiones();


  const { register, handleSubmit, watch ,getValues,control,formState:{errors}} = useForm<any>({
    defaultValues:{
      ...documento
    }
  });
  
  useEffect(() => {
    if (documento) {
      const sec = reparticiones.find((r)=>r.id_reparticion == documento.id_reparticion)
      // console.log({sec:sec?.actividad})
      if (sec) {
        setSecretaria_select(sec?.actividad)
      }
    }
  }, [reparticiones])
  


  const fileWord = watch("file_word");
  const file_pdf = watch("file_pdf");

  
  const Render_Accion_Form = ():string =>{
    let accion=""
    switch (accion_form) {
      case "crear":
        accion = "Crear"
        break;
      case "actualizar":
        accion = "Actualizar"
        break;
      case "nueva_version":
        accion = "Nueva Versión" 
        break;
      default:
        break;
    }
    return accion
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" textAlign={"center"} mb={2}>{Render_Accion_Form()}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              disabled={accion_form == "actualizar" ? true: false}
              {...register("nombre_documento")}
              size="small"
              label="Nombre del documento"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" size="small" required>
              <InputLabel id="secretaria-label">Secretaria</InputLabel>
              <Select
                labelId="secretaria-label"
                label="Secretaria"
                onChange={(e)=>{setSecretaria_select(String(e.target.value))}}
                value={secretaria_select}
                  // renderValue={(selected :any) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
              >
                {
                    secretarias?.map((repart,index)=><MenuItem key={repart.id_reparticion} value={repart.actividad}>{repart.nombre}</MenuItem>)
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
                value={watch("id_reparticion")}
                //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
              >
                {
                    reparticiones?.filter((r)=> r.actividad == secretaria_select).map((repart,index)=><MenuItem key={repart.id_reparticion} value={repart.id_reparticion}>{repart.nombre}</MenuItem>)
                }
                {/* Agrega más opciones según tus necesidades */}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Controller control={control}
              defaultValue={""}
              name="fecha_vigencia" 
              rules={{ required: "la fecha es obligatorio", minLength: 3 }}
              render={(ren) => (
                <TextField
                  value={String(moment_time.utc(ren.field.value).format('YYYY-MM-DD'))}
                  onChange={(val) => ren.field.onChange(val)}
                  size="small"
                  label="Fecha de vigencia"
                  type="date"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    placeholder: "dd/mm/aaaa",
                  }}
                />
                // <input  type='date' value={String(moment_time.utc(ren.field.value).format('YYYY-MM-DD'))}  onChange={(val) => ren.field.onChange(val)}/>
              )}
              
            />
            {/* <TextField
              {...register("fecha_vigencia")}
              // value={String(moment_time.utc(watch("fecha_vigencia")).format('YYYY-MM-DD'))}
              value={String(moment_time.utc(watch("fecha_vigencia")).format('YYYY-MM-DD'))}
              size="small"
              label="Fecha de vigencia"
              type="date"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                placeholder: "dd/mm/aaaa",
              }}
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" size="small" required>
              <InputLabel id="tipo_documento-label">Tipo Documento</InputLabel>
              <Select
                {...register("tipo_documento")}
                labelId="id_reparticion-label"
                label="Tipo Documento"
                value={watch("tipo_documento")}
                //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
              >
                <MenuItem  value={"estatuto"}>estatuto</MenuItem>
                <MenuItem  value={"codigo"}>codigo</MenuItem>
                <MenuItem  value={"reglamento"}>reglamento</MenuItem>
                <MenuItem  value={"manual"}>manual</MenuItem>
                <MenuItem  value={"guia"}>guia</MenuItem>
                <MenuItem  value={"instructivo"}>instructivo</MenuItem>
                <MenuItem  value={"formato"}>formato</MenuItem>
                <MenuItem  value={"registro"}>registro</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("codigo_del_documento")}
              disabled={accion_form == "nueva_version" || accion_form == "actualizar" ? true: false}
              size="small"
              label="Código del documento"
              fullWidth
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <label htmlFor="file_word">
              <input
                {...register("file_word")}
                // required={accion_form == "crear" || "nueva_version" ? true : false}
                id="file_word"
                name="file_word"
                type="file"
                accept=".doc,.docx"
                style={{ display: "none" }}
              />
              <IconButton
                color="primary"
                component="span"
                // sx={{backgroundColor:"#0080d0", color:"white"}}
              >
                <AiOutlineFileWord />
              </IconButton>
              {fileWord && <Typography>{fileWord[0]?.name}</Typography>}
              <Typography variant="caption">Adjuntar WORD</Typography>

            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="file_pdf">
              <input
                {...register("file_pdf")}
                id="file_pdf"
                name="file_pdf"
                type="file"
                accept="application/pdf"
                style={{ display: "none" }}
              />
              <IconButton
                color="primary"
                component="span"
                // sx={{backgroundColor:"#d00000", color:"white"}}
              >
                <BsFiletypePdf />
              </IconButton>
              {file_pdf && <Typography>{file_pdf[0]?.name}</Typography>}
              <Typography variant="caption">Adjuntar PDF</Typography>
            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("permitido")} size="small" {...register("permitido")} />}
              label="Permitido"
            />
          </Grid>
          { accion_form == "crear" &&
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox checked={watch("inicia_en_0")} size="small" {...register("inicia_en_0")} />}
                label="Iniciar en 0"
              />
            </Grid>
          }
          {/* <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("estatuto")} size="small" {...register("estatuto")} />}
              label="Estatuto"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("codigo")} size="small" {...register("codigo")} />}
              label="Código"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("reglamento")} size="small" {...register("reglamento")} />}
              label="Reglamento"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("manual")} size="small" {...register("manual")} />}
              label="Manual"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("guia")} size="small" {...register("guia")} />}
              label="Guía"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("instructivo")} size="small" {...register("instructivo")} />}
              label="Instructivo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("formato")} size="small" {...register("formato")} />}
              label="Formato"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox checked={watch("registro")} size="small" {...register("registro")} />}
              label="Registro"
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("elaborado_por")}
              size="small"
              label="Elaborado por"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("revisado_por")}
              size="small"
              label="Revisado por"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("aprobado_por")}
              size="small"
              label="Aprobado por"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("aprobado_con")}
              size="small"
              label="Aprobado con"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("numero_de_paginas",{valueAsNumber:true})}
              type="number"
              size="small"
              label="Número de páginas"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("observaciones")}
              size="small"
              label="Observaciones"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox size="small" {...register("formato_fisico")} />
              }
              label="Formato físico"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox size='small' {...register('formato_digital')} />}
              label="Formato digital"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('url_file')}
              size='small'
              label="URL del archivo"
              fullWidth
            />
          </Grid> */}
          {/* Agrega los campos adicionales que necesites */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
            {/* <Button type="button" onClick={()=>{console.log(errors)}} variant="contained" color="primary">
              Ver errores
            </Button>
            <Button type="button" onClick={()=>{console.log(getValues())}} variant="contained" color="primary">
              Ver form
            </Button> */}
          </Grid>
        </Grid>
      </form>
      {/* <Button onClick={()=>{console.log(getValues())}}>ver data</Button> */}
    </Container>
  );
};
