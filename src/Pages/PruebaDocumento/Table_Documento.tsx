import { Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Theme, createStyles, TableContainer, Paper, Button, selectClasses } from '@mui/material';
import { DTO_documento } from '../../Model/DTO/DTO_Documento';
import moment_time from 'moment-timezone'
import { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';
import {AiFillDelete,AiOutlineFileWord} from 'react-icons/ai'
import {FcCancel} from 'react-icons/fc'
import {BsFiletypePdf} from 'react-icons/bs'
import {FaLevelUpAlt} from 'react-icons/fa'
import {GrUpdate} from 'react-icons/gr'
import { useStore_sesion } from '../../store/store_sesion';
import { error_message_api } from '../../utils/message_error_api';




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



    interface Iprops{
        
      }

interface Iprops {
    type_route : "public" | "private"
    documentos: DTO_documento[],
    delete_documento: (id_documento: number, usuario: string, contrasena: string) => Promise<AxiosResponse<any, any>>
    anular_documento: (id_documento: number, usuario: string, contrasena: string) => Promise<AxiosResponse<any, any>>
    setdoc_selec_for_update: (doc: DTO_documento) => void
    DescargarDocumento: (file_name: string) => Promise<void>
    setaccion_form: React.Dispatch<React.SetStateAction<"crear" | "actualizar" | "nueva_version">>
}
export const Table_Documento = ({ documentos,delete_documento,anular_documento,setdoc_selec_for_update ,DescargarDocumento,setaccion_form, type_route}: Iprops) => {
    const {usuario} = useStore_sesion()

    const confirmarEliminacionDocumento = (id:number) => {
            Swal.fire({
            title: 'Ingrese la contraseña para eliminar el documento',
            input: 'password',
            icon:"warning",
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            customClass: {
              container: 'my-swal-container', // Nombre de la clase CSS personalizada
            },
          }).then(async (result) => {
            try {
                await delete_documento(id,usuario?.usuario || "" ,result.value)
            } catch (error) {
                Swal.fire({title:"Error" ,text:error_message_api(error),icon:"error",timer:2000})

            }
            
        });
        // Swal.fire({
        //   title: '¿Estás seguro?',
        //   text: 'Esta acción eliminará el documento de forma permanente.',
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Sí, eliminar',
        //   cancelButtonText: 'Cancelar'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     delete_documento(id)
        //   }
        // });
    }
    const confirmarAnularDocumento = (id:number) => {
        // Swal.fire({
        //   title: '¿Estás seguro?',
        //   text: 'Esta acción anulara el documento de forma permanente.',
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Sí, Anular',
        //   cancelButtonText: 'Cancelar'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     anular_documento(id)
        //   }
        // });
        Swal.fire({
            title: 'Ingrese la contraseña para anular el documento',
            input: 'password',
            icon:"warning",
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            customClass: {
              container: 'my-swal-container', // Nombre de la clase CSS personalizada
            },
          }).then(async (result) => {
            try {
                await anular_documento(id,usuario?.usuario || "" ,result.value)
            } catch (error) {
                Swal.fire({title:"Error" ,text:error_message_api(error),icon:"error",timer:2000})

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
                    <TableCell>Estado Documento</TableCell>
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
                            <TableCell className='customTableRowBody'>{doc?.estado_documento == "NO_VIGENTE" ? "NO VIGENTE" :doc?.estado_documento  }</TableCell>
                            <TableCell className='customTableRowBody'>{moment_time.utc(doc.fecha_vigencia).format('DD-MM-YYYY')}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.codigo_del_documento}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.estatuto ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.codigo ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.reglamento ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.manual ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.guia ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.instructivo ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.formato ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.registro ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.elaborado_por ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.revisado_por}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.aprobado_por}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.aprobado_con}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.numero_de_paginas}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.observaciones}</TableCell>
                            <TableCell className='customTableRowBody'>{doc.formato_fisico ? "si" : "no"}</TableCell>
                            <TableCell className='customTableRowBody'>
                                <Button size='small' sx={{mr:1}} onClick={() => {DescargarDocumento(doc.url_file_pdf)}} variant='outlined' color='error'><BsFiletypePdf/></Button>
                                {
                                    type_route == "private" &&
                                    <Button size='small' sx={{mr:1}} onClick={() => {DescargarDocumento(doc.url_file_word)}} variant='outlined' color='info'><AiOutlineFileWord/></Button>
                                }
                                {
                                    doc.estado_documento == "VIGENTE" && type_route == "private" &&
                                    <Button size='small' sx={{mr:1}} variant='outlined' color='error'
                                        onClick={() => {confirmarAnularDocumento(doc.id_documento)}}
                                    >
                                        <FcCancel/>
                                    </Button>
                                }
                                {
                                    doc.estado_documento == "VIGENTE" && type_route == "private" &&
                                    <Button size='small' sx={{mr:1}} variant='outlined' color='success'
                                        onClick={() => {
                                            setdoc_selec_for_update(doc)
                                            setaccion_form("nueva_version")
                                        }}
                                    >
                                        <FaLevelUpAlt/>
                                    </Button>
                                }
                                {
                                    doc.estado_documento == "VIGENTE" && type_route == "private" &&
                                    <Button size='small' sx={{mr:1}} onClick={() => {confirmarEliminacionDocumento(doc.id_documento)}} variant='outlined' color='error'><AiFillDelete/></Button>
                                }
                                {
                                    doc.estado_documento == "VIGENTE" && type_route == "private" &&
                                    <Button size='small' sx={{ml:1}}  variant='outlined' color='info'
                                        onClick={() => {
                                            setdoc_selec_for_update(doc)
                                            setaccion_form("actualizar")
                                        }}
                                    >
                                        <GrUpdate/>
                                    </Button>
                                }
                                
                               
                                
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
