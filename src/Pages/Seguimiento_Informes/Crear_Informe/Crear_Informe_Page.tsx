// import React from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';

// interface Recomendacion {
//     id?: string
//     nombre: string;
// }
// interface Tarea {
//     id?: string
//     descripcion: string
// }

// interface Informe {
//     id?:string
//     nombre: string;
//     recomendaciones: Recomendacion[];
//     tareas:Tarea[]
// }

// export const CrearInformePage: React.FC = () => {
//     const { register, handleSubmit, control, setValue, getValues } = useForm<Informe>({
//         defaultValues: {
//             nombre: '',
//             recomendaciones: [],
//         },
//     });

//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: 'recomendaciones',
//     });

//     const onSubmit = (data: Informe) => {
//         console.log(data);
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label htmlFor="name">Nombre del Informe:</label>
//             <input {...register('nombre')} />

//             <div>
//                 <h3>Recomendaciones</h3>
//                 {fields.map((recommendation, index) => (
//                     <div key={recommendation.id}>
//                         <label htmlFor={`recomendaciones[${index}].nombre`}>Recomendación:</label>
//                         <input {...register(`recomendaciones.${index}.nombre`)} />

//                         {/* <label htmlFor={`recomendaciones[${index}].responsible`}>Responsable:</label>
//             <input {...register(`recomendaciones.${index}.responsible`)} /> */}

//                         <button type="button" onClick={() => remove(index)}>
//                             Eliminar
//                         </button>
//                     </div>
//                 ))}

//                 <button
//                     type="button"
//                     onClick={() => append({ nombre: '' })}
//                 >
//                     Agregar Recomendación
//                 </button>
//             </div>

//             <button type="submit">Enviar</button>
//         </form>
//     );
// };




import React, { useState, useEffect } from 'react';
import { useForm, Controller, useFieldArray, } from 'react-hook-form';
import { Navbar } from '../../../components/Navbar/Navbar';
// import { Grid, Paper, TextField, Button, Typography, Container } from '@mui/material';
import { Box, Container, Paper, Grid, TextField, Button, Typography, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem, ListItemText, Checkbox as MuiCheckbox, ListItemIcon, FormControl as MuiFormControl, FormLabel, RadioGroup, Radio, Autocomplete, IconButton, Icon } from '@mui/material';

import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import { axios_ } from '../../../axios/_axios';
import moment from 'moment-timezone';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



interface Informe {
    titulo: string;
    numero_informe: string
    fecha_de_recepcion: Date | string
    informe_de: string
    tipo_de_informe: string
    estado: string
    recomendaciones: Recomendacion[];
}

interface Recomendacion {
    titulo: string;
    descripcion: string
    aceptacion: boolean
    justificacion_no_aceptacion: string
    plazo_de_implementacion: Date | string
    numero_de_recomendacion: string
    estado: string
    estado_recomendacion: string
    antecedentes: string
    comentario: string

    responsables: Responsable[]

    acciones_por_la_mae: Accion_Por_la_mae[]
    acciones_responsables: Acciones_responsables[]

    //   responsible: string;
    tareas: Tarea[];
}
interface Tarea {
    descripcion: string
}
interface Responsable {
    id: number
    nombre: string
    cargo: string
}
interface Acciones_responsables {
    id_responsable: number
    accion: string
}
interface Accion_Por_la_mae {
    accion: string
}


const listaDeResponsables: Responsable[] = [
    { id: 1, nombre: 'marcelo', cargo: 'Gerente de Proyecto' },
    { id: 2, nombre: 'pedro', cargo: 'Analista de Sistemas' },
];

export const CrearInformePage: React.FC = () => {
    const [lst_responsables, setLst_responsables] = useState<Responsable[]>([])
    const [nueva_tarea, setNueva_tarea] = useState("")
    const [nueva_accion_mae, set_nueva_accion_mae] = useState("")
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [selectedRadio, setSelectedRadio] = React.useState('');
    const [responsables, setResponsables] = React.useState<Responsable[]>([]);
    const navi = useNavigate()

    const { control, handleSubmit, register, formState: { errors }, watch, setValue, getValues } = useForm<Informe>({
        defaultValues: {
            titulo: '',
            fecha_de_recepcion: moment().utc().format("YYYY-MM-DD"),
            estado: "HABILITADO",
            // recomendaciones: [{
            //     titulo: '',
            //     aceptacion: false,
            //     antecedentes: "",
            //     comentario: "",
            //     descripcion: "",
            //     estado: "",
            //     estado_recomendacion: "",
            //     justificacion_no_aceptacion: "",
            //     numero_de_recomendacion: "",
            //     plazo_de_implementacion: moment().format("YYYY-MM-DD"),
            //     responsables: [],
            //     acciones_por_la_mae: [],
            //     tareas: [],
            //     acciones_responsables: []
            // }],
        },
    });

    useEffect(() => {
        get_responsables()
    }, [])

    const get_responsables = async ()=>{
        const res = await axios_.get("/api/responsables/lst_responsables")
        setLst_responsables(res.data?.data as Responsable[])
    }
    

    const onSubmit = async (data: Informe) => {
        data.recomendaciones = data.recomendaciones.map((r) => ({
            ...r, justificacion_no_aceptacion: r.aceptacion ? "" : r.justificacion_no_aceptacion
        }))
        console.log(data);
        try {
            const res = await axios_.post("/api/informes/crear_informe", data)
            Swal.fire({title:"ok",icon:"success",text:"creado con exito",timer:2000}).then(()=>{
                navi(-1)
            })
        } catch (error) {
            Swal.fire( {title:"error",icon:"error",text:"no se pudo crear el informe"})   
        }
    };

    const { fields: recommendationFields, append: appendRecommendation, remove: removeRecommendation } = useFieldArray({
        control,
        name: 'recomendaciones',
    });
    const addRecommendation = () => {
        appendRecommendation({
            titulo: "",
            aceptacion: false,
            antecedentes: "",
            comentario: "",
            descripcion: "",
            estado: "",
            estado_recomendacion: "",
            justificacion_no_aceptacion: "",
            numero_de_recomendacion: "",
            plazo_de_implementacion: moment().utc().format("YYYY-MM-DD"),
            responsables: [],
            tareas: [],
            acciones_por_la_mae: [],
            acciones_responsables: []
        });
    };

    const agregarTarea = (recomendacion_Index: number, tarea: string) => {
        const recommendations = getValues('recomendaciones');
        recommendations[recomendacion_Index].tareas.push({ descripcion: tarea });
        setValue('recomendaciones', recommendations);
    };

    const quitarTarea = (recomendacion_Index: number, tarea_index: number) => {
        const recommendations = getValues('recomendaciones');
        recommendations[recomendacion_Index].tareas.splice(tarea_index, 1);
        setValue('recomendaciones', recommendations);
    };

    const agregar_acciones_por_la_mae = (recomendacion_Index: number, accion_mae: string) => {
        const recommendations = getValues('recomendaciones');
        recommendations[recomendacion_Index].acciones_por_la_mae.push({
            accion: accion_mae
        });
        setValue('recomendaciones', recommendations);
    }
    const quitar_acciones_por_la_mae = (recomendacion_Index: number, accion_index: number) => {
        const recommendations = getValues('recomendaciones');
        recommendations[recomendacion_Index].acciones_por_la_mae.splice(accion_index, 1);
        setValue('recomendaciones', recommendations);
    }


    const handleSelectChange = (event: any) => {
        setSelectedItems(event.target.value);
    };

    const handleRadioChange = (event: any) => {
        setSelectedRadio(event.target.value);
    };

    const Cargar_Responsables = (recomendacion_Index: number, responsables: Responsable[]) => {
        // setResponsables([...responsables, responsable]);
        const recommendations = getValues('recomendaciones');
        console.log(responsables)
        recommendations[recomendacion_Index].responsables = responsables
        setValue('recomendaciones', recommendations);
    };

    const removeResponsable = (index: number) => {
        const updatedResponsables = [...responsables];
        updatedResponsables.splice(index, 1);
        setResponsables(updatedResponsables);
    };

    return (
        <Box>
            <Navbar />
            {/* ... Tu barra de navegación u otros componentes ... */}
            <Container maxWidth="xl">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Informe</h1>
                        <Grid container spacing={2}>
                            {/* Columna 1 en escritorio */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    {...register("titulo", { required: true })}
                                    required
                                    size='small'
                                    label="Titulo del Informe"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    {...register("numero_informe", { required: true })}
                                    required
                                    size='small'
                                    label="Numero de Informe"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required

                                    type='date'
                                    defaultValue={moment().utc().format("YYYY-MM-DD")}
                                    {...register(`fecha_de_recepcion`)}
                                    size='small'
                                    label="fecha_de_recepcion"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel>Informe de</InputLabel>
                                    <Select
                                        label="Informe de"
                                        value={watch("informe_de")}
                                        onChange={(e) => {

                                            setValue("informe_de", e.target.value)
                                        }}
                                    >
                                        <MenuItem value="DIRECCION DE AUDITORIA INTERNA (D.A.I)">DIRECCION DE AUDITORIA INTERNA (D.A.I)</MenuItem>
                                        <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E)">CONTRALORIA GENERAL DEL ESTADO (C.G.E)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel>Tipo de Informe </InputLabel>

                                    {
                                        watch("informe_de") == "DIRECCION DE AUDITORIA INTERNA (D.A.I)" ?
                                            <Select
                                                label="tipo_de_informe"
                                                value={watch("tipo_de_informe")}
                                                onChange={(e) => {
                                                    console.log(e.target.value)

                                                    setValue("tipo_de_informe", e.target.value)
                                                }}
                                            >
                                                <MenuItem value="AUDITORIA">AUDITORIA</MenuItem>
                                                <MenuItem value="SEGUIMIENTO">SEGUIMIENTO</MenuItem>


                                            </Select>
                                            :
                                            <Select
                                                label="tipo_de_informe"
                                                value={watch("tipo_de_informe")}
                                                onChange={(e) => {
                                                    console.log(e.target.value)

                                                    setValue("tipo_de_informe", e.target.value)
                                                }}
                                            >
                                                <MenuItem value="Opcion 1">Opcion 1</MenuItem>
                                                <MenuItem value="Opcion 2">Opcion 2</MenuItem>

                                            </Select>

                                    }
                                </FormControl>
                            </Grid>

                            {/* Sección de Recomendación */}
                            {
                                recommendationFields.map((recomendacion, recomendacion_index) => (
                                    <Grid item xs={12}>
                                        <Paper elevation={3} style={{ padding: '20px' }}>
                                            <Typography variant="h6" gutterBottom>
                                                Recomendación {recomendacion_index + 1}
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.titulo`)}
                                                        size='small'
                                                        label="titulo"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.descripcion`)}
                                                        size='small'
                                                        label="descripcion"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>


                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required

                                                        type='date'
                                                        defaultValue={moment().utc().format("YYYY-MM-DD")}
                                                        {...register(`recomendaciones.${recomendacion_index}.plazo_de_implementacion`)}
                                                        size='small'
                                                        label="plazo_de_implementacion"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.numero_de_recomendacion`)}
                                                        size='small'
                                                        label="numero_de_recomendacion"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.estado`)}
                                                        size='small'
                                                        label="estado"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.estado_recomendacion`)}
                                                        size='small'
                                                        label="estado_recomendacion"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.antecedentes`)}
                                                        size='small'
                                                        label="antecedentes"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        {...register(`recomendaciones.${recomendacion_index}.comentario`)}
                                                        size='small'
                                                        label="comentario"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>

                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                {...register(`recomendaciones.${recomendacion_index}.aceptacion`)}

                                                            />
                                                        }
                                                        label="Aceptación"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    {
                                                        !watch(`recomendaciones.${recomendacion_index}.aceptacion`) &&
                                                        <TextField
                                                            required
                                                            {...register(`recomendaciones.${recomendacion_index}.justificacion_no_aceptacion`)}
                                                            size='small'
                                                            label="justificacion_no_aceptacion"
                                                            fullWidth
                                                            variant="outlined"
                                                        />

                                                    }
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                    <Autocomplete
                                                        multiple
                                                        id={`responsables-1`}
                                                        options={lst_responsables}
                                                        getOptionLabel={(option) => `${option.nombre} (${option.cargo})`}
                                                        value={recomendacion.responsables}
                                                        onChange={(event, newValue) => {
                                                            Cargar_Responsables(recomendacion_index, newValue)

                                                            //   addResponsable(newValue as Responsable);
                                                        }}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                size="small"
                                                                label="Responsables"
                                                                variant="outlined"
                                                            />
                                                        )}
                                                    />

                                                </Grid>


                                                <Grid item xs={12}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <TextField
                                                            size='small'
                                                            label="Nueva Tarea"
                                                            fullWidth
                                                            variant="outlined"
                                                            value={nueva_tarea}
                                                            onChange={(event) => setNueva_tarea(event.target.value)}
                                                        />
                                                        <IconButton
                                                            color="primary"
                                                            onClick={(e) => {
                                                                if (nueva_tarea.trim() !== '') {
                                                                    // Agregar la nueva tarea a la lista de tareas
                                                                    agregarTarea(recomendacion_index, nueva_tarea)
                                                                    setNueva_tarea('');
                                                                }
                                                            }}
                                                        >
                                                            <AddCircleOutline />
                                                        </IconButton>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={12} style={{ paddingLeft: 50 }}>
                                                    {
                                                        recomendacion.tareas.map((tarea, tarea_index) => (
                                                            <Typography style={{ display: "flex", alignItems: "center" }}>

                                                                <RemoveCircleOutline onClick={() => { quitarTarea(recomendacion_index, tarea_index) }} sx={{ fontSize: 30 }} /> <strong>Tarea {tarea_index + 1}:</strong> {tarea.descripcion}
                                                            </Typography>
                                                        ))
                                                    }
                                                </Grid>

                                                {/* ACCIONES DE LA MAE */}

                                                <Grid item xs={12}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <TextField
                                                            size='small'
                                                            label="Nueva Accion Mae"
                                                            fullWidth
                                                            variant="outlined"
                                                            value={nueva_accion_mae}
                                                            onChange={(event) => set_nueva_accion_mae(event.target.value)}
                                                        />
                                                        <IconButton
                                                            color="primary"
                                                            onClick={(e) => {
                                                                if (nueva_accion_mae.trim() !== '') {
                                                                    // Agregar la nueva tarea a la lista de tareas
                                                                    agregar_acciones_por_la_mae(recomendacion_index, nueva_accion_mae)
                                                                    set_nueva_accion_mae('');
                                                                }
                                                            }}
                                                        >
                                                            <AddCircleOutline />
                                                        </IconButton>
                                                    </div>
                                                </Grid>


                                                <Grid item xs={12} style={{ paddingLeft: 50 }}>
                                                    {
                                                        recomendacion.acciones_por_la_mae.map((accion_mae, accion_mae_index) => (
                                                            <Typography style={{ display: "flex", alignItems: "center" }}>

                                                                <RemoveCircleOutline onClick={() => { quitar_acciones_por_la_mae(recomendacion_index, accion_mae_index) }} sx={{ fontSize: 30 }} /> <strong>Accion por la Mae {accion_mae_index + 1}:</strong> {accion_mae.accion}
                                                            </Typography>
                                                        ))
                                                    }
                                                </Grid>


                                                {/* Otros campos relacionados con la recomendación */}
                                                {/* ... */}

                                                {/* Radio Buttons */}
                                                {/* <Grid item xs={12}>
                                                    <FormControl component="fieldset">
                                                        <FormLabel component="legend">Radio Buttons</FormLabel>
                                                        <RadioGroup
                                                            aria-label="radio-buttons"
                                                            name="radio-buttons"
                                                            value={selectedRadio}
                                                            onChange={handleRadioChange}
                                                        >
                                                            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                                                            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                                                            <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Grid> */}



                                                {/* Botón de envío para la recomendación */}
                                                <Grid item xs={12}>
                                                    <Button variant="contained" color="error" fullWidth onClick={() => removeRecommendation(recomendacion_index)}>
                                                        Eliminar esta recomendacion
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                ))
                            }


                            <Grid item xs={12}>
                                <Button variant="contained" color="success" fullWidth
                                    onClick={() => addRecommendation()}
                                >
                                    Agregar nuevas recomendacion
                                </Button>
                            </Grid>

                            {/* Botón de envío del formulario principal */}
                            <Grid item xs={12}>
                                <Button type='submit' variant="contained" color="primary" fullWidth>
                                    Guardar Informe
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <label htmlFor="name">Nombre del Informe eee:</label>
        //     <input type="text" {...register('name')} />

        //     <div>
        //         <h3>Recomendaciones</h3>
        //         {recommendationFields.map((recommendation, recIndex) => (
        //             <div key={recommendation.id}>
        //                 <label>Recomendación:</label>
        //                 <input type="text" {...register(`recomendaciones.${recIndex}.nombre`)} />



        //                 <h4>Tareas</h4>
        //                 {recommendation.tareas.map((tarea, tareaIndex) => (
        //                     <div key={tareaIndex}>
        //                         <input type="text" {...register(`recomendaciones.${recIndex}.tareas.${tareaIndex}.descripcion`)} />


        //                         <button type="button" onClick={() => removeTask(recIndex, tareaIndex)}>
        //                             Eliminar Tarea
        //                         </button>
        //                     </div>
        //                 ))}

        //                 <button
        //                     type="button"
        //                     onClick={() => agregarTarea(recIndex)}
        //                 >
        //                     Agregar Tarea
        //                 </button>

        //                 <button type="button" onClick={() => removeRecommendation(recIndex)}>
        //                     Eliminar Recomendación
        //                 </button>
        //             </div>
        //         ))}

        //         <button
        //             type="button"
        //             onClick={() => addRecommendation()}
        //         >
        //             Agregar Recomendación
        //         </button>
        //     </div>

        //     <button type="submit">Enviar</button>
        // </form>
    );
};

