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
    Grid
} from '@mui/material';
import { MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';

import { Navbar } from '../../../../components/Navbar/Navbar';
import { MdDescription } from 'react-icons/md';
import { Colores } from '../../../../config/config_style';



export const Reporte_Informe_Formato7 = () => {

    return (

        <Box>
            <Typography my={5} textAlign={"center"}>Formtao 7 TAREAS PENDIENTES POR SECRETARIA, AREA Y FUNCIONARIO</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="filter-type-label1">Secretaria</InputLabel>
                        <Select
                            size='small'
                            labelId="filter-type-label1"
                            id="filter-type1"
                            label="Secretaria"
                        >
                            <MenuItem value="PENDIENTES">PENDIENTES</MenuItem>
                            <MenuItem value="EN PROCESO">EN PROCESO</MenuItem>
                            <MenuItem value="DESCARGADA">DESCARGADA</MenuItem>
                            <MenuItem value="LEVANTADA">LEVANTADA</MenuItem>
                        </Select>

                    </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="filter-type-label2">Reparticion</InputLabel>
                        <Select
                            size='small'
                            labelId="filter-type-label2"
                            id="filter-type2"
                            label="Reparticion"
                        >
                            <MenuItem value="SECRETARIA 1">SECRETARIA 1</MenuItem>
                            <MenuItem value="SECRETARIA 2">SECRETARIA 2</MenuItem>
                            <MenuItem value="SECRETARIA 3">SECRETARIA 3</MenuItem>
                            <MenuItem value="SECRETARIA 4">SECRETARIA 4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel id="filter-type-label3">Reparticion</InputLabel>
                        <Select
                            size='small'
                            labelId="filter-type-label3"
                            id="filter-type3"
                            label="Seleccionar Filtro"
                        >
                            <MenuItem value="REPARTICION 1">REPARTICION 1</MenuItem>
                            <MenuItem value="REPARTICION 2">REPARTICION 2</MenuItem>
                            <MenuItem value="REPARTICION 3">REPARTICION 3</MenuItem>
                            <MenuItem value="REPARTICION 4">REPARTICION 4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Button variant='contained' sx={{ marginTop: 2, marginBottom: 2 }}>
                Buscar
            </Button>
            <Typography sx={{color:"red"}}> Como buscar por funcionario ?</Typography>
            {/* <FormControl fullWidth>
            </FormControl> */}
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
