import React, { useRef } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import moment from 'moment-timezone';
import { DTO_lst_informes } from '../../../api/DTO_Seguimiento/DTO_lst_informes';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './StyleTable_Reportes.css'
import { Navbar } from '../../../components/Navbar/Navbar';
import { Box } from '@mui/material'

type Informe = DTO_lst_informes["data"][0];



export const PDF_informe_formato_2 = () => {
    const ref_table = useRef(null)
    const { state } = useLocation();
    const informe: Informe = state?.informe;


    const generate_pdf = useReactToPrint({
        content: () => ref_table.current,
        documentTitle: "tabla",
        onAfterPrint: () => { }
    })

    if (!informe) {
        return <h1>Error: Informe no encontrado</h1>;
        
    }

    const data = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        nombre: `Ejemplo ${index + 1}`,
        edad: 20 + index,
        ciudad: `Ciudad ${index + 1}`,
    }));

    return (
        <Box>
            <Navbar />

            <button onClick={() => { generate_pdf() }}>Crear PDF</button>

            <div ref={ref_table} style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ textAlign: "center" }}>Formato II</h1>
                <h3 style={{ textAlign: "center" }}>INFORMACIòN SOBRE INPLANTACIÒN DE RECOMENDACIONES</h3>

                <h4 style={{ marginTop: 20 }}>Entidad: Universidad Autonoma Juan Misael Saracho </h4>
                <h4>Informe de : {informe.numero_informe} {informe.informe_de} {informe.tipo_de_informe}</h4>

                <table className='table' >
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Recomendacion</th>
                            <th>Periodo</th>
                            <th>responsables</th>
                            <th>Tareas a Desarrollar</th>


                            {/* Agrega más encabezados de acuerdo a tus necesidades */}
                        </tr>
                    </thead>
                    <tbody>
                        {informe.recomendacion.map((recomendacion) => (
                            <tr key={recomendacion.id}>
                                <td>{recomendacion.numero_de_recomendacion}</td>
                                <td>{recomendacion.titulo}</td>
                                <td>{moment(recomendacion.plazo_de_implementacion).utc().format("DD-MM-YYYY")}</td>
                                <td>
                                    {
                                        recomendacion.recomendacion_responsable.map((item) => (
                                            <div key={item.responsable.id} className="responsable-firma">
                                                <span>{item.responsable.nombre}</span>
                                                <div className="linea-firma"></div>
                                            </div>
                                        ))
                                    }
                                </td>
                                <td>
                                    {
                                        recomendacion.tarea.map((tarea) => (
                                            <div>
                                                * {tarea.descripcion}
                                                <br />
                                            </div>
                                        ))
                                    }
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


                <div
                    style={{
                        backgroundColor: "#202020",
                        width: 250,
                        height: 1,
                        position: 'relative',
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 120
                    }}

                >
                    <span style={{ position: "absolute", right: 0, left: 0, top: 20, textAlign: "center" }}>
                        Firma del Rector UAJMS
                    </span>

                </div>
            </div>

        </Box>


    );
};
