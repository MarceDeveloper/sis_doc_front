import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip, Fab } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';
import { axios_ } from '../../../axios/_axios';
import { useModal_Create_Descripcion } from './Modal_Create_Descripcion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal_Update_Descripcion } from './Modal_Update_Descripcion.';
import { Navbar } from '../../../components/Navbar/Navbar';
import { AiOutlinePlus } from 'react-icons/ai';
import { service_recomendaciones } from '../../../api/service_recomendacion';








export const Crud_Descripcion_Recomendacion: React.FC = () => {
    const navi = useNavigate()
    const { state: { id_recomendacion } } = useLocation()
    const [recomendacion, set_recomendacion] = useState<any>(null)
    const [descipciones, set_descripciones] = useState<any[]>([]);



    const Modal_Create = useModal_Create_Descripcion()
    const Modal_Update = useModal_Update_Descripcion()


    useEffect(() => {
        get_Descripciones();
        get_recomendacion()
    }, []);

    const get_recomendacion = async ()=>{
        const res = await service_recomendaciones.findById(+id_recomendacion)
        set_recomendacion(res)
        console.log({res})
    }
    const get_Descripciones = async () => {
        try {
            const res = await axios_.get(`/api/descripcion_recomendacion/by_recomendacion/${id_recomendacion}/lista`)
            set_descripciones(res.data?.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };



    const OpenModalUpdate = (id: number, recomednacion: any) => {
        const { aceptacion, estado, estado_descripcion, id_recomendacion, justificacion_no_aceptacion, plazo_de_implementacion, texto, titulo } = recomednacion
        Modal_Update.loadFormData(
            id,
            {
                aceptacion,
                estado,
                estado_descripcion,
                id_recomendacion,
                justificacion_no_aceptacion,
                plazo_de_implementacion,
                texto,
                titulo

            }
        )
        Modal_Update.openModal()
    }

    const eliminar = async (id: number) => {
        const res = await axios_.delete(`/api/descripcion_recomendacion/delete/${id}`)
        console.log(res)
    }



    return (
        <>
            <Navbar />
            <div>
                <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <AiOutlinePlus size={50} onClick={() => {
                        Modal_Create.openModal()
                    }} />
                </Fab>
                <button onClick={() => {
                    Modal_Create.loadFormData(0, { id_recomendacion: id_recomendacion } as any)
                    Modal_Create.openModal()
                }}>
                    crear
                </button>
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
                <h1>Descripciones para  {recomendacion?.titulo}</h1>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Título</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {descipciones.map((descripcion) => (
                                <TableRow key={descripcion.id}>
                                    <TableCell>{descripcion.id}</TableCell>
                                    <TableCell>{descripcion.titulo}</TableCell>
                                    <TableCell>
                                        <Tooltip title="Editar Descipcion" arrow placement='top-start'>
                                            <IconButton onClick={() => OpenModalUpdate(descripcion.id, descripcion)}>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Eliminar Descipcion" arrow placement='top-start'>
                                            <IconButton onClick={() => { eliminar(descripcion.id) }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Administrar Tareas" arrow placement='top-start'>
                                            <IconButton onClick={() => { navi("/tarea_descipcion", { state: { id_descripcion: descripcion.id } }) }}>
                                                <FaTasks />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    );
};

