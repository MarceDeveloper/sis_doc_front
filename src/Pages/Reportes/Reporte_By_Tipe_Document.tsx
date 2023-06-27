import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import {FiFileText } from 'react-icons/fi'
import { use_documentos } from '../../hooks/hooks_api/documento/use_documento'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import moment_time from 'moment-timezone'
import { DTO_documento } from '../../Model/DTO/DTO_Documento'
import { Filter_Documentos } from '../PruebaDocumento/Filter_Documentos'
import { Table_Documento } from '../PruebaDocumento/Table_Documento'


interface Data_Reporte {
    "nombre documento":string
    "version documento":number
    "fecha vigencia":string
    "codigo del documento":string
    "elaborado por":string
    "revisado por":string
    "aprobado por":string
    "aprobado con":string
    "numero de paginas":number
    "observaciones":string
    "estado documento":string
}

export const Reporte_By_Tipe_Document = () => {
    const {documentos,getAll_documentos,setDocmentos} = use_documentos()
    const [lst_documentos_filtrados, setlst_documentos_filtrados] = useState<DTO_documento[]>([])
    
    useEffect(() => {
        const getDocs = async ()=>{
            const lst = await getAll_documentos()
            setDocmentos(lst)
        }
        getDocs()
    }, [])
    

    const Formater_Data = (lst_documentos:DTO_documento[]):Data_Reporte[]=>{
        const lst_Data : Data_Reporte[] = lst_documentos.map((doc)=>{
            const data:Data_Reporte = {
                "aprobado con":doc.aprobado_con || "",
                "aprobado por":doc.aprobado_por || "",
                "codigo del documento":doc.codigo_del_documento,
                "elaborado por":doc.elaborado_por || "",
                "estado documento":doc.estado_documento,
                "fecha vigencia":moment_time.utc(doc.fecha_vigencia).format('DD-MM-YYYY') ,
                "nombre documento":doc.nombre_documento,
                "numero de paginas":doc.numero_de_paginas,
                "observaciones":doc.observaciones,
                "revisado por":doc.revisado_por || "",
                "version documento":doc.version_documento


            }
            return data
        })
        return lst_Data
    }
    const DescargarReporte = ()=>{
        const workbook = XLSX.utils.book_new();
        

        // Crear una hoja de cálculo de Excel
        //Hoja Todos
        const lst_all = Formater_Data(lst_documentos_filtrados)
        const worksheet = XLSX.utils.json_to_sheet(lst_all);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte todos');

        //Hoja estatuto
        const lst_docs_estatudo = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "estatuto"))
        const worksheet_estatuto = XLSX.utils.json_to_sheet(lst_docs_estatudo);
        XLSX.utils.book_append_sheet(workbook, worksheet_estatuto, 'Reporte estatuto');

        //Hoja codigo
        const lst_docs_codigo = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "codigo"))
        const worksheet_codigo = XLSX.utils.json_to_sheet(lst_docs_codigo);
        XLSX.utils.book_append_sheet(workbook, worksheet_codigo, 'Reporte codigo');
        
        //Hoja reglamento
        const lst_docs_reglamento = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "reglamento"))
        const worksheet_reglamento = XLSX.utils.json_to_sheet(lst_docs_reglamento);
        XLSX.utils.book_append_sheet(workbook, worksheet_reglamento, 'Reporte reglamento');

        //Hoja manual
        const lst_docs_manual = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "manual"))
        const worksheet_manual = XLSX.utils.json_to_sheet(lst_docs_manual);
        XLSX.utils.book_append_sheet(workbook, worksheet_manual, 'Reporte manual');

        //Hoja guia
        const lst_docs_guia = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "guia"))
        const worksheet_guia = XLSX.utils.json_to_sheet(lst_docs_guia);
        XLSX.utils.book_append_sheet(workbook, worksheet_guia, 'Reporte guia');

        //Hoja instructivo
        const lst_docs_instructivo = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "instructivo"))
        const worksheet_instructivo = XLSX.utils.json_to_sheet(lst_docs_instructivo);
        XLSX.utils.book_append_sheet(workbook, worksheet_instructivo, 'Reporte instructivo');

        //Hoja formato
        const lst_docs_formato = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "formato"))
        const worksheet_formato = XLSX.utils.json_to_sheet(lst_docs_formato);
        XLSX.utils.book_append_sheet(workbook, worksheet_formato, 'Reporte formato');
       
        //Hoja registro
        const lst_docs_registro = Formater_Data(lst_documentos_filtrados.filter((doc)=>doc.tipo_documento == "registro"))
        const worksheet_registro = XLSX.utils.json_to_sheet(lst_docs_registro);
        XLSX.utils.book_append_sheet(workbook, worksheet_registro, 'Reporte registro');

        // Generar el archivo Excel en formato de bytes
        const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        // Convertir los bytes en un Blob
        const excelBlob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Descargar el archivo
        saveAs(excelBlob, 'reporte_documentos.xlsx');
    }



    return (
        <div>
            <Navbar/>
            <Grid item xs={12} sm={12} justifyContent={'center'} alignItems={'center'} display={"flex"}>
                    <IconButton color='success' onClick={()=>{DescargarReporte()}}>
                        <Typography>Descargar Reporte</Typography>
                        <FiFileText fontSize="inherit" />
                    </IconButton>
               
                </Grid>
            <Filter_Documentos lst_documentos={documentos} onFilter={(lst)=>{setlst_documentos_filtrados(lst)}}/>

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
                            <TableCell>Tipo Documento</TableCell>
                            <TableCell>Elaborado por</TableCell>
                            <TableCell>Revisado por</TableCell>
                            <TableCell>Aprobado por</TableCell>
                            <TableCell>Aprobado con</TableCell>
                            <TableCell>Número de páginas</TableCell>
                            <TableCell>Observaciones</TableCell>
                            <TableCell>Formato físico</TableCell>

                        </TableRow>
                    
                    
                    </TableHead>
                    <TableBody >
                        {
                            Array.isArray(documentos) &&
                            lst_documentos_filtrados.map((doc) => (
                                <TableRow key={doc.id_documento}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell className='customTableRowBody'>{doc.nombre_documento}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc?.version_documento}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc?.reparticion?.nombre}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc?.estado_documento == "NO_VIGENTE" ? "NO VIGENTE" :doc?.estado_documento  }</TableCell>
                                    <TableCell className='customTableRowBody'>{moment_time.utc(doc.fecha_vigencia).format('DD-MM-YYYY')}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.codigo_del_documento}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.tipo_documento}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.elaborado_por}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.revisado_por}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.aprobado_por}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.aprobado_con}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.numero_de_paginas}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.observaciones}</TableCell>
                                    <TableCell className='customTableRowBody'>{doc.formato_fisico ? "si" : "no"}</TableCell>
                                    
                                </TableRow>
                            ))
                        }
                        <TableRow></TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
