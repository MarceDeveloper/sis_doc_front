// import React, { useEffect, useState } from 'react';
// import { DTO_reporte_formato_1 } from '../../api/DTO_Seguimiento/DTO_formato_1';
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
//     Button,
//     IconButton,
//     Tooltip
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';

// export const Reporte_1: React.FC<{}> = () => {
//     const { id_informe } = useParams<{ id_informe: string }>();
//     const informeId = id_informe ? parseInt(id_informe, 10) : 0;

//     const [informe, setInforme] = useState<DTO_reporte_formato_1 | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await service_reporte_seguimiento_informes.get_formato_1(informeId);
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
//         // Ocultar el botón de impresión temporalmente antes de imprimir
//         const printButton = document.getElementById('printButton');
//         if (printButton) {
//             printButton.style.display = 'none';
//         }
//         window.print();
//         // Restaurar la visibilidad del botón de impresión después de imprimir
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
//         <div style={{ padding: '20px' }}>
//             <Typography variant="h4" gutterBottom>{informe.titulo}</Typography>
//             <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
//             <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography>
//             <Typography variant="h5" style={{ marginTop: '20px' }}>Recomendaciones</Typography>
//             {informe.recomendaciones.map((rec, index) => (
//                 <Box key={index} mb={2}>
//                     <Typography variant="subtitle1" color="primary">Nº {rec.numero_de_recomendacion} {rec.titulo}</Typography>
//                     <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell><strong>Título</strong></TableCell>
//                                     <TableCell><strong>Texto</strong></TableCell>
//                                     <TableCell><strong>Aceptación</strong></TableCell>
//                                     <TableCell><strong>Justificación de No Aceptación</strong></TableCell>
//                                     {/* <TableCell><strong>Estado</strong></TableCell>
//                                     <TableCell><strong>Estado de Descripción</strong></TableCell> */}
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {rec.descripcion.map((desc, idx) => (
//                                     <TableRow key={idx}>
//                                         <TableCell>{desc.titulo}</TableCell>
//                                         <TableCell>{desc.texto}</TableCell>
//                                         <TableCell>{desc.aceptacion ? 'Sí' : 'No'}</TableCell>
//                                         <TableCell>{desc.justificacion_no_aceptacion}</TableCell>
//                                         {/* <TableCell>{desc.estado}</TableCell>
//                                         <TableCell>{desc.estado_descripcion}</TableCell> */}
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </Box>
//             ))}
//             <Tooltip title="Imprimir informe" arrow>
//                 <IconButton
//                     id="printButton"
//                     onClick={handlePrint}
//                     style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//                 >
//                     <PrintIcon />
//                 </IconButton>
//             </Tooltip>
//         </div>
//     );
// };




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
// import { DTO_reporte_formato_1 } from '../../api/DTO_Seguimiento/DTO_formato_1';
// import { Navbar } from '../Navbar/Navbar';

// export const Reporte_1: React.FC<{}> = () => {
//     const { id_informe } = useParams<{ id_informe: string }>();
//     const informeId = id_informe ? parseInt(id_informe, 10) : 0;

//     const [informe, setInforme] = useState<DTO_reporte_formato_1 | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await service_reporte_seguimiento_informes.get_formato_1(informeId);
//                 console.log({ data })
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
//                 <Typography variant="h4" gutterBottom>{informe.titulo}</Typography>

//                 <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
//                 <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography>
//                 <Typography variant="h5" style={{ marginTop: '20px' }}>Recomendaciones</Typography>
//                 <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//                     <Table style={{ border: '1px solid black' }}>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell style={{ border: '1px solid black', width: '15%' }}><strong>Nº</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '35%' }}><strong>Recomendación</strong></TableCell>
//                                 {/* <TableCell style={{ border: '1px solid black', width: '35%' }}><strong>Descripción</strong></TableCell> */}
//                                 <TableCell style={{ border: '1px solid black', width: '30%' }}><strong>Aceptación</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '30%' }}><strong>Justificación</strong></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {informe.recomendaciones.map((rec, index) => (
//                                 <React.Fragment key={index}>
//                                     {rec.descripcion.map((desc, idx) => (
//                                         <TableRow key={`${index}-${idx}`}>
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }} rowSpan={rec.descripcion.length}>{rec.numero_de_recomendacion}</TableCell>

//                                             {/* Mostramos la recomendación solo en la primera fila de la descripción */}
//                                             {idx === 0 && (
//                                                 <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }} rowSpan={rec.descripcion.length}>{rec.titulo}</TableCell>
//                                             )}
//                                             {/* Mostramos la descripción */}
//                                             {/* <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.texto}</TableCell> */}
//                                             {/* Mostramos la justificación */}
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.aceptacion ? "Si" : "No"}</TableCell>
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.aceptacion ? "" : desc.justificacion_no_aceptacion}</TableCell>

//                                         </TableRow>
//                                     ))}
//                                 </React.Fragment>
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
// import { DTO_reporte_formato_1 } from '../../api/DTO_Seguimiento/DTO_formato_1';
// import { Navbar } from '../Navbar/Navbar';

// export const Reporte_1: React.FC<{}> = () => {
//     const { id_informe } = useParams<{ id_informe: string }>();
//     const informeId = id_informe ? parseInt(id_informe, 10) : 0;

//     const [informe, setInforme] = useState<DTO_reporte_formato_1 | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await service_reporte_seguimiento_informes.get_formato_1(informeId);
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
//             <div style={{ padding: '20px' }} id="printableContent">
//                 <Typography variant="h4" gutterBottom align="center">Formato I</Typography>
//                 <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE ACEPTACION DE RECOMENDACIONES</Typography>

//                 <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
//                 <Typography variant="h6"><strong>Informe de {informe.tipo_informe_2.toLowerCase()}:</strong> {informe.titulo}</Typography>
//                 <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong> {informe.numero_informe}</Typography>

//                 <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
//                 <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography>

//                 {/* <Typography variant="h5" style={{ marginTop: '20px' }} align="center">Recomendaciones</Typography> */}
//                 <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//                     <Table style={{ border: '1px solid black' }}>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell style={{ border: '1px solid black', width: '10%' }}><strong>Nº</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '45%' }}><strong>Recomendación</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '15%' }}><strong>Aceptación</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '30%' }}><strong>Justificación</strong></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {informe.recomendaciones.map((rec, index) => (
//                                 <React.Fragment key={index}>
//                                     {rec.descripcion.map((desc, idx) => (
//                                         <TableRow key={`${index}-${idx}`}>
//                                             {idx === 0 && (
//                                                 <>
//                                                     <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }} rowSpan={rec.descripcion.length}>{rec.numero_de_recomendacion}</TableCell>
//                                                     <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }} rowSpan={rec.descripcion.length}>{rec.titulo}</TableCell>
//                                                 </>
//                                             )}
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.aceptacion ? "Sí" : "No"}</TableCell>
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.aceptacion ? "" : desc.justificacion_no_aceptacion}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </React.Fragment>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>

//             <Tooltip title="Imprimir informe" arrow>
//                 <IconButton
//                     id="printButton"
//                     onClick={handlePrint}
//                     style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//                 >
//                     <PrintIcon />
//                 </IconButton>
//             </Tooltip>
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
    IconButton,
    Tooltip
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { DTO_reporte_formato_1 } from '../../api/DTO_Seguimiento/DTO_formato_1';
import { Navbar } from '../Navbar/Navbar';

export const Reporte_1: React.FC<{}> = () => {
    const { id_informe } = useParams<{ id_informe: string }>();
    const informeId = id_informe ? parseInt(id_informe, 10) : 0;

    const [informe, setInforme] = useState<DTO_reporte_formato_1 | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await service_reporte_seguimiento_informes.get_formato_1(informeId);
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
                <Typography variant="h4" gutterBottom align="center">Formato I</Typography>
                <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE ACEPTACION DE RECOMENDACIONES</Typography>

                <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
                <Typography variant="h6"><strong>Informe de {informe.tipo_informe_2.toLowerCase()}:</strong> {informe.titulo}</Typography>
                <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong> </Typography>

                {/* <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
                <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography> */}

                <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                    <Table style={{ border: '1px solid black' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ border: '1px solid black', width: '10%' }}><strong>Nº</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '45%' }}><strong>Recomendación</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '15%' }}><strong>Aceptación</strong></TableCell>
                                <TableCell style={{ border: '1px solid black', width: '30%' }}><strong>Justificación</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {informe.recomendaciones.map((rec, index) => (
                                <React.Fragment key={index}>
                                    {rec.descripcion.map((desc, idx) => (
                                        <TableRow key={`${index}-${idx}`}>
                                            {idx === 0 && (
                                                <>
                                                    <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }} rowSpan={rec.descripcion.length}>{rec.numero_de_recomendacion}</TableCell>
                                                    <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }} rowSpan={rec.descripcion.length}>{rec.titulo}</TableCell>
                                                </>
                                            )}
                                            <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.aceptacion ? "Sí" : "No"}</TableCell>
                                            <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{desc.aceptacion ? "" : desc.justificacion_no_aceptacion}</TableCell>
                                        </TableRow>
                                    ))}
                                </React.Fragment>
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
