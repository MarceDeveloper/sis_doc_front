// // src/components/Reporte_2.tsx
// import React, { useEffect, useState } from 'react';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
// import { useParams } from 'react-router-dom';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     CircularProgress,
//     Typography,
//     Box,
//     IconButton,
//     Tooltip
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { DTO_reporte_formato_2 } from '../../api/DTO_Seguimiento/DTO_format_2';
// import { Navbar } from '../Navbar/Navbar';

// export const Reporte_2: React.FC<{}> = () => {
//     const { id_informe } = useParams<{ id_informe: string }>();
//     const informeId = id_informe ? parseInt(id_informe, 10) : 0;

//     const [informe, setInforme] = useState<DTO_reporte_formato_2 | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await service_reporte_seguimiento_informes.get_formato_2(informeId);
//                 setInforme(data);
//             } catch (err) {
//                 setError('Error al cargar el reporte');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [informeId]);

//     const handlePrint = () => {
//         const printButton = document.getElementById('printButton');
//         if (printButton) {
//             printButton.style.display = 'none';
//         }
//         window.print();
//         if (printButton) {
//             printButton.style.display = 'block';
//         }
//     };

//     if (loading) {
//         return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><CircularProgress /></div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!informe) {
//         return <div>No se encontró el informe</div>;
//     }

//     return (
//         <>
//             <Navbar />
//             <div style={{ padding: '20px' }}>
//                 {/* <Typography variant="h4" gutterBottom>{informe.titulo}</Typography>
//                 <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
//                 <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography>
//                 <Typography variant="h5" style={{ marginTop: '20px' }}>Recomendaciones</Typography> */}

//                 <Typography variant="h4" gutterBottom align="center">Formato II</Typography>
//                 <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE CUMPLIMIENTO DE RECOMENDACIONES</Typography>

//                 <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
//                 <Typography variant="h6"><strong>Informe de {informe.tipo_informe_2.toLowerCase()}:</strong> {informe.titulo}</Typography>
//                 <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong> {informe.numero_informe}</Typography>

//                 <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
//                 <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography>

//                 <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//                     <Table style={{ border: '1px solid black' }}>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell style={{ border: '1px solid black', width: '5%' }}><strong>Nº Rec</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '20%' }}><strong>Recomendación</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '10%' }}><strong>Periodo de Implantación</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '15%' }}><strong>Responsables</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Firmas</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Tareas a Desarrollar en la Implantación</strong></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {informe.recomendaciones.map((rec, recIndex) => (
//                                 rec.descripcion.map((desc, descIndex) => (
//                                     desc.tareas.map((tarea, tareaIndex) => (
//                                         tarea.responsables.map((resp, respIndex) => (
//                                             <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}-${respIndex}`}>
//                                                 {tareaIndex === 0 && descIndex === 0 && respIndex === 0 && (
//                                                     <TableCell rowSpan={rec.descripcion.reduce((acc, curr) => acc + curr.tareas.reduce((tAcc, tCurr) => tAcc + tCurr.responsables.length, 0), 0)} style={{ border: '1px solid black' }}>
//                                                         {rec.numero_de_recomendacion}
//                                                     </TableCell>
//                                                 )}
//                                                 {tareaIndex === 0 && respIndex === 0 && (
//                                                     <TableCell rowSpan={desc.tareas.reduce((acc, curr) => acc + curr.responsables.length, 0)} style={{ border: '1px solid black' }}>
//                                                         {rec.titulo}
//                                                     </TableCell>
//                                                 )}
//                                                 {tareaIndex === 0 && respIndex === 0 && (
//                                                     <TableCell rowSpan={desc.tareas.reduce((acc, curr) => acc + curr.responsables.length, 0)} style={{ border: '1px solid black' }}>
//                                                         {new Date(rec.plazo_de_implementacion).toLocaleDateString()}
//                                                     </TableCell>
//                                                 )}
//                                                 <TableCell style={{ border: '1px solid black', textAlign: "center" }}>
//                                                     <div>{resp.nombreResponsable}</div>
//                                                     <div style={{ fontWeight: "bold" }}>{resp.cargoResponsable}</div>
//                                                     {/* <span>{resp.nombreResponsable}</span> */}
//                                                     {/* <span style={{fontWeight:"bold"}}>{resp.cargoResponsable}</span> */}
//                                                     {/* {resp.nombreResponsable} - {resp.cargoResponsable} */}
//                                                 </TableCell>
//                                                 <TableCell style={{ border: '1px solid black' }}>
//                                                     <div style={{ height: '30px', borderBottom: '1px solid black', marginTop: '5px' }}>Firma</div>
//                                                 </TableCell>
//                                                 {respIndex === 0 && (
//                                                     <TableCell rowSpan={tarea.responsables.length} style={{ border: '1px solid black' }}>
//                                                         {tarea.textoTarea}
//                                                     </TableCell>
//                                                 )}
//                                             </TableRow>
//                                         ))
//                                     ))
//                                 ))
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <Tooltip title="Imprimir informe" arrow>
//                     <IconButton
//                         id="printButton"
//                         onClick={handlePrint}
//                         style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//                     >
//                         <PrintIcon />
//                     </IconButton>
//                 </Tooltip>
//             </div>
//         </>
//     );
// };







import React, { useEffect, useState } from 'react';
import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
import { useParams } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Typography,
    Box,
    IconButton,
    Tooltip
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { DTO_reporte_formato_2 } from '../../api/DTO_Seguimiento/DTO_format_2';
import { Navbar } from '../Navbar/Navbar';

export const Reporte_2: React.FC<{}> = () => {
    const { id_informe } = useParams<{ id_informe: string }>();
    const informeId = id_informe ? parseInt(id_informe, 10) : 0;

    const [informe, setInforme] = useState<DTO_reporte_formato_2 | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service_reporte_seguimiento_informes.get_formato_2(informeId);
                setInforme(data);
            } catch (err) {
                setError('Error al cargar el reporte');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [informeId]);

    const handlePrint = () => {
        const printButton = document.getElementById('printButton');
        if (printButton) {
            printButton.style.display = 'none';
        }
        window.print();
        if (printButton) {
            printButton.style.display = 'block';
        }
    };

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><CircularProgress /></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!informe) {
        return <div>No se encontró el informe</div>;
    }

    return (
        <>
            <Navbar />
            <div style={{ padding: '20px' }} id="printableContent">
                <Typography variant="h4" gutterBottom align="center">Formato II</Typography>
                <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE CUMPLIMIENTO DE RECOMENDACIONES</Typography>

                <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
                <Typography variant="h6"><strong>Informe de {informe.tipo_informe_2.toLowerCase()}:</strong> {informe.titulo}</Typography>
                <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong></Typography>
{/* 
                <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
                <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography> */}

                <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                    <Table style={{ border: '1px solid black' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: '1px solid black', width: '5%' }}><strong>Nº Rec</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '20%' }}><strong>Recomendación</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '10%' }}><strong>Periodo de Implantación</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '15%' }}><strong>Responsables</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '15%' }}><strong>Firmas</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Tareas a Desarrollar en la Implantación</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {informe.recomendaciones.map((rec, recIndex) => (
                                rec.descripcion.map((desc, descIndex) => (
                                    desc.tareas.map((tarea, tareaIndex) => (
                                        tarea.responsables.map((resp, respIndex) => (
                                            <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}-${respIndex}`}>
                                                {tareaIndex === 0 && descIndex === 0 && respIndex === 0 && (
                                                    <TableCell rowSpan={rec.descripcion.reduce((acc, curr) => acc + curr.tareas.reduce((tAcc, tCurr) => tAcc + tCurr.responsables.length, 0), 0)} style={{ border: '1px solid black' }}>
                                                        {rec.numero_de_recomendacion}
                                                    </TableCell>
                                                )}
                                                {tareaIndex === 0 && respIndex === 0 && (
                                                    <TableCell rowSpan={desc.tareas.reduce((acc, curr) => acc + curr.responsables.length, 0)} style={{ border: '1px solid black' }}>
                                                        {rec.titulo}
                                                    </TableCell>
                                                )}
                                                {tareaIndex === 0 && respIndex === 0 && (
                                                    <TableCell rowSpan={desc.tareas.reduce((acc, curr) => acc + curr.responsables.length, 0)} style={{ border: '1px solid black' }}>
                                                        {new Date(rec.plazo_de_implementacion).toLocaleDateString()}
                                                    </TableCell>
                                                )}
                                                <TableCell style={{ border: '1px solid black', textAlign: "center" }}>
                                                    <div>{resp.nombreResponsable}</div>
                                                    <div style={{ fontWeight: "bold" }}>{resp.cargoResponsable}</div>
                                                </TableCell>
                                                <TableCell style={{ border: '1px solid black' }}>
                                                    <div style={{ height: '30px', borderBottom: '1px solid black', marginTop: '5px' }}>Firma</div>
                                                </TableCell>
                                                {respIndex === 0 && (
                                                    <TableCell rowSpan={tarea.responsables.length} style={{ border: '1px solid black' }}>
                                                        {tarea.textoTarea}
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        ))
                                    ))
                                ))
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Typography variant="h6">______________________________</Typography>
                    <Typography variant="h6">Firma del Rector UAJMS</Typography>
                </div>
            </div>

            <Tooltip title="Imprimir informe" arrow>
                <IconButton
                    id="printButton"
                    onClick={handlePrint}
                    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
                >
                    <PrintIcon />
                </IconButton>
            </Tooltip>
        </>
    );
};
