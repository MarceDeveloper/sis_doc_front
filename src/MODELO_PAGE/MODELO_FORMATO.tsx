


import React, { useEffect, useState } from 'react';
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
    Button,
    IconButton,
    Tooltip
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { DTO_reporte_formato_1 } from '../api/DTO_Seguimiento/DTO_formato_1';
import { service_reporte_seguimiento_informes } from '../api/service_reportes_seguimiento_informes';

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
        window.print();
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
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>{informe.titulo}</Typography>
            <Typography variant="h6"><strong>Número de Informe:</strong> {informe.numero_informe}</Typography>
            <Typography variant="h6"><strong>Fecha de Recepción:</strong> {new Date(informe.fecha_de_recepcion).toLocaleDateString()}</Typography>
            <Typography variant="h5" style={{ marginTop: '20px' }}>Recomendaciones</Typography>
            {informe.recomendaciones.map((rec, index) => (
                <Box key={index} mb={2}>
                    <Typography variant="subtitle1" color="primary">{rec.titulo}</Typography>
                    <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Título</strong></TableCell>
                                    <TableCell><strong>Texto</strong></TableCell>
                                    <TableCell><strong>Aceptación</strong></TableCell>
                                    <TableCell><strong>Justificación de No Aceptación</strong></TableCell>
                                    <TableCell><strong>Estado</strong></TableCell>
                                    <TableCell><strong>Estado de Descripción</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rec.descripcion.map((desc, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{desc.titulo}</TableCell>
                                        <TableCell>{desc.texto}</TableCell>
                                        <TableCell>{desc.aceptacion ? 'Sí' : 'No'}</TableCell>
                                        <TableCell>{desc.justificacion_no_aceptacion}</TableCell>
                                        <TableCell>{desc.estado}</TableCell>
                                        <TableCell>{desc.estado_descripcion}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ))}
            <Tooltip title="Imprimir informe" arrow>
                <IconButton 
                    onClick={handlePrint}
                    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
                >
                    <PrintIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};
