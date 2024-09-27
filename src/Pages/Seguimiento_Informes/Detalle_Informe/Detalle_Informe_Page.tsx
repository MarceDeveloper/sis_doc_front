import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
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
import { DTO_lst_informes } from '../../../api/DTO_Seguimiento/DTO_lst_informes'
import moment from 'moment-timezone';
// import { Informe_PDF } from './PDF_informe_1';
import { PDFViewer } from '@react-pdf/renderer';

type Informe = DTO_lst_informes["data"][0]


export const Detalle_Informe_Page = () => {
  const params = useParams()
  // const { state: { informe } } = useLocation()
  const { state } = useLocation();
  const informe: Informe = state?.informe;

  console.log(informe)

  if (!informe) {
    return <h1>error</h1>
  }

  const RenderEstado_Recomendacion = (estado: string,fecha:string | Date) => {
    const fechaActual = new Date();
    const fechaObjetivo = new Date(fecha);
    
    const diferenciaEnMilisegundos = fechaObjetivo.getTime() - fechaActual.getTime();
    
    // Calcular la diferencia en días
    const diasRestantes = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));


    let estado_string = "pendiente"
    let color = "#fff"
    
    if (diasRestantes >= 60) {
      color = "#eb8d09"
      estado_string="pendiente"
    }else if(diasRestantes >= 30){
      color = "#f5e568"
      estado_string="proceso"

    }else if (diasRestantes >= 20 ) {
      estado_string="descargada"
      color = "#1a7e13"
    }else{
      color = "#2a7a90"
      estado_string="levantada"

    }





    // let color = "#fff"
    // switch (estado) {
    //   case "pendiente":
    //     color = "#eb8d09"
    //     break;
    //   case "proceso":
    //     color = "#f5e568"
    //     break;
    //   case "descargada":
    //     color = "#1a7e13"
    //     break;
    //   case "levantada":
    //     color = "#2a7a90"
    //     break;
    //   default:
    //     color = "#fff"
    //     break;
    // }
    return <TableCell className='customTableRowBody' sx={{ backgroundColor: color }}>{estado}</TableCell>
  }



  return (
    <div>
      {/* <div style={{ height: 1800, width: "100%", }}>
        <PDFViewer showToolbar width={"100%"} height={600}>
          <Informe_PDF informe={informe} />
        </PDFViewer>

      </div> */}

      <Box sx={{ maxWidth: ["100%", "90%"], mx: "auto", mt: 2 }}>
        <Typography variant="h4">Detalles del Informe</Typography>
        <p><strong>Título del Informe:</strong> {informe.titulo}</p>
        <p><strong>Fecha de Recepción:</strong> {moment(informe.fecha_de_recepcion).utc().format("DD-MM-YYYY")}</p>
        <p><strong>Número de Informe:</strong> {informe.numero_informe}</p>
        <p><strong>Estado:</strong> {informe.estado}</p>
        <p><strong>Informe de:</strong> {informe.informe_de}</p>
        <p><strong>Tipo de Informe:</strong> {informe.tipo_de_informe}</p>

      </Box>

      <Box sx={{ maxWidth: ["100%", "90%"], mx: "auto", mt: 2 }}>
        <Typography variant="h5">Recomendaciones</Typography>
        <TableContainer component={Paper} aria-label="simple table">
          <Table className='customTable' size='small'>
            <TableHead>
              <TableRow className='customTableRowHead'>
                <TableCell >Título</TableCell>
                <TableCell >Aceptación</TableCell>
                <TableCell >Antecedentes</TableCell>
                <TableCell >Comentario</TableCell>
                <TableCell >Descripción</TableCell>
                <TableCell >Estado</TableCell>
                <TableCell >Estado Recomendación</TableCell>
                <TableCell >Número de Recomendación</TableCell>
                <TableCell >Plazo de Implementación</TableCell>
                <TableCell >Tareas</TableCell>
                <TableCell >Acciones por la mae</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {informe.recomendacion.map((recomendacion) => (
                <TableRow key={recomendacion.numero_de_recomendacion}>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{recomendacion.titulo}</TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{recomendacion.aceptacion ? 'Sí' : 'No'}</TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{recomendacion.antecedentes}</TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{recomendacion.comentario}</TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{recomendacion.descripcion}</TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{recomendacion.estado}</TableCell>
                  {RenderEstado_Recomendacion(recomendacion.estado_recomendacion,recomendacion.plazo_de_implementacion)}
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >{"revisar plazo de implementacion"}</TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}} >
                    <ul>
                      {recomendacion.tarea.map((tarea) => (
                        <li key={tarea.descripcion}>{tarea.descripcion}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell  className='customTableRowBody ' style={{whiteSpace:"normal",verticalAlign:"top"}}>
                    <ul>
                      {recomendacion.accion_por_la_mae.map((accion_mae) => (
                        <li key={accion_mae.id}>{accion_mae.accion}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>


    </div>
  )
}
