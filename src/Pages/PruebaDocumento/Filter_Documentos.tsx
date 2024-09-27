import { Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { DTO_documento } from '../../Model/DTO/DTO_Documento';
import { use_reparticiones } from '../../hooks/hooks_api/reparticion/use_reparticiones_prisma';
import { service_reparticion } from '../../api/service_reparticion';
import { service_secretaria } from '../../api/service_secretaria';
import { letterSpacing } from '@mui/system';


interface Iprops {
    lst_documentos: DTO_documento[]
    onFilter: (documentos_filtrados: DTO_documento[]) => void
}
export const Filter_Documentos = ({ lst_documentos, onFilter }: Iprops) => {
    const [lst_secretarias_reparticiones, set_Lst_secretarias_reparticiones] = useState<any[]>([])
    const [secre_select, set_secre_select] = useState<any>(null)

    console.log({ secre_select })
    const [secretaria_select, setSecretaria_select] = useState("TODOS")
    const { reparticiones, secretarias, secretarias_reparticiones } = use_reparticiones()
    const { register, handleSubmit, watch, getValues, control, setValue } = useForm<any>({

    });

    const palabra = watch("nombre_documento") || ""
    const estado_documento = watch("estado_documento") || ""
    const reparticion = watch("reparticion") || ""


    useEffect(() => {
        const Init = async () => {
            const lst_secre_repart = await service_secretaria.getAllI_secretarias_with_reparticiones()
            set_Lst_secretarias_reparticiones(lst_secre_repart)
            console.log({ lst_secre_repart })
        }
        Init()

    }, [])


    //EFECTO PARA FILTER
    useEffect(() => {

        Filter()
    }, [lst_documentos, palabra, estado_documento, reparticiones, reparticion, secretaria_select,secre_select])



    const onSubmit = () => {

    }
    const Render_Secretaria_Como_Reparticion = () => {
        const secre = secretarias?.find((r) => String(r.id_unidad) == String(secretaria_select))

        if (secre) {
            return <MenuItem key={secre.id_reparticion} value={secre.nombre}>{secre.nombre}</MenuItem>
        }
    }

    const Filter = () => {

        let matchesSearch = true
        let matchesEstado_Documento = true
        let matchesReparticiones = true


        let lst_temp :DTO_documento[] = []
        if (secre_select == "TODOS" || secre_select == null || secre_select == undefined) {
            lst_temp = lst_documentos
        }else{
            console.log({antes_de_filtrar:secre_select})
            const ids_reparticiones_for_secre_select:any[] = secre_select.lst_reparticiones.map((x:any)=>x.reparticion.id_reparticion)
       
            ids_reparticiones_for_secre_select.push(secre_select.secretaria.id_reparticion)
            lst_temp = lst_documentos.filter((x)=> ids_reparticiones_for_secre_select.includes(x.id_reparticion)  )
            
        }

        // let lst_temp: DTO_documento[] = secretaria_select == "TODOS" ? lst_documentos : lst_documentos.filter((d) => d.reparticion?.id_unidad_padre == Number(secretaria_select))
        // lst_temp = [...lst_temp, ...lst_documentos.filter((x) => x.reparticion?.id_unidad == Number(secretaria_select))]

        const lst_filtrada = lst_temp.filter((doc) => {
            const a = doc.id_reparticion == 296 ? doc : null
            //POR NOMBRE DE DOCUMENTO
            if (palabra?.length > 0) {
                matchesSearch = doc.nombre_documento.toUpperCase().includes(palabra.toUpperCase())
                    || doc.tipo_documento.toUpperCase().includes(palabra.toUpperCase())
            }
            //POR ESTADO
            if (estado_documento != "TODOS") {
                matchesEstado_Documento = doc.estado_documento.toUpperCase() == estado_documento.toUpperCase()
            }
            //POR REPARTICION
            if (reparticion != "TODOS") {

                // console.log("entre", doc.reparticion?.nombre.toUpperCase() , reparticion.toUpperCase())
                matchesReparticiones = doc.reparticion?.nombre.toUpperCase() == reparticion.toUpperCase()
            }
            return matchesSearch && matchesEstado_Documento && matchesReparticiones
        })

        onFilter(lst_filtrada)

    }



    return (
        // <Container maxWidth="md">
        <form style={{ marginTop: 10 }} onSubmit={handleSubmit(onSubmit)}>
            {/* <h1>{secretaria_select}</h1>
                <h1>{reparticion}</h1> */}
            <Grid container spacing={2} >
                {/* <Grid item xs={12} sm={3}>
                        <FormControl fullWidth variant="outlined" size="small" required>
                            <InputLabel id="id_secretaria-label">Secretaria</InputLabel>
                            <Select
                                labelId="id_secretaria-label"
                                label="Secretaria"
                                defaultValue={"TODOS"}
                                onChange={(e)=>{
                                    setSecretaria_select(e.target.value)
                                    setValue("reparticion","TODOS")
                                }}
                                // value={watch("id_reparticion")}
                                //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
                            >
                                <MenuItem value={"TODOS"}>TODOS</MenuItem>
                                {
                                    secretarias?.map((secre,index)=><MenuItem key={secre.id_reparticion} value={secre.id_unidad}>{`${secre.nombre}`}</MenuItem>)
                                    // secretarias?.map((secre,index)=><MenuItem key={secre.id_reparticion} value={secre.actividad}>{`${secre.nombre}`}</MenuItem>)
                                }

                            </Select>
                        </FormControl>
                    </Grid> */}
                <Grid item xs={12} sm={3}>
                    <FormControl fullWidth variant="outlined" size="small" required>
                        <InputLabel id="id_secretaria-label">Secretaria</InputLabel>
                        <Select
                            labelId="id_secretaria-label"
                            label="Secretaria"
                            defaultValue={"TODOS"}
                            onChange={(e) => {
                                setSecretaria_select(e.target.value)
                                console.log(e.target.value)
                                set_secre_select(lst_secretarias_reparticiones.find((x) => x.secretaria.id_reparticion == Number(e.target.value)))
                                setValue("reparticion", "TODOS")
                            }}
                        // value={watch("id_reparticion")}
                        //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
                        >
                            <MenuItem value={"TODOS"}>TODOS</MenuItem>
                            {
                                lst_secretarias_reparticiones?.map((secre_repart, index) => <MenuItem key={secre_repart.secretaria.id_reparticion} value={secre_repart.secretaria.id_reparticion}>{`${secre_repart.secretaria.nombre}`}</MenuItem>)
                                // secretarias?.map((secre,index)=><MenuItem key={secre.id_reparticion} value={secre.actividad}>{`${secre.nombre}`}</MenuItem>)
                            }

                        </Select>
                    </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={3}>
                        <FormControl fullWidth variant="outlined" size="small" required>
                            <InputLabel id="id_reparticion-label">Reparticion</InputLabel>
                            <Select
                                {...register("reparticion")}
                                labelId="id_reparticion-label"
                                label="Reparticion"
                                defaultValue={"TODOS"}
                                renderValue={()=>reparticion}

                                // value={reparticion}
                                //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
                            >
                                <MenuItem value={"TODOS"}>TODOS</MenuItem>
                                {
                                    Render_Secretaria_Como_Reparticion()
                                }
                                {
                                    reparticiones.filter((r)=>r.id_unidad_padre == Number(secretaria_select)).map((repar,index)=><MenuItem key={repar.id_reparticion} value={repar.nombre}>{`${repar.nombre}`}</MenuItem>)
                                }

                            </Select>
                        </FormControl>
                    </Grid> */}
                <Grid item xs={12} sm={3}>
                    <FormControl fullWidth variant="outlined" size="small" required>
                        <InputLabel id="id_reparticion-label">Reparticion</InputLabel>
                        <Select
                            {...register("reparticion")}
                            labelId="id_reparticion-label"
                            label="Reparticion"
                            defaultValue={"TODOS"}
                            renderValue={() => reparticion}

                        // value={reparticion}
                        //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
                        >
                            <MenuItem value={"TODOS"}>TODOS</MenuItem>
                            {
                                Render_Secretaria_Como_Reparticion()
                            }
                            {
                                secre_select?.lst_reparticiones?.map((repar: any) => <MenuItem key={repar.reparticion.id_reparticion} value={repar.reparticion.nombre}>{`${repar.reparticion.nombre}`}</MenuItem>)
                            }

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        {...register("nombre_documento")}
                        size="small"
                        label="Nombre del documento"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl fullWidth variant="outlined" size="small" required>
                        <InputLabel id="id_estado_documento-label">Estado Documento</InputLabel>
                        <Select
                            {...register("estado_documento")}
                            labelId="id_estado_documento-label"
                            label="Estado Documento"
                            defaultValue={"VIGENTE"}
                        // value={watch("id_reparticion")}
                        //   renderValue={(selected) => <Typography>{selected || 'Seleccione una opción'}</Typography>}
                        >
                            <MenuItem value={"TODOS"}>TODOS</MenuItem>
                            {/* <MenuItem value={"HABILITADO"}>HABILITADO</MenuItem> */}
                            {/* <MenuItem value={"ELIMINADO"}>ELIMINADO</MenuItem> */}
                            <MenuItem value={"VIGENTE"}>VIGENTE</MenuItem>
                            <MenuItem value={"NO_VIGENTE"}>NO VIGENTE</MenuItem>
                            <MenuItem value={"ANULADO"}>ANULADO</MenuItem>


                        </Select>
                    </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={3}>
                        <TextField
                            {...register("nombre_documento")}
                            size="small"
                            label="Nombre del documento"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            {...register("nombre_documento")}
                            size="small"
                            label="Nombre del documento"
                            fullWidth
                            required
                        />
                    </Grid> */}
            </Grid>
        </form>
        // </Container>
    )
}
