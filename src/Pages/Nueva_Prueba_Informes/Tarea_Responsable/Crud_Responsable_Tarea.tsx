import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';
import { axios_ } from '../../../axios/_axios';
import { useModal_Create_Responsable_Tarea } from './Modal_Create_Responsable_Tarea';
import { useLocation, useNavigate } from 'react-router-dom';








export const Crud_Responsable_Tarea: React.FC = () => {
    const navi = useNavigate()
    const {state:{id_tarea}} = useLocation()
    const [tareas, set_tareas] = useState<any[]>([]);

 

    const Modal_Create = useModal_Create_Responsable_Tarea()


    useEffect(() => {
        get_tareas();
    }, []);

    const get_tareas = async () => {
        try {
            const res = await axios_.get(`/api/tarea_responsable/by_tarea/${id_tarea}/lista`)
            set_tareas(res.data?.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };
    const eliminar_tarea_responsable = async (id:number)=>{
        const res = await axios_.delete(`/api/tarea_responsable/delete/${id}`)
    }

    



   


    return (
        <div>
            <button onClick={() => {
                Modal_Create.openModal(id_tarea)
            }}>
                crear
            </button>
           
            <Modal open={Modal_Create.isOpen} onClose={() => { Modal_Create.closeModal() }} style={{ zIndex: 1000, display: "block" }}>
                <div className="modal-container" style={{ width: "90%", maxHeight: "90vh", overflow: "auto" }}>
                    <Modal_Create.ModalContent />
                </div>
            </Modal>
            <h1>Crud Responsable para Tarea {id_tarea}</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>ID tarea</TableCell>
                            <TableCell>ID responsable</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tareas.map((tarea) => (
                            <TableRow key={tarea.id}>
                                <TableCell>{tarea.id}</TableCell>
                                <TableCell>{tarea.id_tarea}</TableCell>
                                <TableCell>{tarea.id_responsable}</TableCell>
                                <TableCell>
                                    
                                    <Tooltip title="Eliminar Informe" arrow placement='top-start'>
                                        <IconButton onClick={() => {eliminar_tarea_responsable(tarea.id) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Administrar Acciones Responsable" arrow placement='top-start'>
                                        <IconButton onClick={() => { navi("/accion_tarea_responsable",{state:{id_tarea_responsable:tarea.id}})  }}>
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

