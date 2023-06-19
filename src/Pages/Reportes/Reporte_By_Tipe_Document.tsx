import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import {FiFileText } from 'react-icons/fi'
import { use_documentos } from '../../hooks/hooks_api/documento/use_documento'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import moment_time from 'moment-timezone'
import { DTO_documento } from '../../Model/DTO/DTO_Documento'


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
    const {documentos} = use_documentos()

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
        const lst_all = Formater_Data(documentos)
        const worksheet = XLSX.utils.json_to_sheet(lst_all);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte todos');

        //Hoja estatuto
        const lst_docs_estatudo = Formater_Data(documentos.filter((doc)=>doc.estatuto == true))
        const worksheet_estatuto = XLSX.utils.json_to_sheet(lst_docs_estatudo);
        XLSX.utils.book_append_sheet(workbook, worksheet_estatuto, 'Reporte estatuto');

        //Hoja codigo
        const lst_docs_codigo = Formater_Data(documentos.filter((doc)=>doc.codigo == true))
        const worksheet_codigo = XLSX.utils.json_to_sheet(lst_docs_codigo);
        XLSX.utils.book_append_sheet(workbook, worksheet_codigo, 'Reporte codigo');
        
        //Hoja reglamento
        const lst_docs_reglamento = Formater_Data(documentos.filter((doc)=>doc.reglamento == true))
        const worksheet_reglamento = XLSX.utils.json_to_sheet(lst_docs_reglamento);
        XLSX.utils.book_append_sheet(workbook, worksheet_reglamento, 'Reporte reglamento');

        //Hoja manual
        const lst_docs_manual = Formater_Data(documentos.filter((doc)=>doc.manual == true))
        const worksheet_manual = XLSX.utils.json_to_sheet(lst_docs_manual);
        XLSX.utils.book_append_sheet(workbook, worksheet_manual, 'Reporte manual');

        //Hoja guia
        const lst_docs_guia = Formater_Data(documentos.filter((doc)=>doc.guia == true))
        const worksheet_guia = XLSX.utils.json_to_sheet(lst_docs_guia);
        XLSX.utils.book_append_sheet(workbook, worksheet_guia, 'Reporte guia');

        //Hoja instructivo
        const lst_docs_instructivo = Formater_Data(documentos.filter((doc)=>doc.instructivo == true))
        const worksheet_instructivo = XLSX.utils.json_to_sheet(lst_docs_instructivo);
        XLSX.utils.book_append_sheet(workbook, worksheet_instructivo, 'Reporte instructivo');

        //Hoja formato
        const lst_docs_formato = Formater_Data(documentos.filter((doc)=>doc.formato == true))
        const worksheet_formato = XLSX.utils.json_to_sheet(lst_docs_formato);
        XLSX.utils.book_append_sheet(workbook, worksheet_formato, 'Reporte formato');
       
        //Hoja registro
        const lst_docs_registro = Formater_Data(documentos.filter((doc)=>doc.registro == true))
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
            <Grid mt={1} container spacing={2} >
              
                <Grid item xs={12} sm={12} justifyContent={'center'} alignItems={'center'} display={"flex"}>
                    <IconButton onClick={()=>{DescargarReporte()}}>
                        <Typography>Descargar Reporte</Typography>
                        <FiFileText fontSize="inherit" />
                    </IconButton>
               
                </Grid>
            </Grid>
        </div>
    )
}
