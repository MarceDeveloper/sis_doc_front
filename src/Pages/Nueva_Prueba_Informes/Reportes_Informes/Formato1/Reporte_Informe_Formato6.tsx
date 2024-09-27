import React from 'react'
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





export const Reporte_Informe_Formato6 = () => {

    return (

        <Box>
            <Typography my={5} textAlign={"center"}>Formtao 6 TAREAS PENDIENTES, EN PROCESO DESCARGADA O LEVANTADA, QUE SE PUEDA SACAR EL REPORTE POR CADA UNO Y POR TODOS LOS ESTADOS</Typography>

            <Box sx={{display:"flex",justifyContent:"center"}}>
                <FormControl fullWidth>
                    <InputLabel id="filter-type-label">Seleccionar Filtro Estado de Tareas</InputLabel>
                    <Select
                        size='small'
                        labelId="filter-type-label"
                        id="filter-type"
                        // value={""}
                        label="Seleccionar Filtro Estado de Tareas"
                    // onChange={handleChange}
                    >
                        <MenuItem value="PENDIENTES">PENDIENTES</MenuItem>
                        <MenuItem value="EN PROCESO">EN PROCESO</MenuItem>
                        <MenuItem value="DESCARGADA">DESCARGADA</MenuItem>
                        <MenuItem value="LEVANTADA">LEVANTADA</MenuItem>

                        
                    </Select>
                
                </FormControl>

            </Box>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell >RECOMENDACION</TableCell>
                            <TableCell >INFORME EMITIDO POR</TableCell>
                            <TableCell >JUSTIFICACIÓN DE NO ACEPTACIÓN</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell >descripcion 12312312312</TableCell>
                            <TableCell >si</TableCell>
                            <TableCell >se justifica por motivos sociales</TableCell>

                        </TableRow>


                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
