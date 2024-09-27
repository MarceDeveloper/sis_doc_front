import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { axios_ } from '../../../axios/_axios';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip, Box, Fab } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReactSwal } from '../../../utils/ReactSwall/ReactSwall';
import { Swall_Update_Informe } from '../Update_Informe';
import { use_Informe_Create } from '../use_InformeCreate';
import { use_Informe_Update } from '../use_Informe_Update';
import { useModal_Update_Informe } from './Modal_Informe_Update';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';


import { useModal_Crear_Informe } from './Modal_Informe_Create';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../../components/Navbar/Navbar';
import { use_Modal_Detalle_Informe } from './Modal_Detalle_Informe';
import moment from 'moment-timezone';

import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { AiOutlinePlus } from 'react-icons/ai';
import ExcelTable from '../../Home/Exel_Table_Temporal';


interface Informe {
    id: number
    titulo: string;
    numero_informe: string;
    fecha_de_recepcion: string;
    informe_de_1: string;
    informe_de_2: string;
    informe_de_3: string;
}




interface InformeFormData_Create {

    titulo: string;
    numeroInforme: string;
    fechaRecepcion: string;
    informe1: string;
    informe2: string;
    informe3: string;
}


export const Crud_Informe: React.FC = () => {
    const navi = useNavigate()
    const [informes, setInformes] = useState<Informe[]>([]);
    const { handleSubmit, register, formState: { errors, isValid } } = useForm<InformeFormData_Create>();

    const Modal_Detalle_Informe = use_Modal_Detalle_Informe()

    const { Create } = use_Informe_Create()
    const { Update } = use_Informe_Update()

    // const { openModal:create_open_modal, ModalContent:Modal_Create, loadInformeData:loadInformeData_Create, closeModal:closeModal_Create, isOpen:isOpen_Create } = useModalUpdateInforme()
    const Modal_Update = useModal_Update_Informe({})
    const Modal_Create = useModal_Crear_Informe()

    const modal_create = ReactSwal

    useEffect(() => {
        obtenerInformes();
    }, []);

    const obtenerInformes = async () => {
        try {
            const res = await axios_.get("/api/informes/lista/more_info")
            setInformes(res.data?.data)
            console.log(res.data.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const onSubmit: SubmitHandler<InformeFormData_Create> = (data) => {
        console.log(data);
        modal_create.close()

    };

    const OpenModalUpdate = (id: number, informe: Informe) => {
        console.log("select ", informe)
        const { fecha_de_recepcion, informe_de_1, informe_de_2, informe_de_3, numero_informe, titulo } = informe
        console.log(fecha_de_recepcion)
        console.log(new Date(fecha_de_recepcion).toISOString())
        Modal_Update.loadInformeData(
            id,
            {

                fecha_de_recepcion: moment(fecha_de_recepcion).utc().format("YYYY-MM-DD"),
                informe_de_1,
                informe_de_2,
                informe_de_3,
                numero_informe,
                titulo

            }
        )
        Modal_Update.openModal()
    }

    const eliminar_informe = async (id: number) => {
        const res = await axios_.delete(`/api/informes/delete/${id}`)
        console.log(res)
    }


    const Swall_Crate_Informe = async () => {
        await modal_create.fire({
            html: (
                <Container component="main" maxWidth="md">
                    <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                        <Typography variant="h5" gutterBottom>
                            Crear Informe
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('titulo', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Título"
                                        error={!!errors.titulo}
                                        helperText={errors.titulo && errors.titulo.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('numeroInforme', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Número de Informe"
                                        error={!!errors.numeroInforme}
                                        helperText={errors.numeroInforme && errors.numeroInforme.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('fechaRecepcion', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        type="date"
                                        label="Fecha de Recepción"
                                        error={!!errors.fechaRecepcion}
                                        helperText={errors.fechaRecepcion && errors.fechaRecepcion.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('informe1', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Informe 1"
                                        error={!!errors.informe1}
                                        helperText={errors.informe1 && errors.informe1.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('informe2', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Informe 2"
                                        error={!!errors.informe2}
                                        helperText={errors.informe2 && errors.informe2.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...register('informe3', { required: 'Este campo es requerido' })}
                                        fullWidth
                                        label="Informe 3"
                                        error={!!errors.informe3}
                                        helperText={errors.informe3 && errors.informe3.message}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" onClick={() => { console.log() }} variant="contained" color="primary" style={{ marginTop: 20 }}>
                                Crear Informe
                            </Button>
                        </form>
                    </Paper>
                </Container>
            )
        })
        alert("me lleva")
    }

    return (
        <Box>
            <Navbar />
            <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16 }}>
                <AiOutlinePlus size={50} onClick={() => {
                     Modal_Create.openModal()
                }} />
            </Fab>
            {/* <button onClick={() => {
                Modal_Create.openModal()
            }}>
                crear
            </button> */}
            <Modal open={Modal_Update.isOpen} onClose={() => { Modal_Update.closeModal() }} style={{ zIndex: 1000, display: "block" }}>
                <div className="modal-container" style={{ width: "90%", maxHeight: "90vh", overflow: "auto" }}>
                    <Modal_Update.ModalContent />
                </div>
            </Modal>
            <Modal open={Modal_Create.isOpen} onClose={() => { Modal_Create.closeModal() }} style={{ zIndex: 1000, display: "block" }}>
                <div className="modal-container" style={{ width: "90%", maxHeight: "90vh", overflow: "auto" }}>
                    <Modal_Create.ModalContent />
                </div>
            </Modal>
            <Modal open={Modal_Detalle_Informe.isOpen} onClose={() => { Modal_Detalle_Informe.closeModal() }} style={{ zIndex: 1000, display: "block" }}>
                <div className="modal-container" style={{ width: "90%", maxHeight: "90vh", overflow: "auto" }}>
                    <Modal_Detalle_Informe.Modal_Content />
                    {/* <ExcelTable/> */}
                </div>
            </Modal>

            <h1>Informes {Modal_Detalle_Informe.isOpen + ""}</h1>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Título</TableCell>
                            <TableCell>Acciones</TableCell>
                            <TableCell>Vista</TableCell>
                            <TableCell>Formatos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {informes.map((informe) => (
                            <TableRow key={informe.id}>
                                <TableCell>{informe.id}</TableCell>
                                <TableCell>{informe.titulo}</TableCell>
                                <TableCell>
                                    <Tooltip title="Editar Informe" arrow placement='top-start'>
                                        <IconButton onClick={() => OpenModalUpdate(informe.id, informe)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar Informe" arrow placement='top-start'>
                                        <IconButton onClick={() => { eliminar_informe(informe.id) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Administrar Recomendaciones" arrow placement='top-start'>
                                        <IconButton onClick={() => { navi("/recomendacion_informe", { state: { id_informe: informe.id } }) }}>
                                            <FaTasks />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    <Tooltip title="Ver Detalle Informe" arrow placement='top-start'>
                                        <IconButton onClick={() => {
                                            Modal_Detalle_Informe.Load(informe as any)
                                            // console.log("llegue")
                                            Modal_Detalle_Informe.openModal()
                                        }}>
                                            <FaTasks />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>

                                <TableCell>
                                    {
                                        Array.from({ length: 2 }).map((a, index) => (
                                            <Tooltip title={index + 1}>
                                                <IconButton onClick={()=>{navi(`/informe_reporte_${index + 1}/${informe.id}`)}}>
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </Tooltip>
                                        ))
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

