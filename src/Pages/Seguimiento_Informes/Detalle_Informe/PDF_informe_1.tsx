// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
// import moment from 'moment-timezone';
// import { DTO_lst_informes } from '../../../api/DTO_Seguimiento/DTO_lst_informes';
// import { useLocation, useParams } from 'react-router-dom';

// type Informe = DTO_lst_informes["data"][0];

// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'column',
//         backgroundColor: '#ffffff',
//         padding: 20,
//     },
//     section: {
//         marginBottom: 10,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     label: {
//         fontWeight: 'bold',
//     },
//     content: {
//         marginLeft: 10,
//     },
//     recommendation: {
//         marginLeft: 10,
//         marginBottom: 10,
//     },
//     table: {
//         width: '100%',
//         // border: '1px solid #000',
//         marginBottom: 10,
//     },
//     tableRow: {
//         flexDirection: 'row',
//         border: '1px solid #000',

//     },
//     tableCell: {
//         flex: 1,
//         padding: 5,
//         textAlign: 'center',
//         borderRight: '1px solid #000',
//         fontSize:12
//     },
//     tableHeaderCell: {
//         fontSize:14,
//         flex: 1,
//         padding: 5,
//         textAlign: 'center',
//         fontWeight: 'bold',
//         borderBottom: '1px solid #000',
//         borderRight: '1px solid #000',

//     },
//     signatureLine: {
//         marginTop: 40, 
//         borderBottom: '1px solid #000', 
//         width:200,
//         marginHorizontal:"auto"
//     },
//     signatureText: {
//         marginTop: 10, 
//         fontSize: 14, 
//         fontWeight: 'bold',
//         textAlign:"center"
//     },
// });





// export const PDF_informe_formato_1 = () => {

//     const { state } = useLocation();
//     const informe: Informe = state?.informe;

//     console.log(informe)

//     if (!informe) {
//       return <h1>error</h1>
//     }
//     return (
//         <PDFViewer showToolbar width={"100%"} height={600}>
//           {/* <Informe_PDF informe={informe} /> */}
//             <Document>
//                 <Page size="A4" style={styles.page} wrap={true}>
//                     <View style={styles.section}>
//                         <Text style={styles.title}>Detalles del Informe</Text>
//                         <View style={styles.content}>
//                             <Text style={styles.label}>Título del Informe:</Text>
//                             <Text>{informe.titulo}</Text>
//                             <Text style={styles.label}>Fecha de Recepción:</Text>
//                             <Text>{moment(informe.fecha_de_recepcion).format("DD-MM-YYYY")}</Text>
//                             <Text style={styles.label}>Número de Informe:</Text>
//                             <Text>{informe.numero_informe}</Text>
//                             <Text style={styles.label}>Estado:</Text>
//                             <Text>{informe.estado}</Text>
//                             <Text style={styles.label}>Informe de:</Text>
//                             <Text>{informe.informe_de}</Text>
//                             <Text style={styles.label}>Tipo de Informe:</Text>
//                             <Text>{informe.tipo_de_informe}</Text>
//                         </View>
//                     </View>
//                     <View style={styles.section}>
//                         <Text style={styles.title}>Recomendaciones</Text>
//                         <View style={styles.table}>
//                             <View style={styles.tableRow} >
//                                 <Text style={styles.tableHeaderCell}>Recomendación</Text>
//                                 <Text style={styles.tableHeaderCell}>Aceptación</Text>
//                                 <Text style={styles.tableHeaderCell}>Justificación de No Aceptación</Text>
//                             </View>
//                             {informe.recomendacion.map((recomendacion) => (
//                                 <View key={recomendacion.id} style={styles.tableRow}>
//                                     <Text style={styles.tableCell}>{recomendacion.titulo}</Text>
//                                     <Text style={styles.tableCell}>{recomendacion.aceptacion ? 'Sí' : 'No'}</Text>
//                                     <Text style={styles.tableCell}>{recomendacion.justificacion_no_aceptacion}</Text>
//                                 </View>
//                             ))}

//                         </View>

//                         <View style={styles.section}>
//                             <View style={styles.signatureLine} />
//                             <Text style={styles.signatureText}>RECTOR</Text>
//                         </View>
//                     </View>
//                 </Page>
//             </Document>
//         </PDFViewer>
//     );
// };


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



export const PDF_informe_formato_1 = () => {
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
    console.log("este informe ", informe)

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
                <h1 style={{ textAlign: "center" }}>Formato I</h1>
                <h3 style={{ textAlign: "center" }}>INFORMACION SOBRE INPLANTACIÒN DE RECOMENDACIONES</h3>

                <h4 style={{marginTop:20}}>Entidad: {informe.informe_de}</h4>
                <h4>Informe de : {informe.tipo_de_informe}</h4>
                <h4>Fecha  : {moment(informe.fecha_de_recepcion).utc().format("DD-MM-YYYY")}</h4>

                <table className='table' >
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Recomendacion</th>
                            <th>Aceptacion</th>
                            <th>Justificacion de no aceptacio</th>


                            {/* Agrega más encabezados de acuerdo a tus necesidades */}
                        </tr>
                    </thead>
                    <tbody>
                        {informe.recomendacion.map((recomendacion) => (
                            <tr key={recomendacion.id}>
                                <td>{recomendacion.numero_de_recomendacion}</td>
                                <td>{recomendacion.titulo}</td>
                                <td>{recomendacion.aceptacion ? "SI" : "NO"}</td>
                                <td>{recomendacion.aceptacion == false ? recomendacion.justificacion_no_aceptacion : ""}</td>


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
                        marginLeft:"auto",
                        marginRight:"auto",
                        marginTop:120
                    }}

                >
                    <span style={{position:"absolute",right:0 ,left:0,top:20,textAlign:"center"}}>
                        Firma del Rector UAJMS
                    </span>

                </div>

            </div>

        </Box>


    );
};
