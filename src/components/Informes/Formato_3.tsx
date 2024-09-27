// import React, { useState } from 'react';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
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
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Button,
//     IconButton,
//     Tooltip,
//     SelectChangeEvent,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { DTO_reporte_formato_3 } from '../../api/DTO_Seguimiento/DTO_format_3';
// // import '../../styles/Reporte_3.css'; // Asegúrate de que la ruta del archivo CSS sea correcta
// import moment from 'moment-timezone';

// export const Reporte_3: React.FC<{}> = () => {
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [informe, setInforme] = useState<DTO_reporte_formato_3[] | null>(null);
//     const [year, setYear] = useState<string>('');

//     const handleYearChange = (event: SelectChangeEvent<string>) => {
//         setYear(event.target.value);
//     };

//     const handleFetchReport = async () => {
//         setLoading(true);
//         setError(null);

//         try {
//             const data = await service_reporte_seguimiento_informes.get_formato_3(year);
//             setInforme(data);
//             console.log({ data });
//         } catch (err) {
//             setError('Error al cargar el reporte');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePrint = () => {
//         window.print();
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <div className="no-print">
//                 <Typography variant="h4" gutterBottom>Informe en Formato 3</Typography>
//                 <Box display="flex" alignItems="center" marginBottom="20px">
//                     <FormControl style={{ marginRight: '20px', width:200 }}>
//                         <InputLabel id="year-select-label">Año</InputLabel>
//                         <Select
//                             labelId="year-select-label"
//                             id="year-select"
//                             value={year}
//                             onChange={handleYearChange}
//                         >
//                             <MenuItem value="">Todos los años</MenuItem>
//                             <MenuItem value="2023">2023</MenuItem>
//                             <MenuItem value="2022">2022</MenuItem>
//                             {/* Agregar más años según sea necesario */}
//                         </Select>
//                     </FormControl>
//                     <Button variant="contained" onClick={handleFetchReport} disabled={loading}>
//                         Obtener Reporte
//                     </Button>
//                 </Box>
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
//             {loading && <CircularProgress />}
//             {error && <div>{error}</div>}
//             {informe && (
//                 <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//                     <Table style={{ border: '1px solid black' }}>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Recomendación</strong></TableCell>
//                                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Informe Emitido Por</strong></TableCell>
//                                 {/* <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Justificación de No Aceptación</strong></TableCell> */}
//                                 <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Plazo de Implementación</strong></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {informe.map((item, index) => (
//                                 item.recomendaciones.map((recomendacion, recIndex) => (
//                                     <TableRow key={`${index}-${recIndex}`}>
//                                         <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{recomendacion.titulo}</TableCell>
//                                         <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{item.titulo}</TableCell>
//                                         {/* <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                                             {recomendacion.descripcion.map((desc, descIndex) => (
//                                                 <div key={descIndex}>
//                                                     {desc.justificacion_no_aceptacion}
//                                                 </div>
//                                             ))}
//                                         </TableCell> */}
//                                         <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                                             {moment(recomendacion.plazo_de_implementacion).format("DD/MM/YYYY")}
//                                         </TableCell>
//                                     </TableRow>
//                                 ))
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}
//         </div>
//     );
// };



// import React, { useState } from 'react';
// import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
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
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Button,
//     IconButton,
//     Tooltip,
//     SelectChangeEvent,
// } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { DTO_reporte_formato_3 } from '../../api/DTO_Seguimiento/DTO_format_3';
// import moment from 'moment-timezone';
// import { Navbar } from '../Navbar/Navbar';

// export const Reporte_3: React.FC<{}> = () => {
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [informe, setInforme] = useState<DTO_reporte_formato_3[] | null>(null);
//     const [yearStart, setYearStart] = useState<string>('');
//     const [yearEnd, setYearEnd] = useState<string>('');
//     const [informeTipo, setInformeTipo] = useState<string>('');

//     const handleYearStartChange = (event: SelectChangeEvent<string>) => {
//         setYearStart(event.target.value);
//     };

//     const handleYearEndChange = (event: SelectChangeEvent<string>) => {
//         setYearEnd(event.target.value);
//     };

//     const handleInformeTipoChange = (event: SelectChangeEvent<string>) => {
//         setInformeTipo(event.target.value);
//     };

//     const handleFetchReport = async () => {
//         setLoading(true);
//         setError(null);

//         try {
//             console.log({
//                 yearStart,yearEnd,informeTipo
//             })
//             const data = await service_reporte_seguimiento_informes.get_formato_3(yearStart, yearEnd, informeTipo);

//             setInforme(data);
//             console.log({ data });
//         } catch (err) {
//             setError('Error al cargar el reporte');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePrint = () => {
//         window.print();
//     };

//     return (
//         <>
//             <Navbar/>
//             <div style={{ padding: '20px' }}>
//                 <div className="no-print">
//                     <Typography variant="h4" gutterBottom>Informe en Formato 3</Typography>
//                     <Box display="flex" alignItems="center" marginBottom="20px">
//                         <FormControl style={{ marginRight: '20px', width: 150 }}>
//                             <InputLabel id="year-start-select-label">Año Inicio</InputLabel>
//                             <Select
//                                 labelId="year-start-select-label"
//                                 id="year-start-select"
//                                 value={yearStart}
//                                 onChange={handleYearStartChange}
//                             >
//                                 <MenuItem value="">Seleccione</MenuItem>
//                                 <MenuItem value="2024">2024</MenuItem>
//                                 <MenuItem value="2023">2023</MenuItem>
//                                 <MenuItem value="2022">2022</MenuItem>
//                                 <MenuItem value="2021">2021</MenuItem>
//                                 <MenuItem value="2020">2020</MenuItem>
//                                 <MenuItem value="2019">2019</MenuItem>
//                                 {/* Agregar más años según sea necesario */}
//                             </Select>
//                         </FormControl>
//                         <FormControl style={{ marginRight: '20px', width: 150 }}>
//                             <InputLabel id="year-end-select-label">Año Fin</InputLabel>
//                             <Select
//                                 labelId="year-end-select-label"
//                                 id="year-end-select"
//                                 value={yearEnd}
//                                 onChange={handleYearEndChange}
//                             >
//                                 <MenuItem value="">Seleccione</MenuItem>
//                                 <MenuItem value="2024">2024</MenuItem>
//                                 <MenuItem value="2023">2023</MenuItem>
//                                 <MenuItem value="2022">2022</MenuItem>
//                                 <MenuItem value="2021">2021</MenuItem>
//                                 <MenuItem value="2020">2020</MenuItem>
//                                 <MenuItem value="2019">2019</MenuItem>
//                                 {/* Agregar más años según sea necesario */}
//                             </Select>
//                         </FormControl>
//                         <FormControl style={{ marginRight: '20px', width: 300 }}>
//                             <InputLabel id="informe-tipo-select-label">Tipo de Informe</InputLabel>
//                             <Select
//                                 labelId="informe-tipo-select-label"
//                                 id="informe-tipo-select"
//                                 value={informeTipo}
//                                 onChange={handleInformeTipoChange}
//                             >
//                                 <MenuItem value="DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)">DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)</MenuItem>
//                                 <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E.)">CONTRALORIA GENERAL DEL ESTADO (C.G.E.)</MenuItem>
//                                 <MenuItem value="AMBOS">Ambos</MenuItem>
//                             </Select>
//                         </FormControl>
//                         <Button variant="contained" onClick={handleFetchReport} disabled={loading}>
//                             Obtener Reporte
//                         </Button>
//                     </Box>
//                     <Tooltip title="Imprimir informe" arrow>
//                         <IconButton
//                             id="printButton"
//                             onClick={handlePrint}
//                             style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
//                         >
//                             <PrintIcon />
//                         </IconButton>
//                     </Tooltip>
//                 </div>
//                 {loading && <CircularProgress />}
//                 {error && <div>{error}</div>}
//                 {informe && (
//                     <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
//                         <Table style={{ border: '1px solid black' }}>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Recomendación</strong></TableCell>
//                                     <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Informe Emitido Por</strong></TableCell>
//                                     <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Plazo de Implementación</strong></TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {informe.map((item, index) => (
//                                     item.recomendaciones.map((recomendacion, recIndex) => (
//                                         <TableRow key={`${index}-${recIndex}`}>
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{recomendacion.titulo}</TableCell>
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{item.titulo}</TableCell>
//                                             <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
//                                                 {moment(recomendacion.plazo_de_implementacion).format("DD/MM/YYYY")}
//                                             </TableCell>
//                                         </TableRow>
//                                     ))
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 )}
//             </div>
//         </>
//     );
// };









import React, { useState } from 'react';
import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes';
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
    Button,
    IconButton,
    Tooltip,
    SelectChangeEvent,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { DTO_reporte_formato_3 } from '../../api/DTO_Seguimiento/DTO_format_3';
import moment from 'moment-timezone';
import { Navbar } from '../Navbar/Navbar';

export const Reporte_3: React.FC<{}> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [informe, setInforme] = useState<DTO_reporte_formato_3[] | null>(null);
    const [yearStart, setYearStart] = useState<string>('');
    const [yearEnd, setYearEnd] = useState<string>('');
    const [informeTipo, setInformeTipo] = useState<string>('');
    const [allYears, setAllYears] = useState<boolean>(false);

    const currentYear = new Date().getFullYear();
    const startYear = 2000; // Adjust the start year as needed
    const years = Array.from(new Array(currentYear - startYear + 1), (val, index) => startYear + index);

    const handleYearStartChange = (event: SelectChangeEvent<string>) => {
        setYearStart(event.target.value);
    };

    const handleYearEndChange = (event: SelectChangeEvent<string>) => {
        setYearEnd(event.target.value);
    };

    const handleInformeTipoChange = (event: SelectChangeEvent<string>) => {
        setInformeTipo(event.target.value);
    };

    const handleAllYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllYears(event.target.checked);
    };

    const handleFetchReport = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await service_reporte_seguimiento_informes.get_formato_3(
                allYears ? 'ALL' : yearStart,
                allYears ? 'ALL' : yearEnd,
                informeTipo
            );
            setInforme(data);
        } catch (err) {
            setError('Error al cargar el reporte');
        } finally {
            setLoading(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom align="center">Formato III</Typography>
                <Typography variant="h4" gutterBottom align="center">INFORMACION SOBRE TAREAS</Typography>

                {/* <Typography variant="h4" gutterBottom>Informe en Formato 3</Typography> */}
                <Typography variant="h6"><strong>Entidad:</strong> Universidad Autónoma "Juan Misael Saracho"</Typography>
                {/* <Typography variant="h6"><strong>Informe de {informe.tipo_informe_2.toLowerCase()}:</strong> {informe.titulo}</Typography> */}
                <Typography variant="h6"><strong>Tarija marzo 8 de 2023</strong></Typography>
                <div className="no-print">


                    <Box display="flex" alignItems="center" marginBottom="20px">
                        <FormControlLabel
                            control={<Checkbox checked={allYears} onChange={handleAllYearsChange} />}
                            label="Todos los años"
                        />
                        {!allYears && (
                            <>
                                <FormControl style={{ marginRight: '20px', width: 150 }}>
                                    <InputLabel id="year-start-select-label">Año Inicio</InputLabel>
                                    <Select
                                        labelId="year-start-select-label"
                                        id="year-start-select"
                                        value={yearStart}
                                        onChange={handleYearStartChange}
                                    >
                                        <MenuItem value="">Seleccione</MenuItem>
                                        {years.map(year => (
                                            <MenuItem key={year} value={year.toString()}>{year}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl style={{ marginRight: '20px', width: 150 }}>
                                    <InputLabel id="year-end-select-label">Año Fin</InputLabel>
                                    <Select
                                        labelId="year-end-select-label"
                                        id="year-end-select"
                                        value={yearEnd}
                                        onChange={handleYearEndChange}
                                    >
                                        <MenuItem value="">Seleccione</MenuItem>
                                        {years.map(year => (
                                            <MenuItem key={year} value={year.toString()}>{year}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </>
                        )}
                        <FormControl style={{ marginRight: '20px', width: 300 }}>
                            <InputLabel id="informe-tipo-select-label">Tipo de Informe</InputLabel>
                            <Select
                                labelId="informe-tipo-select-label"
                                id="informe-tipo-select"
                                value={informeTipo}
                                onChange={handleInformeTipoChange}
                            >
                                <MenuItem value="DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)">DIRECCIÓN DE AUDITORIA INTERNA (D.A.I.)</MenuItem>
                                <MenuItem value="CONTRALORIA GENERAL DEL ESTADO (C.G.E.)">CONTRALORIA GENERAL DEL ESTADO (C.G.E.)</MenuItem>
                                <MenuItem value="AMBOS">Ambos</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" onClick={handleFetchReport} disabled={loading}>
                            Obtener Reporte
                        </Button>
                    </Box>
                    <Tooltip title="Imprimir informe" arrow>
                        <IconButton
                            id="printButton"
                            onClick={handlePrint}
                            style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
                        >
                            <PrintIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                {loading && <CircularProgress />}
                {error && <div>{error}</div>}
                {informe && (
                    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                        <Table style={{ border: '1px solid black' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Recomendación</strong></TableCell>
                                    <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Informe Emitido Por</strong></TableCell>
                                    <TableCell style={{ border: '1px solid black', width: '25%' }}><strong>Plazo de Implementación</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {informe.map((item, index) => (
                                    item.recomendaciones.map((recomendacion, recIndex) => (
                                        <TableRow key={`${index}-${recIndex}`}>
                                            <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{recomendacion.titulo}</TableCell>
                                            <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>{item.titulo}</TableCell>
                                            <TableCell style={{ border: '1px solid black', verticalAlign: 'top' }}>
                                                {moment(recomendacion.plazo_de_implementacion).format("DD/MM/YYYY")}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ))}
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
