import React, { useState, useEffect, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Button, TextField, Typography, Container, Grid, Paper, Modal, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaTasks } from 'react-icons/fa';
import { axios_ } from '../../../axios/_axios';
import { useModal_Recomendacion_Create } from './Modal_Create_Recomendacion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModal_Recomendacion_Update } from './Modal_Update_Recomendacion.';
import moment from 'moment-timezone';
import { api_service_informe } from '../../../api/service_informe';








export const Crud_Recomendacion_Informe: React.FC = () => {
    const {state:{id_informe}} = useLocation()
    const [informe, set_informe] = useState<any>(null)
    const [recomendaciones, set_recomendaciones] = useState<any[]>([]);
    const navi = useNavigate()

 

    const Modal_Create = useModal_Recomendacion_Create()
    const Modal_Update = useModal_Recomendacion_Update()


    useEffect(() => {
        get_Recomendaciones();
        get_informe()
        
    }, []);
    const get_informe = async ()=>{
        if (id_informe) {
            const informe = await api_service_informe.by_id(+id_informe)
            console.log(informe)
            set_informe(informe)
        }
    }

    const get_Recomendaciones = async () => {
        try {
            const res = await axios_.get(`/api/recomendacion/by_informe/${id_informe}/lista`)
            console.log(res)
            set_recomendaciones(res.data?.data)
        } catch (error) {
            console.error('Error de red:', error);
        }
    };



    const OpenModalUpdate = (id: number, recomednacion: any) => {
        const { antecedentes, comentario, estado_recomendacion, id_informe, numero_de_recomendacion, titulo,plazo_de_implementacion } = recomednacion
        Modal_Update.loadFormData(
            id,
            {
                antecedentes,
                comentario,
                estado_recomendacion,
                id_informe,
                numero_de_recomendacion,
                titulo,
                plazo_de_implementacion:moment(plazo_de_implementacion).utc().format("YYYY-MM-DD")

            }
        )
        Modal_Update.openModal()
        
    }

    const eliminar = async (id:number)=>{
        const res = await axios_.delete(`/api/recomendacion/delete/${id}`)
        get_Recomendaciones()
        console.log(res)
    }



    return (
        <div>
            <h1>{id_informe}</h1>
            <button onClick={() => {
                Modal_Create.loadFormData(0,{id_informe:id_informe} as any)
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
            <h1>Recomendaciones para informe {informe?.titulo}</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Título</TableCell>
                            <TableCell>plazo de implementacion</TableCell>
                            <TableCell>estado recomendacion</TableCell>

                            <TableCell>Acciones</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recomendaciones.map((recomendacion) => (
                            <TableRow key={recomendacion.id}>
                                <TableCell>{recomendacion.id}</TableCell>
                                <TableCell>{recomendacion.titulo}</TableCell>
                                <TableCell>{moment(recomendacion.plazo_de_implementacion).utc().format("DD/MM/YYYY")}</TableCell>
                                <TableCell>{recomendacion.estado_recomendacion}</TableCell>

                                <TableCell>
                                    <Tooltip title="Editar Recomendacion" arrow placement='top-start'>
                                        <IconButton onClick={() => OpenModalUpdate(recomendacion.id, recomendacion)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar Recomendacion" arrow placement='top-start'>
                                        <IconButton onClick={() => { eliminar(recomendacion.id)}}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Administrar Descipciones" arrow placement='top-start'>
                                        <IconButton onClick={() => {navi("/descripcion_recomendacion",{state:{id_recomendacion:recomendacion.id}}) }}>
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

