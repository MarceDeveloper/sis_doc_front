import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';
import { axios_ } from '../../../axios/_axios';
import { useModal_Create_Tarea_Descripcion } from './Modal_Create_Tarea_Descipcion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal_Update_Tarea_Descripcion } from './Modal_Update_Tarea_Descripcion.';








export const Crud_Tarea_Descipcion: React.FC = () => {
    const navi = useNavigate()
    const { state: { id_descripcion } } = useLocation()
    const [tareas, set_tareas] = useState<any[]>([]);



    const Modal_Create = useModal_Create_Tarea_Descripcion()
    const Modal_Update = useModal_Update_Tarea_Descripcion()


    useEffect(() => {
        get_tareas();
    }, []);

    const get_tareas = async () => {
        try {
            const res = await axios_.get(`/api/tarea_descripcion/by_descripcion/${id_descripcion}/lista`)
            set_tareas(res.data?.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };



    const OpenModalUpdate = (id: number, data: any) => {
        const { texto } = data
        Modal_Update.loadFormData(
            id,
            {
                texto
            }
        )
        Modal_Update.openModal()
    }

    const eliminar = async (id:number)=>{
        const res = await axios_.delete(`/api/tarea_descripcion/delete/${id}`)
        console.log(res)
    }

    return (
        <div>
            <button onClick={() => {
                Modal_Create.loadFormData(0, { id_descripcion: id_descripcion } as any)
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
            <h1>Crud Tarea para Descripcion {id_descripcion}</h1>
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
                        {tareas.map((tarea) => (
                            <TableRow key={tarea.id}>
                                <TableCell>{tarea.id}</TableCell>
                                <TableCell>{tarea.texto}</TableCell>
                                <TableCell>
                                    <Tooltip title="Editar Tarea" arrow placement='top-start'>
                                        <IconButton onClick={() => OpenModalUpdate(tarea.id, tarea)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar Tarea" arrow placement='top-start'>
                                        <IconButton onClick={() => { eliminar(tarea.id) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Administrar Responsables" arrow placement='top-start'>
                                        <IconButton onClick={() => { navi("/responsable_tarea", { state: { id_tarea: tarea.id } }) }}>
                                            <FaTasks />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Administrar Acciones Mae" arrow placement='top-start'>
                                        <IconButton onClick={() => { navi("/accion_tarea_mae",{state:{id_tarea:tarea.id}})  }}>
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
    );
};

