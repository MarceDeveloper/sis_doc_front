import React, { useState, useEffect } from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Description } from '@mui/icons-material';
import moment from 'moment-timezone';


export interface Informe {
    estado: string;
    fecha_de_recepcion: string;
    id: number;
    informe_de_1: string;
    informe_de_2: string;
    informe_de_3: string;
    numero_informe: string;
    recomendacion: Recomendacion[];
    titulo: string;
}

export interface Recomendacion {
    antecedentes: string;
    comentario: string;
    descripcion: Descripcion[];
    estado: string;
    estado_recomendacion: string;
    id: number;
    id_informe: number;
    numero_de_recomendacion: string;
    titulo: string;
}

export interface Descripcion {
    aceptacion: boolean;
    estado: string;
    estado_descripcion: string;
    id: number;
    id_recomendacion: number;
    justificacion_no_aceptacion: string;
    plazo_de_implementacion: Date;
    tarea: Tarea[];
    texto: string;
    titulo: string;
}

export interface Tarea {
    acciones_tareas_mae: AccionesTareasMae[];
    id: number;
    id_descripcion: number;
    tarea_responsable: TareaResponsable[];
    texto: string;
}

export interface AccionesTareasMae {
    accion: string;
    id: number;
    id_tarea: number;
}

export interface Responsable {
    cargo: string;
    id: number;
    id_reparticion: number;
    nombre: string;
    reparticion: Reparticion;
    tarea_responsable: TareaResponsable[];
}

export interface TareaResponsable {
    acciones_tareas_reponsables: AccionesTareasReponsable[];
    id: number;
    id_responsable: number;
    id_tarea: number;
    responsable: Responsable;
}

export interface Reparticion {
    actividad: string;
    codigo: number;
    createdAt: Date;
    deletedAt: null;
    direccion: string;
    estado: string;
    id_actividad: number;
    id_direccion: number;
    id_reparticion: number;
    id_unidad: number;
    id_unidad_padre: number;
    id_user_create: number;
    id_user_delete: null;
    id_user_update: null;
    nivel: string;
    nombre: string;
    updatedAt: Date;
}

export interface AccionesTareasReponsable {
    accion: string;
    id: number;
    id_tarea_responsable: number;
}




export const use_Modal_Detalle_Informe = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [informe, setInforme] = useState<Informe | null>(null)
 



    const Load = (informe: Informe) => {
        // informe.recomendacion.forEach(recomendacion => {
        //     recomendacion.descripcion.forEach(desc => {
        //         desc.tarea.forEach(tarea => {
        //             tarea.tarea_responsable.forEach(t_r => {
        //                 console.log(t_r)
        //                 t_r.responsable?.tarea_responsable?.forEach(x_t_r => {
        //                     x_t_r.acciones_tareas_reponsables?.forEach(a_t_r => {
        //                         console.log(a_t_r)
        //                     });
        //                 });
        //             });
        //         });
        //     });
        // });
        setInforme(informe)
    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    const get_responsables = (informe: Informe) => {
        const res = informe.recomendacion.flatMap((reco) => (
            reco.descripcion.flatMap((desc) => (
                desc.tarea.flatMap((tare) => (
                    tare.tarea_responsable.flatMap((t_r) => (
                        t_r.responsable
                    ))
                ))
            ))
        ))
        return res
    }



    const Modal_Content = () => {





        return (
            <>

                {
                    informe &&
                    <TableContainer >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell >N° DE RECOMENDACIÓN</TableCell>
                                    <TableCell >TITULO DE LA RECOMENDACIÓN</TableCell>
                                    <TableCell >DESCRIPCION DE LA RECOMENDACIONX</TableCell>
                                    <TableCell >ACEPTACIÓN</TableCell>
                                    <TableCell >JUSTIFICACIÓN DE NO ACEPTACIÓN</TableCell>
                                    <TableCell >PLAZO DE IMPLEMENTACIÓN</TableCell>
                                    <TableCell colSpan={1} >RESPONSABLES</TableCell>
                                    <TableCell >TAREAS A DESARROLLAR</TableCell>
                                    <TableCell >ACCIONES REALIZADAS POR  LA MAE</TableCell>
                                    <TableCell >ACCIONES REALIZADAS POR LOS RESPONSABLES</TableCell>
                                    <TableCell >ESTADO DE IMPLEMENTACIÓN DE RECOMENDACIÓN</TableCell>
                                    <TableCell >ANTECEDENTE DE LA RECOMENDACIÓN</TableCell>
                                    <TableCell >COMENTARIO</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={6} ></TableCell>
                                    <TableCell >NOMBRE Y APELLIDO / CARGO</TableCell>
                                    {/* <TableCell >CARGO</TableCell> */}
                                    <TableCell colSpan={7} ></TableCell>
                                    {/* <TableCell colSpan={6} >CARGO</TableCell> */}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    informe.recomendacion.map((recomendacion) => (
                                        <TableRow>
                                            <TableCell >{recomendacion.numero_de_recomendacion}</TableCell>
                                            <TableCell >{recomendacion.titulo}</TableCell>
                                            <TableCell >
                                                {
                                                    recomendacion.descripcion.map((descipcion) => (
                                                        <TableRow>(id {descipcion.id}) {descipcion.titulo}</TableRow>
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                {
                                                    recomendacion.descripcion.map((descipcion) => (
                                                        <TableRow>(id {descipcion.id}) {descipcion.aceptacion ? "si" : "no"} </TableRow>
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                {
                                                    recomendacion.descripcion.map((descipcion) => (
                                                        <TableRow>(id {descipcion.id}) {descipcion.aceptacion ? descipcion.justificacion_no_aceptacion : ""} </TableRow>
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                {
                                                    recomendacion.descripcion.map((descipcion) => (
                                                        <TableRow>(id {descipcion.id}) {moment(descipcion.plazo_de_implementacion).utc().format("DD-MM-YYYY")} </TableRow>
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                {
                                                    get_responsables(informe).map((responsable) => (
                                                        <TableRow> {responsable?.nombre} / {responsable?.cargo} </TableRow>
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                {
                                                    recomendacion.descripcion.map((desc) => (
                                                        desc.tarea.map((tarea) => (
                                                            <TableRow key={tarea.id}> {tarea.texto} </TableRow>
                                                        ))
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                {
                                                    recomendacion.descripcion.map((desc) => (
                                                        desc.tarea.map((tarea) => (
                                                            tarea.acciones_tareas_mae.map((accion_mae) => (
                                                                <TableRow key={accion_mae.id}> {accion_mae.accion} </TableRow>
                                                            ))
                                                        ))
                                                    ))
                                                }
                                            </TableCell>
                                            <TableCell >
                                                revisar este codigo
                                                {/* {
                                                    recomendacion?.descripcion?.map((desc) => (
                                                        desc?.tarea?.map((tarea) => (
                                                            tarea?.tarea_responsable?.map((tarea_responable) => (
                                                                tarea_responable.responsable?.tarea_responsable.map((t_r) => (
                                                                    t_r.acciones_tareas_reponsables.map((accion_responsable)=>(
                                                                        <TableRow key={accion_responsable.id}> {tarea_responable.responsable.nombre} / {tarea_responable.responsable.cargo} / {accion_responsable.accion} </TableRow>
                                                                    ))
                                                                ))
                                                            ))
                                                        ))
                                                    ))
                                                } */}
                                            </TableCell>
                                            <TableCell >{recomendacion.estado}</TableCell>
                                            <TableCell >{recomendacion.antecedentes}</TableCell>
                                            <TableCell >{recomendacion.comentario}</TableCell>
                                            {/* <TableCell >dasd</TableCell> */}

                                        </TableRow>
                                    ))
                                }

                                {/* <TableRow>
                                    <TableCell >dasd</TableCell>
                                    <TableCell >dasd</TableCell>
                                    <TableCell >dasd</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >dasd</TableCell>
                                    <TableCell >dasd</TableCell>
                                    <TableCell >dasd</TableCell>
                                </TableRow> */}
                            </TableBody>
                        </Table>
                    </TableContainer>

                }
            </>
        )
    }
    return {
        Load,
        Modal_Content,
        isOpen,
        openModal,
        closeModal,
    }
}
