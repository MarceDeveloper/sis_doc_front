import { Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Theme, createStyles, TableContainer, Paper, Button, selectClasses } from '@mui/material';
import { DTO_documento } from '../../Model/DTO/DTO_Documento';
import moment_time from 'moment-timezone'
import { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';
import {AiFillDelete} from 'react-icons/ai'
import {TfiWrite} from 'react-icons/tfi'

const styles = (theme: Theme) =>
    createStyles({
        table: {
            tableLayout: 'fixed',
        },
        tableHeader: {
            position: 'sticky',
            top: 0,
            backgroundColor: theme.palette.background.paper,
            zIndex: theme.zIndex.appBar,
        },
    });




interface Iprops {
    documentos: DTO_documento[],
    delete_documento: (data: any) => Promise<AxiosResponse<any, any>>
    setdoc_selec_for_update: (doc: DTO_documento) => void
}
export const Table_Documento = ({ documentos,delete_documento,setdoc_selec_for_update }: Iprops) => {

    const confirmarEliminacionDocumento = (id:number) => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esta acción eliminará el documento de forma permanente.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            delete_documento(id)
          }
        });
    }
    return (
        <TableContainer component={Paper}>
        <Table  size='small' border={2} sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow className='customTableRowHead'>
                    <TableCell>Nombre documento</TableCell>
                    <TableCell>Version</TableCell>
                    <TableCell>Reparticion</TableCell>
                    <TableCell>Fecha vigencia</TableCell>
                    <TableCell>Codigo del documento</TableCell>
                    <TableCell>Estatuto</TableCell>
                    <TableCell>Código</TableCell>
                    <TableCell>Reglamento</TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>Guía</TableCell>
                    <TableCell>Instructivo</TableCell>
                    <TableCell>Formato</TableCell>
                    <TableCell>Registro</TableCell>
                    <TableCell>Elaborado por</TableCell>
                    <TableCell>Revisado por</TableCell>
                    <TableCell>Aprobado por</TableCell>
                    <TableCell>Aprobado con</TableCell>
                    <TableCell>Número de páginas</TableCell>
                    <TableCell>Observaciones</TableCell>
                    <TableCell>Formato físico</TableCell>
                    <TableCell>ACCIONES</TableCell>

                </TableRow>
              
             
            </TableHead>
            <TableBody >
                {
                    Array.isArray(documentos) &&
                    documentos.map((doc) => (
                        <TableRow key={doc.id_documento}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* <TableCell component="th" scope="row">{doc.nombre_documento}</TableCell> */}
                            <TableCell className='customTableRowBody'>{doc.nombre_documento}</TableCell>
                            <TableCell className='customTableRowBody'>{doc?.version_documento}</TableCell>
                            <TableCell className='customTableRowBody'>{doc?.reparticion?.nombre}</TableCell>
                            <TableCell className='customTableRowBody'>{moment_time.utc(doc.fecha_vigencia).format('YYYY-MM-DD')}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.codigo_del_documento +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.estatuto +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.codigo +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.reglamento +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.manual +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.guia +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.instructivo +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.formato +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.registro +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.elaborado_por +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.revisado_por +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.aprobado_por +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.aprobado_con +""}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.numero_de_paginas}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.observaciones}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.formato_fisico +""}</TableCell>
                            <TableCell className='customTableRowBody'>
                                <Button size='small' sx={{mr:1}} onClick={() => {confirmarEliminacionDocumento(doc.id_documento)}} variant='outlined' color='error'><AiFillDelete/></Button>
                                <Button size='small' sx={{ml:1}} onClick={() => {setdoc_selec_for_update(doc)}} variant='outlined' color='info'><TfiWrite/></Button>

                            </TableCell>
                        </TableRow>
                    ))
                }
                <TableRow></TableRow>

            </TableBody>
        </Table>
        </TableContainer>
    );
};
