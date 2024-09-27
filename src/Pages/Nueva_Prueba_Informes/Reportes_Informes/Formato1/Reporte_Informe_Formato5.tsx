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




export const Reporte_Informe_Formato5 = () => {


    return (

        <Box>
            <Typography my={5} textAlign={"center"}>Formtao 5 RECOMENDACIONES EMITIDA POR LA CONTRALORÍA GENERAL DEL ESTADO POR AÑO Y DE TODOS LOS AÑOS</Typography>

            <Box sx={{display:"flex",justifyContent:"center"}}>
                <FormControl >
                    <InputLabel id="filter-type-label">Seleccionar Filtro</InputLabel>
                    <Select
                        size='small'
                        labelId="filter-type-label"
                        id="filter-type"
                        // value={""}
                        label="Seleccionar Filtro"
                    // onChange={handleChange}
                    >
                        <MenuItem value="allYears">Todos los años</MenuItem>
                        <MenuItem value="range">Por rango de años</MenuItem>
                    </Select>
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
                            margin="normal"
                        />
                        <Button variant='contained'>Buscar</Button>

                    </Box>
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
