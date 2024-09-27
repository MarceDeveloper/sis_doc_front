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
} from '@mui/material';
import { Navbar } from '../../../../components/Navbar/Navbar';
import { MdDescription } from 'react-icons/md';
import { Colores } from '../../../../config/config_style';




export const Reporte_Informe_Formato1 = () => {


    return (

        <Box>
            <Typography my={5} textAlign={"center"}>Formato 1 (POR INFORME) Informacion sobre la aceptacion</Typography>
            <Typography>Informeacion de la recomendacion :Nombre y numero</Typography>

            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell >DESCRIPCION</TableCell>
                            <TableCell >ACEPTACIÓN</TableCell>
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
