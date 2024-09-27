import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';
import { axios_ } from '../../../axios/_axios';
import { useModal_Create_Accion_MAE } from './Modal_Create_Accion_MAE';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal_Update_Accion_MAE } from './Modal_Update_Accion_MAE';








export const Crud_Accion_Tarea_MAE: React.FC = () => {
    const navi = useNavigate()
    const { state: { id_tarea } } = useLocation()
    const [acciones_mae, set_acciones_mae] = useState<any[]>([]);



    const Modal_Create = useModal_Create_Accion_MAE()
    const Modal_Update = useModal_Update_Accion_MAE()


    useEffect(() => {
        get_acciones_responsables();
    }, []);

    const get_acciones_responsables = async () => {
        try {
            const res = await axios_.get(`/api/accion_tarea_mae/by_tarea/${id_tarea}/lista`)
            set_acciones_mae(res.data?.data)
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
    const eliminar_Accion_mae = async (id:number)=>{
        const res = await axios_.delete(`/api/accion_tarea_mae/delete/${id}`)
        console.log(res)
    }



    return (
        <div>
            <button onClick={() => {
                Modal_Create.loadFormData(0, { id_tarea:id_tarea } as any)
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
            <h1>Crud Accion MAE para Tarea {id_tarea}</h1>
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
                        {acciones_mae.map((accion_mae) => (
                            <TableRow key={accion_mae.id}>
                                <TableCell>{accion_mae.accion}</TableCell>
                                <TableCell>{accion_mae.id_tarea_responsable}</TableCell>
                                <TableCell>
                                    
                                    <Tooltip title="Editar Informe" arrow placement='top-start'>
                                        <IconButton onClick={() => OpenModalUpdate(accion_mae.id, accion_mae)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar Informe" arrow placement='top-start'>
                                        <IconButton onClick={() => { eliminar_Accion_mae(accion_mae.id) }}>
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

