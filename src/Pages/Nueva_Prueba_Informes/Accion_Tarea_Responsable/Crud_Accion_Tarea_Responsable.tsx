import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';
import { axios_ } from '../../../axios/_axios';
import { useModal_Create_Accion_Responsable } from './Modal_Create_Accion_Responable';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal_Update_Accion_Responsable } from './Modal_Update_Accion_Responsable';








export const Crud_Accion_Tarea_Responsable: React.FC = () => {
    const navi = useNavigate()
    const { state: { id_tarea_responsable , } } = useLocation()
    const [acciones_responsable, set_Acciones_responsables] = useState<any[]>([]);



    const Modal_Create = useModal_Create_Accion_Responsable()
    const Modal_Update = useModal_Update_Accion_Responsable()


    useEffect(() => {
        get_acciones_responsables();
    }, []);

    const get_acciones_responsables = async () => {
        try {
            const res = await axios_.get(`/api/accion_tarea_responsable/by_tarea_responsable/${id_tarea_responsable}/lista`)
            set_Acciones_responsables(res.data?.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };



    const OpenModalUpdate = (id: number, data: any) => {
        const { accion } = data
        Modal_Update.loadFormData(
            id,
            {
                accion
            }
        )
        Modal_Update.openModal()
    }
    const eliminar_Accion_responsable = async (id:number)=>{
        const res = await axios_.delete(`/api/accion_tarea_responsable/delete/${id}`)
        console.log(res)
    }



    return (
        <div>
            <button onClick={() => {
                Modal_Create.loadFormData(0, { id_tarea_responsable:id_tarea_responsable } as any)
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
            <h1>Crud Accion para  Tarea_Responsable {id_tarea_responsable}</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Accion</TableCell>
                            <TableCell>Id Tarea_Responsable</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {acciones_responsable.map((accion_responsable) => (
                            <TableRow key={accion_responsable.id}>
                                <TableCell>{accion_responsable.accion}</TableCell>
                                <TableCell>{accion_responsable.id_tarea_responsable}</TableCell>
                                <TableCell>
                                    <Tooltip title="Editar Accion" arrow placement='top-start'>
                                        <IconButton onClick={() => OpenModalUpdate(accion_responsable.id, accion_responsable)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar Accion" arrow placement='top-start'>
                                        <IconButton onClick={() => { eliminar_Accion_responsable(accion_responsable.id) }}>
                                            <DeleteIcon />
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

