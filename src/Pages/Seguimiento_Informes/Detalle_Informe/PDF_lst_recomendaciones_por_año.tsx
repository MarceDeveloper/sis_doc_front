import React, { useEffect, useState, useRef } from 'react'
import { api_service } from '../../../api/api_service'
import { useForm } from 'react-hook-form';
import { TextField, Grid, Button, Box,FormControl,InputLabel,Select, MenuItem } from '@mui/material'
import { useReactToPrint } from 'react-to-print';
import { DTO_lst_recomendaciones } from '../../../api/DTO_Seguimiento/DTO_lst_recomendaciones';
import moment from 'moment-timezone';
import { Navbar } from '../../../components/Navbar/Navbar';



interface Iform {
    ano: number
    entidad: string
}

type Recomendacion = DTO_lst_recomendaciones["data"][0];


export const PDF_lst_recomendaciones_por_año = () => {
    const { control, handleSubmit, register, formState: { errors }, watch, setValue, getValues } = useForm<Iform>({

    });

    const ref_table = useRef(null)


    const generate_pdf = useReactToPrint({
        content: () => ref_table.current,
        documentTitle: "tabla",
        onAfterPrint: () => { }
    })

    const [lst_recomendaciones, setLst_recomendaciones] = useState<Recomendacion[]>([])



    const onSubmit = async (data: Iform) => {
        // const res = await api_service.seguimiento_informes.lst_recomendaciones_filter_ano_and_entidad(data.ano, data.entidad)
        // setLst_recomendaciones(res)
        // console.log(res)
    };

    return (
        <Box>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Recomendaciones</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={2}>
                        <TextField
                            {...register("ano", { required: true, valueAsNumber: true })}
                            required
                            size='small'
                            type='number'
                            label="Año"
                            fullWidth
                            variant="outlined"
                        />
                        <span>introduce año 0 para obener el reporte de todos los años</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth variant="outlined" size='small'>
                            <InputLabel>Informe de</InputLabel>
                            <Select
                                label="Informe de"
                                value={watch("entidad")}
                                onChange={(e) => {

                                    setValue("entidad", e.target.value)
                                }}
                            >
                                <MenuItem value="todos">TODOS</MenuItem>
                                <MenuItem value="DIRECCION DE AUDITORIA INTERNA (D.A.I)">DIRECCION DE AUDITORIA INTERNA (D.A.I)</MenuItem>
                                <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E)">CONTRALORIA GENERAL DEL ESTADO (C.G.E)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button type='submit' variant='contained'>Solicitar</Button>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button onClick={() => { generate_pdf() }} variant='contained'>Crear PDF</Button>
                    </Grid>
                </Grid>

            </form>



            <div ref={ref_table} style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ textAlign: "center" }}>Recomendaciones por Año</h1>


                <table className='table' >
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Recomendacion</th>
                            <th>Periodo</th>
                            <th>Entidad</th>



                            {/* Agrega más encabezados de acuerdo a tus necesidades */}
                        </tr>
                    </thead>
                    <tbody>
                        {lst_recomendaciones.map((recomendacion) => (
                            <tr key={recomendacion.id}>
                                <td>{recomendacion.numero_de_recomendacion}</td>
                                <td>{recomendacion.titulo}</td>
                                <td>{moment(recomendacion.plazo_de_implementacion).utc().format("DD-MM-YYYY")}</td>
                                <td>{recomendacion.informe.informe_de}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>


                <div
                    style={{
                        backgroundColor: "#202020",
                        width: 250,
                        height: 1,
                        position: 'relative',
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 120
                    }}

                >
                    <span style={{ position: "absolute", right: 0, left: 0, top: 20, textAlign: "center" }}>
                        Firma del Rector UAJMS
                    </span>

                </div>
            </div>
        </Box>
    )
}
