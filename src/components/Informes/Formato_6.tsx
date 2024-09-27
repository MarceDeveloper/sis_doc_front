// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Typography,
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';

// interface AccionMae {
//   id: number;
//   accion: string;
//   id_tarea: number;
// }

// interface TareaResponsable {
//   id: number;
//   id_tarea: number;
//   id_responsable: number;
// }

// interface Tarea {
//   id: number;
//   texto: string;
//   id_descripcion: number;
//   acciones_tareas_mae: AccionMae[];
//   tarea_responsable: TareaResponsable[];
// }

// interface Descripcion {
//   id: number;
//   titulo: string;
//   texto: string;
//   aceptacion: boolean;
//   justificacion_no_aceptacion: string;
//   estado: string;
//   estado_descripcion: string;
//   id_recomendacion: number;
//   tarea: Tarea[];
// }

// interface Recomendacion {
//   id: number;
//   titulo: string;
//   numero_de_recomendacion: string;
//   estado: string;
//   estado_recomendacion: string;
//   plazo_de_implementacion: string;
//   antecedentes: string;
//   comentario: string;
//   id_informe: number;
//   descripcion: Descripcion[];
// }

// export const Reporte_6: React.FC<{}> = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [reporte, setReporte] = useState<Recomendacion[] | null>(null);
//   const [estadoFilter, setEstadoFilter] = useState<string>('Todos');

//   useEffect(() => {
//     const fetchReporte = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await service_reporte_seguimiento_informes.get_reporte_6();
//         setReporte(data); // Asume que la data viene en data.data
//         console.log({ data });
//       } catch (err) {
//         setError('Error al cargar el reporte');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReporte();
//   }, []);

//   const handleEstadoFilterChange = (event: SelectChangeEvent<string>) => {
//     setEstadoFilter(event.target.value);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const filteredReporte = reporte?.filter(recomendacion =>
//     estadoFilter === 'Todos' || recomendacion.estado_recomendacion === estadoFilter
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       <div className="no-print">
//         <Typography variant="h4" gutterBottom>
//           Informe en Formato 6
//         </Typography>
//         <Box display="flex" alignItems="center" marginBottom="20px">
//           <FormControl style={{ marginRight: '20px', width: 200 }}>
//             <InputLabel id="estado-select-label">Estado de Recomendación</InputLabel>
//             <Select
//               labelId="estado-select-label"
//               id="estado-select"
//               value={estadoFilter}
//               onChange={handleEstadoFilterChange}
//             >
//               <MenuItem value="Todos">Todos</MenuItem>
//               <MenuItem value="PENDIENTE">Pendiente</MenuItem>
//               <MenuItem value="PROCESO">Proceso</MenuItem>
//               <MenuItem value="DESCARGADA">Descargada</MenuItem>
//               <MenuItem value="LEVANTADA">Levantada</MenuItem>
//             </Select>
//           </FormControl>
//           <Tooltip title="Imprimir informe" arrow>
//             <IconButton
//               id="printButton"
//               onClick={handlePrint}
//               style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//             >
//               <PrintIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </div>
//       {loading && <CircularProgress />}
//       {error && <div>{error}</div>}
//       {filteredReporte && (
//         <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//           <Table style={{ border: '1px solid black' }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ border: '1px solid black', width: '50%' }}><strong>Tarea</strong></TableCell>
//                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Estado</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredReporte.map((recomendacion, recIndex) => (
//                 recomendacion.descripcion.map((descripcion, descIndex) => (
//                   descripcion.tarea.map((tarea, tareaIndex) => (
//                     <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}`}>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                         {tarea.texto}
//                         {/* <ul>
//                           {tarea.acciones_tareas_mae.map((accionMae, maeIndex) => (
//                             <li key={maeIndex}><Typography variant="body2"><strong>Acción MAE:</strong> {accionMae.accion}</Typography></li>
//                           ))}
//                         </ul> */}
//                       </TableCell>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{recomendacion.estado_recomendacion}</TableCell>
//                     </TableRow>
//                   ))
//                 ))
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </div>
//   );
// };




// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Typography,
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
// import moment from 'moment';

// interface AccionMae {
//   id: number;
//   accion: string;
//   id_tarea: number;
// }

// interface TareaResponsable {
//   id: number;
//   id_tarea: number;
//   id_responsable: number;
// }

// interface Tarea {
//   id: number;
//   texto: string;
//   id_descripcion: number;
//   acciones_tareas_mae: AccionMae[];
//   tarea_responsable: TareaResponsable[];
// }

// interface Descripcion {
//   id: number;
//   titulo: string;
//   texto: string;
//   aceptacion: boolean;
//   justificacion_no_aceptacion: string;
//   estado: string;
//   estado_descripcion: string;
//   id_recomendacion: number;
//   tarea: Tarea[];
// }

// interface Recomendacion {
//   id: number;
//   titulo: string;
//   numero_de_recomendacion: string;
//   estado: string;
//   estado_recomendacion: string;
//   plazo_de_implementacion: string;
//   antecedentes: string;
//   comentario: string;
//   id_informe: number;
//   descripcion: Descripcion[];
// }

// export const Reporte_6: React.FC<{}> = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [reporte, setReporte] = useState<Recomendacion[] | null>(null);
//   const [estadoFilter, setEstadoFilter] = useState<string>('Todos');

//   useEffect(() => {
//     const fetchReporte = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await service_reporte_seguimiento_informes.get_reporte_6();
//         setReporte(data); // Asume que la data viene en data.data
//         console.log({ data });
//       } catch (err) {
//         setError('Error al cargar el reporte');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReporte();
//   }, []);

//   const handleEstadoFilterChange = (event: SelectChangeEvent<string>) => {
//     setEstadoFilter(event.target.value);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const getEstadoColor = (estado: string, plazo: string) => {
//     const now = moment();
//     const plazoDate = moment(plazo);
//     const diffInMonths = plazoDate.diff(now, 'months');

//     if (estado === 'PENDIENTE' && diffInMonths <= 2) {
//       return '#FFA500'; // Naranja dos meses antes de vencimiento si pendiente
//     }

//     if (estado === 'PROCESO' && diffInMonths <= 2) {
//       return '#FFFF00'; // Amarillo dos meses antes de vencimiento si en proceso
//     }

//     // if (estado === 'DESCARGADA' && diffInMonths <= 1) {
//     //   return '#FFA500'; // Naranja un mes antes de vencimiento si descargada y pendiente de cumplimiento
//     // }

//     switch (estado) {
//       case 'PENDIENTE':
//         return '#FFA500'; // Naranja
//       case 'PROCESO':
//         return '#FFFF00'; // Amarillo
//       case 'DESCARGADA':
//         return '#008000'; // Verde
//       case 'LEVANTADA':
//         return '#00BFFF'; // Azul
//       default:
//         return '#FFFFFF'; // Blanco
//     }
//   };

//   const filteredReporte = reporte?.filter(recomendacion =>
//     estadoFilter === 'Todos' || recomendacion.estado_recomendacion === estadoFilter
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom align="center">Formato VI</Typography>
//       <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE TAREAS</Typography>

//       <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
//       <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong></Typography>
//       <div className="no-print">
//         {/* <Typography variant="h4" gutterBottom>
//           Informe en Formato 6
//         </Typography> */}
//         <Box display="flex" alignItems="center" marginBottom="20px">
//           <FormControl style={{ marginRight: '20px', width: 200 }}>
//             <InputLabel id="estado-select-label">Estado de Recomendación</InputLabel>
//             <Select
//               labelId="estado-select-label"
//               id="estado-select"
//               value={estadoFilter}
//               onChange={handleEstadoFilterChange}
//             >
//               <MenuItem value="Todos">Todos</MenuItem>
//               <MenuItem value="PENDIENTE">Pendiente</MenuItem>
//               <MenuItem value="PROCESO">Proceso</MenuItem>
//               <MenuItem value="DESCARGADA">Descargada</MenuItem>
//               <MenuItem value="LEVANTADA">Levantada</MenuItem>
//             </Select>
//           </FormControl>
//           <Tooltip title="Imprimir informe" arrow>
//             <IconButton
//               id="printButton"
//               onClick={handlePrint}
//               style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//             >
//               <PrintIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </div>
//       {loading && <CircularProgress />}
//       {error && <div>{error}</div>}
//       {filteredReporte && (
//         <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//           <Table style={{ border: '1px solid black' }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ border: '1px solid black', width: '50%' }}><strong>Tarea</strong></TableCell>
//                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Estado</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredReporte.map((recomendacion, recIndex) => (
//                 recomendacion.descripcion.map((descripcion, descIndex) => (
//                   descripcion.tarea.map((tarea, tareaIndex) => (
//                     <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}`}>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                         {tarea.texto}
//                       </TableCell>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top', backgroundColor: getEstadoColor(recomendacion.estado_recomendacion, recomendacion.plazo_de_implementacion) }}>
//                         {recomendacion.estado_recomendacion}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ))
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <Typography variant="h6">______________________________</Typography>
//         <Typography variant="h6">Firma del Rector UAJMS</Typography>
//       </div>
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Typography,
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
// import moment from 'moment';

// interface Reparticion {
//   id_reparticion: number;
//   nombre: string;
// }

// interface Responsable {
//   id: number;
//   nombre: string;
//   cargo: string;
//   reparticion: Reparticion;
// }

// interface TareaResponsable {
//   id: number;
//   id_tarea: number;
//   responsable: Responsable;
// }

// interface Tarea {
//   id: number;
//   texto: string;
//   id_descripcion: number;
//   tarea_responsable: TareaResponsable[];
// }

// interface Descripcion {
//   id: number;
//   titulo: string;
//   texto: string;
//   aceptacion: boolean;
//   justificacion_no_aceptacion: string;
//   estado: string;
//   estado_descripcion: string;
//   id_recomendacion: number;
//   tarea: Tarea[];
// }

// interface Recomendacion {
//   id: number;
//   titulo: string;
//   numero_de_recomendacion: string;
//   estado: string;
//   estado_recomendacion: string;
//   plazo_de_implementacion: string;
//   antecedentes: string;
//   comentario: string;
//   id_informe: number;
//   descripcion: Descripcion[];
//   titulo_informe: string;
//   reparticiones: { id_reparticion: number; nombre_reparticion: string }[];
// }

// interface Secretaria {
//   id_reparticion: number;
//   nombre: string;
// }

// interface SecreReparticione {
//   lst_reparticiones: Secretaria[];
//   secretaria: Secretaria;
// }

// export const Reporte_6: React.FC<{}> = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [reporte, setReporte] = useState<Recomendacion[] | null>(null);
//   const [estadoFilter, setEstadoFilter] = useState<string>('Todos');
//   const [secretariaFilter, setSecretariaFilter] = useState<string>('Todos');
//   const [reparticionFilter, setReparticionFilter] = useState<string>('Todos');
//   const [secreReparticiones, setSecreReparticiones] = useState<SecreReparticione[]>([]);

//   useEffect(() => {
//     const fetchReporte = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await service_reporte_seguimiento_informes.get_reporte_6();
//         setReporte(data.data); // Asume que la data viene en data.data
//         setSecreReparticiones(data.secre_reparticiones);
//         console.log({ data });
//       } catch (err) {
//         setError('Error al cargar el reporte');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReporte();
//   }, []);

//   const handleEstadoFilterChange = (event: SelectChangeEvent<string>) => {
//     setEstadoFilter(event.target.value);
//   };

//   const handleSecretariaFilterChange = (event: SelectChangeEvent<string>) => {
//     setSecretariaFilter(event.target.value);
//     setReparticionFilter('Todos'); // Reset repartición filter when secretaria changes
//   };

//   const handleReparticionFilterChange = (event: SelectChangeEvent<string>) => {
//     setReparticionFilter(event.target.value);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const getEstadoColor = (estado: string, plazo: string) => {
//     const now = moment();
//     const plazoDate = moment(plazo);
//     const diffInMonths = plazoDate.diff(now, 'months');

//     if (estado === 'PENDIENTE' && diffInMonths <= 2) {
//       return '#FFA500'; // Naranja dos meses antes de vencimiento si pendiente
//     }

//     if (estado === 'PROCESO' && diffInMonths <= 2) {
//       return '#FFFF00'; // Amarillo dos meses antes de vencimiento si en proceso
//     }

//     switch (estado) {
//       case 'PENDIENTE':
//         return '#FFA500'; // Naranja
//       case 'PROCESO':
//         return '#FFFF00'; // Amarillo
//       case 'DESCARGADA':
//         return '#008000'; // Verde
//       case 'LEVANTADA':
//         return '#00BFFF'; // Azul
//       default:
//         return '#FFFFFF'; // Blanco
//     }
//   };

//   const filteredReporte = reporte?.filter(recomendacion => {
//     const cumpleEstado = estadoFilter === 'Todos' || recomendacion.estado_recomendacion === estadoFilter;
//     const cumpleSecretaria = secretariaFilter === 'Todos' || recomendacion.reparticiones.some(r =>
//       secreReparticiones.some(s => s.secretaria.nombre === secretariaFilter && s.lst_reparticiones.some(lr => lr.id_reparticion === r.id_reparticion))
//     );
//     const cumpleReparticion = reparticionFilter === 'Todos' || recomendacion.reparticiones.some(r => r.nombre_reparticion === reparticionFilter);
//     return cumpleEstado && cumpleSecretaria && cumpleReparticion;
//   });

//   const secretariasOptions = secreReparticiones.map(sr => sr.secretaria.nombre);
  
//   const reparticionesOptions = secretariaFilter === 'Todos'
//     ? []
//     : secreReparticiones.find(sr => sr.secretaria.nombre === secretariaFilter)?.lst_reparticiones.map(lr => {
 
//       return lr.reparticion.nombre
//     }) || [];

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom align="center">Formato VI</Typography>
//       <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE TAREAS</Typography>

//       <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
//       <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong></Typography>
//       <div className="no-print">
//         <Box display="flex" alignItems="center" marginBottom="20px">
//           <FormControl style={{ marginRight: '20px', width: 200 }}>
//             <InputLabel id="estado-select-label">Estado de Recomendación</InputLabel>
//             <Select
//               labelId="estado-select-label"
//               id="estado-select"
//               value={estadoFilter}
//               onChange={handleEstadoFilterChange}
//             >
//               <MenuItem value="Todos">Todos</MenuItem>
//               <MenuItem value="PENDIENTE">Pendiente</MenuItem>
//               <MenuItem value="PROCESO">Proceso</MenuItem>
//               <MenuItem value="DESCARGADA">Descargada</MenuItem>
//               <MenuItem value="LEVANTADA">Levantada</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl style={{ marginRight: '20px', width: 200 }}>
//             <InputLabel id="secretaria-select-label">Secretaria</InputLabel>
//             <Select
//               labelId="secretaria-select-label"
//               id="secretaria-select"
//               value={secretariaFilter}
//               onChange={handleSecretariaFilterChange}
//             >
//               <MenuItem value="Todos">Todos</MenuItem>
//               {secretariasOptions.map((secretaria, index) => (
//                 <MenuItem key={index} value={secretaria}>{secretaria}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           {secretariaFilter !== 'Todos' && (
//             <FormControl style={{ marginRight: '20px', width: 200 }}>
//               <InputLabel id="reparticion-select-label">Repartición</InputLabel>
//               <Select
//                 labelId="reparticion-select-label"
//                 id="reparticion-select"
//                 value={reparticionFilter}
//                 onChange={handleReparticionFilterChange}
//               >
//                 <MenuItem value="Todos">Todos</MenuItem>
//                 {reparticionesOptions.map((reparticion, index) => (
//                   <MenuItem key={index} value={reparticion}>{reparticion}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}
//           <Tooltip title="Imprimir informe" arrow>
//             <IconButton
//               id="printButton"
//               onClick={handlePrint}
//               style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//             >
//               <PrintIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </div>
//       {loading && <CircularProgress />}
//       {error && <div>{error}</div>}
//       {filteredReporte && (
//         <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//           <Table style={{ border: '1px solid black' }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ border: '1px solid black', width: '50%' }}><strong>Tarea</strong></TableCell>
//                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Estado</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredReporte.map((recomendacion, recIndex) => (
//                 recomendacion.descripcion.map((descripcion, descIndex) => (
//                   descripcion.tarea.map((tarea, tareaIndex) => (
//                     <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}`}>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                         {tarea.texto}
//                       </TableCell>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top', backgroundColor: getEstadoColor(recomendacion.estado_recomendacion, recomendacion.plazo_de_implementacion) }}>
//                         {recomendacion.estado_recomendacion}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ))
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <Typography variant="h6">______________________________</Typography>
//         <Typography variant="h6">Firma del Rector UAJMS</Typography>
//       </div>
//     </div>
//   );
// };





// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Typography,
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
// import moment from 'moment';
// import { DTO_reporte_formato_6, SecreReparticione } from '../../api/DTO_Seguimiento/DTO_format_6';


// export const Reporte_6: React.FC<{}> = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [reporte, setReporte] = useState<DTO_reporte_formato_6 | null>(null);
//   const [estadoFilter, setEstadoFilter] = useState<string>('Todos');
//   const [secretariaFilter, setSecretariaFilter] = useState<string>('Todos');
//   const [reparticionFilter, setReparticionFilter] = useState<string>('Todos');
//   const [secreReparticiones, setSecreReparticiones] = useState<SecreReparticione[]>([]);

//   useEffect(() => {
//     const fetchReporte = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await service_reporte_seguimiento_informes.get_reporte_6();
//         setReporte(data.data); // Asume que la data viene en data.data
//         setSecreReparticiones(data.secre_reparticiones);
//       } catch (err) {
//         setError('Error al cargar el reporte');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReporte();
//   }, []);

//   const handleEstadoFilterChange = (event: SelectChangeEvent<string>) => {
//     setEstadoFilter(event.target.value);
//   };

//   const handleSecretariaFilterChange = (event: SelectChangeEvent<string>) => {
//     setSecretariaFilter(event.target.value);
//     setReparticionFilter('Todos'); // Reset repartición filter when secretaria changes
//   };

//   const handleReparticionFilterChange = (event: SelectChangeEvent<string>) => {
//     setReparticionFilter(event.target.value);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const getEstadoColor = (estado: string, plazo: string) => {
//     const now = moment();
//     const plazoDate = moment(plazo);
//     const diffInMonths = plazoDate.diff(now, 'months');

//     if (estado === 'PENDIENTE' && diffInMonths <= 2) {
//       return '#FFA500'; // Naranja dos meses antes de vencimiento si pendiente
//     }

//     if (estado === 'PROCESO' && diffInMonths <= 2) {
//       return '#FFFF00'; // Amarillo dos meses antes de vencimiento si en proceso
//     }

//     switch (estado) {
//       case 'PENDIENTE':
//         return '#FFA500'; // Naranja
//       case 'PROCESO':
//         return '#FFFF00'; // Amarillo
//       case 'DESCARGADA':
//         return '#008000'; // Verde
//       case 'LEVANTADA':
//         return '#00BFFF'; // Azul
//       default:
//         return '#FFFFFF'; // Blanco
//     }
//   };

//   const filteredReporte = reporte?.filter(recomendacion => {
//     const cumpleEstado = estadoFilter === 'Todos' || recomendacion.estado_recomendacion === estadoFilter;
//     const cumpleSecretaria = secretariaFilter === 'Todos' || recomendacion.reparticiones.some(r =>
//       secreReparticiones.some(s => s.secretaria.nombre === secretariaFilter && s.lst_reparticiones.some(lr => lr.id_reparticion === r.id_reparticion))
//     );
//     const cumpleReparticion = reparticionFilter === 'Todos' || recomendacion.reparticiones.some(r => r.nombre_reparticion === reparticionFilter);
//     return cumpleEstado && cumpleSecretaria && cumpleReparticion;
//   });

//   const secretariasOptions = secreReparticiones.map(sr => sr.secretaria.nombre);
//   const reparticionesOptions = secretariaFilter === 'Todos'
//     ? []
//     : secreReparticiones.find(sr => sr.secretaria.nombre === secretariaFilter)?.lst_reparticiones.map(lr => lr.nombre) || [];

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom align="center">Formato VI</Typography>
//       <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE TAREAS</Typography>

//       <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
//       <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong></Typography>
//       <div className="no-print">
//         <Box display="flex" alignItems="center" marginBottom="20px">
//           <FormControl style={{ marginRight: '20px', width: 200 }}>
//             <InputLabel id="estado-select-label">Estado de Recomendación</InputLabel>
//             <Select
//               labelId="estado-select-label"
//               id="estado-select"
//               value={estadoFilter}
//               onChange={handleEstadoFilterChange}
//             >
//               <MenuItem value="Todos">Todos</MenuItem>
//               <MenuItem value="PENDIENTE">Pendiente</MenuItem>
//               <MenuItem value="PROCESO">Proceso</MenuItem>
//               <MenuItem value="DESCARGADA">Descargada</MenuItem>
//               <MenuItem value="LEVANTADA">Levantada</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl style={{ marginRight: '20px', width: 200 }}>
//             <InputLabel id="secretaria-select-label">Secretaria</InputLabel>
//             <Select
//               labelId="secretaria-select-label"
//               id="secretaria-select"
//               value={secretariaFilter}
//               onChange={handleSecretariaFilterChange}
//             >
//               <MenuItem value="Todos">Todos</MenuItem>
//               {secretariasOptions.map((secretaria, index) => (
//                 <MenuItem key={index} value={secretaria}>{secretaria}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           {secretariaFilter !== 'Todos' && (
//             <FormControl style={{ marginRight: '20px', width: 200 }}>
//               <InputLabel id="reparticion-select-label">Repartición</InputLabel>
//               <Select
//                 labelId="reparticion-select-label"
//                 id="reparticion-select"
//                 value={reparticionFilter}
//                 onChange={handleReparticionFilterChange}
//               >
//                 <MenuItem value="Todos">Todos</MenuItem>
//                 {reparticionesOptions.map((reparticion, index) => (
//                   <MenuItem key={index} value={reparticion}>{reparticion}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}
//           <Tooltip title="Imprimir informe" arrow>
//             <IconButton
//               id="printButton"
//               onClick={handlePrint}
//               style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//             >
//               <PrintIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </div>
//       {loading && <CircularProgress />}
//       {error && <div>{error}</div>}
//       {filteredReporte && (
//         <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//           <Table style={{ border: '1px solid black' }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ border: '1px solid black', width: '50%' }}><strong>Tarea</strong></TableCell>
//                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Estado</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredReporte.map((recomendacion, recIndex) => (
//                 recomendacion.descripcion.map((descripcion, descIndex) => (
//                   descripcion.tarea.map((tarea, tareaIndex) => (
//                     <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}`}>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                         {tarea.texto}
//                       </TableCell>
//                       <TableCell style={{ border: '1px solid black', verticalAlign: 'top', backgroundColor: getEstadoColor(recomendacion.estado_recomendacion, recomendacion.plazo_de_implementacion) }}>
//                         {recomendacion.estado_recomendacion}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ))
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <Typography variant="h6">______________________________</Typography>
//         <Typography variant="h6">Firma del Rector UAJMS</Typography>
//       </div>
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Typography,
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
// import moment from 'moment';
// import { DTO_reporte_formato_6,Datum,SecreReparticione } from '../../api/DTO_Seguimiento/DTO_format_6';
// import { Navbar } from '../Navbar/Navbar';


// export const Reporte_6: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [reporte, setReporte] = useState<Datum[] | null>(null);
//   const [estadoFilter, setEstadoFilter] = useState<string>('Todos');
//   const [secretariaFilter, setSecretariaFilter] = useState<string>('Todos');
//   const [reparticionFilter, setReparticionFilter] = useState<string>('Todos');
//   const [secreReparticiones, setSecreReparticiones] = useState<SecreReparticione[]>([]);

//   useEffect(() => {
//     const fetchReporte = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data: DTO_reporte_formato_6 = await service_reporte_seguimiento_informes.get_reporte_6();
//         setReporte(data.data);
//         setSecreReparticiones(data.secre_reparticiones);
//       } catch (err) {
//         setError('Error al cargar el reporte');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReporte();
//   }, []);

//   const handleEstadoFilterChange = (event: SelectChangeEvent<string>) => {
//     setEstadoFilter(event.target.value);
//   };

//   const handleSecretariaFilterChange = (event: SelectChangeEvent<string>) => {
//     setSecretariaFilter(event.target.value);
//     setReparticionFilter('Todos'); // Reset repartición filter when secretaria changes
//   };

//   const handleReparticionFilterChange = (event: SelectChangeEvent<string>) => {
//     console.log({reparticion_Select :event.target.value })
//     setReparticionFilter(event.target.value);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const getEstadoColor = (estado: string, plazo: Date) => {
//     const now = moment();
//     const plazoDate = moment(plazo);
//     const diffInMonths = plazoDate.diff(now, 'months');

//     if (estado === 'PENDIENTE' && diffInMonths <= 2) {
//       return '#FFA500'; // Naranja dos meses antes de vencimiento si pendiente
//     }

//     if (estado === 'PROCESO' && diffInMonths <= 2) {
//       return '#FFFF00'; // Amarillo dos meses antes de vencimiento si en proceso
//     }

//     switch (estado) {
//       case 'PENDIENTE':
//         return '#FFA500'; // Naranja
//       case 'PROCESO':
//         return '#FFFF00'; // Amarillo
//       case 'DESCARGADA':
//         return '#008000'; // Verde
//       case 'LEVANTADA':
//         return '#00BFFF'; // Azul
//       default:
//         return '#FFFFFF'; // Blanco
//     }
//   };

//   const filteredReporte = reporte?.filter(recomendacion => {
//     console.log({recomendacion})
//     const cumpleEstado = estadoFilter === 'Todos' || recomendacion.estado_recomendacion === estadoFilter;
//     const cumpleSecretaria = secretariaFilter === 'Todos' || recomendacion.reparticiones.some(r =>
//       secreReparticiones.some(s => s.secretaria.nombre === secretariaFilter && s.lst_reparticiones.some(lr => lr.reparticion.id_reparticion === r.id_reparticion))
//     );
//     const cumpleReparticion = reparticionFilter === 'Todos' || recomendacion.reparticiones.some(r => r.nombre_reparticion === reparticionFilter);
//     return cumpleEstado && cumpleSecretaria && cumpleReparticion;
//   });

//   const secretariasOptions = secreReparticiones.map(sr => sr.secretaria.nombre);
//   const reparticionesOptions = secretariaFilter === 'Todos'
//     ? []
//     : secreReparticiones.find(sr => sr.secretaria.nombre === secretariaFilter)?.lst_reparticiones.map(lr => lr.reparticion.nombre) || [];

//   return (
//     <>
//       <Navbar/>
//       <div style={{ padding: '20px' }}>
//         <Typography variant="h4" gutterBottom align="center">Formato VI</Typography>
//         <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE TAREAS</Typography>

//         <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
//         <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong></Typography>
//         <div className="no-print">
//           <Box display="flex" alignItems="center" marginBottom="20px">
//             <FormControl style={{ marginRight: '20px', width: 200 }}>
//               <InputLabel id="estado-select-label">Estado de Recomendación</InputLabel>
//               <Select
//                 labelId="estado-select-label"
//                 id="estado-select"
//                 value={estadoFilter}
//                 onChange={handleEstadoFilterChange}
//               >
//                 <MenuItem value="Todos">Todos</MenuItem>
//                 <MenuItem value="PENDIENTE">Pendiente</MenuItem>
//                 <MenuItem value="PROCESO">Proceso</MenuItem>
//                 <MenuItem value="DESCARGADA">Descargada</MenuItem>
//                 <MenuItem value="LEVANTADA">Levantada</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl style={{ marginRight: '20px', width: 200 }}>
//               <InputLabel id="secretaria-select-label">Secretaria</InputLabel>
//               <Select
//                 labelId="secretaria-select-label"
//                 id="secretaria-select"
//                 value={secretariaFilter}
//                 onChange={handleSecretariaFilterChange}
//               >
//                 <MenuItem value="Todos">Todos</MenuItem>
//                 {secretariasOptions.map((secretaria, index) => (
//                   <MenuItem key={index} value={secretaria}>{secretaria}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             {secretariaFilter !== 'Todos' && (
//               <FormControl style={{ marginRight: '20px', width: 200 }}>
//                 <InputLabel id="reparticion-select-label">Repartición</InputLabel>
//                 <Select
//                   labelId="reparticion-select-label"
//                   id="reparticion-select"
//                   value={reparticionFilter}
//                   onChange={handleReparticionFilterChange}
//                 >
//                   <MenuItem value="Todos">Todos</MenuItem>
//                   {reparticionesOptions.map((reparticion, index) => (
//                     <MenuItem key={index} value={reparticion}>{reparticion}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             )}
//             <Tooltip title="Imprimir informe" arrow>
//               <IconButton
//                 id="printButton"
//                 onClick={handlePrint}
//                 style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//               >
//                 <PrintIcon />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </div>
//         {loading && <CircularProgress />}
//         {error && <div>{error}</div>}
//         {filteredReporte && (
//           <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//             <Table style={{ border: '1px solid black' }}>
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={{ border: '1px solid black', width: '50%' }}><strong>Tarea</strong></TableCell>
//                   <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Estado</strong></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredReporte.map((recomendacion, recIndex) => (
//                   recomendacion.descripcion.map((descripcion, descIndex) => (
//                     descripcion.tarea.map((tarea, tareaIndex) => (
//                       <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}`}>
//                         <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                           {tarea.texto}
//                         </TableCell>
//                         <TableCell style={{ border: '1px solid black', verticalAlign: 'top', backgroundColor: getEstadoColor(recomendacion.estado_recomendacion, recomendacion.plazo_de_implementacion) }}>
//                           {recomendacion.estado_recomendacion}
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   ))
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//           <Typography variant="h6">______________________________</Typography>
//           <Typography variant="h6">Firma del Rector UAJMS</Typography>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Reporte_6;



import React, { useState, useEffect } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Tooltip,
  TextField,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
import moment from 'moment';
import { DTO_reporte_formato_6, Datum, SecreReparticione } from '../../api/DTO_Seguimiento/DTO_format_6';
import { Navbar } from '../Navbar/Navbar';

export const Reporte_6: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [reporte, setReporte] = useState<Datum[] | null>(null);
  const [estadoFilter, setEstadoFilter] = useState<string>('Todos');
  const [secretariaFilter, setSecretariaFilter] = useState<string>('Todos');
  const [reparticionFilter, setReparticionFilter] = useState<string>('Todos');
  const [responsableFilter, setResponsableFilter] = useState<string>('');
  const [secreReparticiones, setSecreReparticiones] = useState<SecreReparticione[]>([]);

  useEffect(() => {
    const fetchReporte = async () => {
      setLoading(true);
      setError(null);

      try {
        const data: DTO_reporte_formato_6 = await service_reporte_seguimiento_informes.get_reporte_6();
        setReporte(data.data);
        setSecreReparticiones(data.secre_reparticiones);
      } catch (err) {
        setError('Error al cargar el reporte');
      } finally {
        setLoading(false);
      }
    };

    fetchReporte();
  }, []);

  const handleEstadoFilterChange = (event: SelectChangeEvent<string>) => {
    setEstadoFilter(event.target.value);
  };

  const handleSecretariaFilterChange = (event: SelectChangeEvent<string>) => {
    setSecretariaFilter(event.target.value);
    setReparticionFilter('Todos'); // Reset repartición filter when secretaria changes
  };

  const handleReparticionFilterChange = (event: SelectChangeEvent<string>) => {
    console.log({ reparticion_Select: event.target.value });
    setReparticionFilter(event.target.value);
  };

  const handleResponsableFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponsableFilter(event.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  const getEstadoColor = (estado: string, plazo: Date) => {
    const now = moment();
    const plazoDate = moment(plazo);
    const diffInMonths = plazoDate.diff(now, 'months');

    if (estado === 'PENDIENTE' && diffInMonths <= 2) {
      return '#FFA500'; // Naranja dos meses antes de vencimiento si pendiente
    }

    if (estado === 'PROCESO' && diffInMonths <= 2) {
      return '#FFFF00'; // Amarillo dos meses antes de vencimiento si en proceso
    }

    switch (estado) {
      case 'PENDIENTE':
        return '#FFA500'; // Naranja
      case 'PROCESO':
        return '#FFFF00'; // Amarillo
      case 'DESCARGADA':
        return '#008000'; // Verde
      case 'LEVANTADA':
        return '#00BFFF'; // Azul
      default:
        return '#FFFFFF'; // Blanco
    }
  };

  const filteredReporte = reporte?.filter((recomendacion) => {
    console.log({ recomendacion });
    const cumpleEstado = estadoFilter === 'Todos' || recomendacion.estado_recomendacion === estadoFilter;
    const cumpleSecretaria =
      secretariaFilter === 'Todos' ||
      recomendacion.reparticiones.some((r) =>
        secreReparticiones.some(
          (s) =>
            s.secretaria.nombre === secretariaFilter &&
            s.lst_reparticiones.some((lr) => lr.reparticion.id_reparticion === r.id_reparticion)
        )
      );
    const cumpleReparticion =
      reparticionFilter === 'Todos' ||
      recomendacion.reparticiones.some((r) => r.nombre_reparticion === reparticionFilter);
    const cumpleResponsable =
      responsableFilter === '' ||
      recomendacion.descripcion.some((descripcion) =>
        descripcion.tarea.some((tarea) =>
          tarea.tarea_responsable.some((responsable) =>
            responsable.responsable.nombre.toLowerCase().includes(responsableFilter.toLowerCase())
          )
        )
      );
    return cumpleEstado && cumpleSecretaria && cumpleReparticion && cumpleResponsable;
  });

  const secretariasOptions = secreReparticiones.map((sr) => sr.secretaria.nombre);
  const reparticionesOptions =
    secretariaFilter === 'Todos'
      ? []
      : secreReparticiones.find((sr) => sr.secretaria.nombre === secretariaFilter)?.lst_reparticiones.map((lr) => lr.reparticion.nombre) || [];

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Formato VI
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
          INFORMACION SOBRE TAREAS
        </Typography>

        <Typography variant="h6">
          <strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"
        </Typography>
        <Typography variant="h6">
          <strong>Tarija marzo 8 de 2023</strong>
        </Typography>
        <div className="no-print">
          <Box display="flex" alignItems="center" marginBottom="20px">
            <FormControl style={{ marginRight: '20px', width: 200 }}>
              <InputLabel id="estado-select-label">Estado de Recomendación</InputLabel>
              <Select
                labelId="estado-select-label"
                id="estado-select"
                value={estadoFilter}
                onChange={handleEstadoFilterChange}
              >
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="PENDIENTE">Pendiente</MenuItem>
                <MenuItem value="PROCESO">Proceso</MenuItem>
                <MenuItem value="DESCARGADA">Descargada</MenuItem>
                <MenuItem value="LEVANTADA">Levantada</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ marginRight: '20px', width: 200 }}>
              <InputLabel id="secretaria-select-label">Secretaria</InputLabel>
              <Select
                labelId="secretaria-select-label"
                id="secretaria-select"
                value={secretariaFilter}
                onChange={handleSecretariaFilterChange}
              >
                <MenuItem value="Todos">Todos</MenuItem>
                {secretariasOptions.map((secretaria, index) => (
                  <MenuItem key={index} value={secretaria}>
                    {secretaria}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {secretariaFilter !== 'Todos' && (
              <FormControl style={{ marginRight: '20px', width: 200 }}>
                <InputLabel id="reparticion-select-label">Repartición</InputLabel>
                <Select
                  labelId="reparticion-select-label"
                  id="reparticion-select"
                  value={reparticionFilter}
                  onChange={handleReparticionFilterChange}
                >
                  <MenuItem value="Todos">Todos</MenuItem>
                  {reparticionesOptions.map((reparticion, index) => (
                    <MenuItem key={index} value={reparticion}>
                      {reparticion}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <TextField
              style={{ marginRight: '20px', width: 200 }}
              id="responsable-filter"
              label="Nombre del Responsable"
              value={responsableFilter}
              onChange={handleResponsableFilterChange}
            />
            <Tooltip title="Imprimir informe" arrow>
              <IconButton
                id="printButton"
                onClick={handlePrint}
                style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
              >
                <PrintIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </div>
        {loading && <CircularProgress />}
        {error && <div>{error}</div>}
        {filteredReporte && (
          <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
            <Table style={{ border: '1px solid black' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ border: '1px solid black', width: '50%' }}>
                    <strong>Tarea</strong>
                  </TableCell>
                  <TableCell style={{ border: '1px solid black', width: '25%' }}>
                    <strong>Estado</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredReporte.map((recomendacion, recIndex) =>
                  recomendacion.descripcion.map((descripcion, descIndex) =>
                    descripcion.tarea.map((tarea, tareaIndex) => (
                      <TableRow key={`${recIndex}-${descIndex}-${tareaIndex}`}>
                        <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
                          {tarea.texto}
                        </TableCell>
                        <TableCell
                          style={{
                            border: '1px solid black',
                            verticalAlign: 'top',
                            backgroundColor: getEstadoColor(recomendacion.estado_recomendacion, recomendacion.plazo_de_implementacion),
                          }}
                        >
                          {recomendacion.estado_recomendacion}
                        </TableCell>
                      </TableRow>
                    ))
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Typography variant="h6">______________________________</Typography>
          <Typography variant="h6">Firma del Rector UAJMS</Typography>
        </div>
      </div>
    </>
  );
};

export default Reporte_6;
