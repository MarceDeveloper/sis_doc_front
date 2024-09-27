import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    Button,
} from '@mui/material';
import { MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';

import { Navbar } from '../../../../components/Navbar/Navbar';
import { MdDescription } from 'react-icons/md';
import { Colores } from '../../../../config/config_style';
import { axios_ } from '../../../../axios/_axios';
import { ReactSwal } from '../../../../utils/ReactSwall/ReactSwall';
import moment from 'moment-timezone';




export const Reporte_Informe_Formato3 = () => {
    const [lst_recomendaciones, setLst_recomendaciones] = useState<any[]>([])
    const [type_request, set_type_request] = useState<"todos" | "por rango">("todos")
    const [init, set_init] = useState(0)
    const [fin, set_fin] = useState(0)
    useEffect(() => {

    }, [])

    const get_recomendaciones = async () => {
        setLst_recomendaciones([])
        if (type_request == "todos") {
            const res = await axios_.get("/api/informe_reporte_formato_3/all_years")
            console.log(res)
            setLst_recomendaciones(res.data.data)
        } else {
            if (!init || !fin) {
                ReactSwal.fire({icon:"error", text:"ingresa valores para inicio y fin"})
                return
            }
            const res = await axios_.get(`/api/informe_reporte_formato_3/by_range_years/${init}/${fin}`)
            setLst_recomendaciones(res.data.data)
            console.log(res)
        }
    }

    return (

        <Box>
            <Typography my={5} textAlign={"center"}>Formato 3 me RECOMENDACIONES EMITIDA POR LA DIRECCIÓN DE AUDITORIA INTERNA Y LA CONTRALORÍA GENERAL DEL ESTADO POR AÑO Y DE TODOS LOS AÑOS</Typography>
        
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FormControl >
                    <InputLabel id="filter-type-label">Seleccionar Filtro</InputLabel>
                    <Select
                        size='small'
                        labelId="filter-type-label"
                        id="filter-type"
                        value={type_request}
                        label="Seleccionar Filtro"
                        // onChange={(e)=>{console.log()}}
                        onChange={(e) => { set_type_request(e.target.value as any) }}
                    >
                        <MenuItem value="todos">Todos los años</MenuItem>
                        <MenuItem value="por rango">Por rango de años</MenuItem>
                    </Select>
                    {
                        type_request == "por rango" &&
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <TextField
                                size='small'
                                id="start-year"
                                label="Año de inicio"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={(e) => { set_init(Number(e.target.value)) }}
                                margin="normal"
                            />

                            <TextField
                                size='small'
                                id="end-year"
                                label="Año de fin"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={(e) => { set_fin(Number(e.target.value)) }}
                                margin="normal"
                            />

                        </Box>
                    }
                    <Button sx={{my:2}} variant='contained' onClick={() => { get_recomendaciones() }}>Buscar</Button>

                </FormControl>

            </Box>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell >RECOMENDACION</TableCell>
                            <TableCell >INFORME EMITIDO POR</TableCell>
                            <TableCell >JUSTIFICACIÓN DE NO ACEPTACIÓN</TableCell>
                            <TableCell >PLAZO DE IMPLEMENTACION</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            lst_recomendaciones.map((reco)=>(
                                <TableRow>
                                    <TableCell >{reco.titulo}</TableCell>
                                    <TableCell >{reco.informe.informe_de_1}</TableCell>
                                    <TableCell >se justifica por motivos sociales</TableCell>
                                    <TableCell >{moment(reco.plazo_de_implementacion).utc().format("DD-MM-YYYY")}</TableCell>

                                </TableRow>

                            ))
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
