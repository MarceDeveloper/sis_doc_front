// import React from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Private_Route } from "./PrivateRoute";
import { Login } from "../Pages/Login/Login";
import { Page_Reparticion } from "../Pages/Reparticion/Page_Reparticion";
import { Page_Secretaria } from "../Pages/Secretaria/Page_Secretaria";
import { Page_Designar_Reparticiones_Usuario } from "../Pages/Page_Designar_Reparticiones_Usuario/Page_Designar_Reparticiones_Usuario";
import { Prueba_Usuarios } from "../Pages/Usuario/Prueba_Usuarios";
import { Reporte_By_Tipe_Document } from "../Pages/Reportes/Reporte_By_Tipe_Document";
import { Home_Seguimiento_Informes } from "../Pages/Nueva_Prueba_Informes/Home_Seguimiento_Informes/Home_Seguimiento_Informes";
import { List_Reportes_Informes } from "../Pages/Nueva_Prueba_Informes/Home_Seguimiento_Informes/List_Reportes_Informes";
import { Reporte_Informe_Formato1 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato1";
import { Reporte_Informe_Formato2 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato2";
import { Reporte_Informe_Formato3 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato3";
import { Reporte_Informe_Formato4 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato4";
import { Reporte_Informe_Formato5 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato5";
import { Reporte_Informe_Formato6 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato6";
import { Reporte_Informe_Formato7 } from "../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato7";
import { Crud_Informe } from "../Pages/Nueva_Prueba_Informes/Informe/Crud_Informe";
import { Crud_Recomendacion_Informe } from "../Pages/Nueva_Prueba_Informes/Recomendacion_Informe/Crud_Recomendacion_Informe";
import { Crud_Descripcion_Recomendacion } from "../Pages/Nueva_Prueba_Informes/Descripcion_Recomendacion/Crud_Descripcion_Recomendacion";
import { Crud_Tarea_Descipcion } from "../Pages/Nueva_Prueba_Informes/Tarea_Descripcion/Crud_Tarea_Descipcion";
import { Crud_Responsable_Tarea } from "../Pages/Nueva_Prueba_Informes/Tarea_Responsable/Crud_Responsable_Tarea";
import { Crud_Accion_Tarea_Responsable } from "../Pages/Nueva_Prueba_Informes/Accion_Tarea_Responsable/Crud_Accion_Tarea_Responsable";
import { Crud_Accion_Tarea_MAE } from "../Pages/Nueva_Prueba_Informes/Accion_Tarea_MAE/Crud_Accion_Tarea_MAE";
import { CrearInformePage } from "../Pages/Seguimiento_Informes/Crear_Informe/Crear_Informe_Page";
import { Detalle_Informe_Page } from "../Pages/Seguimiento_Informes/Detalle_Informe/Detalle_Informe_Page";
import { PDF_informe_formato_1 } from "../Pages/Seguimiento_Informes/Detalle_Informe/PDF_informe_1";
import { PDF_informe_formato_2 } from "../Pages/Seguimiento_Informes/Detalle_Informe/PDF_Formato_2";
import { PDF_lst_recomendaciones_por_año } from "../Pages/Seguimiento_Informes/Detalle_Informe/PDF_lst_recomendaciones_por_año";
import { Responsables_Page } from "../Pages/Seguimiento_Informes/Responsables/Responsables_Page/Responsables_Page";
import { Crear_Responsables } from "../Pages/Seguimiento_Informes/Responsables/Crear_Responsables/Crear_Responsables";
import { Reporte_1 } from "../components/Informes/Formato_1";
import { Reporte_2 } from "../components/Informes/Formato_2";
import { Reporte_3 } from "../components/Informes/Formato_3";
import { Reporte_6 } from "../components/Informes/Formato_6";
import { Reporte_7 } from "../components/Informes/Formato_7";

// import { Home } from '../Pages/Home/Home'
// import { PrivateRoute } from './PrivateRoute'
// import { Login } from '../Pages/Login/Login'
// // import { Drawer_Component } from '../components/Drawer/Drawer'
// import { useStore_sesion } from '../store/store_sesion'
// import { Prueba_Usuarios } from '../Pages/Usuario/Prueba_Usuarios'
// import { PruebaDocuemento } from '../Pages/PruebaDocumento/PruebaDocuemento'
// import { Prueba_Reparticiones } from '../Pages/Reparticion/Prueba_Reparticiones'
// import { Reporte_By_Tipe_Document } from '../Pages/Reportes/Reporte_By_Tipe_Document'
// import { Seguimiento_Home } from '../Pages/Seguimiento_Informes/Seguimiento_Home/Seguimiento_Home'
// import { Responsables_Page } from '../Pages/Seguimiento_Informes/Responsables/Responsables_Page/Responsables_Page'
// import { Crear_Responsables } from '../Pages/Seguimiento_Informes/Responsables/Crear_Responsables/Crear_Responsables'
// import { CrearInformePage } from '../Pages/Seguimiento_Informes/Crear_Informe/Crear_Informe_Page'
// import { Detalle_Informe_Page } from '../Pages/Seguimiento_Informes/Detalle_Informe/Detalle_Informe_Page'
// import { PDF_informe_formato_1 } from '../Pages/Seguimiento_Informes/Detalle_Informe/PDF_informe_1'
// import { PDF_informe_formato_2 } from '../Pages/Seguimiento_Informes/Detalle_Informe/PDF_Formato_2'
// import { PDF_lst_recomendaciones_por_año } from '../Pages/Seguimiento_Informes/Detalle_Informe/PDF_lst_recomendaciones_por_año'
// import { Crud_Informe } from '../Pages/Nueva_Prueba_Informes/Informe/Crud_Informe'
// import { Crud_Recomendacion_Informe } from '../Pages/Nueva_Prueba_Informes/Recomendacion_Informe/Crud_Recomendacion_Informe'
// import { Crud_Descripcion_Recomendacion } from '../Pages/Nueva_Prueba_Informes/Descripcion_Recomendacion/Crud_Descripcion_Recomendacion'
// import { Crud_Tarea_Descipcion } from '../Pages/Nueva_Prueba_Informes/Tarea_Descripcion/Crud_Tarea_Descipcion'
// import { Crud_Responsable_Tarea } from '../Pages/Nueva_Prueba_Informes/Tarea_Responsable/Crud_Responsable_Tarea'
// import { Crud_Accion_Tarea_Responsable } from '../Pages/Nueva_Prueba_Informes/Accion_Tarea_Responsable/Crud_Accion_Tarea_Responsable'
// import { Crud_Accion_Tarea_MAE } from '../Pages/Nueva_Prueba_Informes/Accion_Tarea_MAE/Crud_Accion_Tarea_MAE'
// import { Home_Seguimiento_Informes } from '../Pages/Nueva_Prueba_Informes/Home_Seguimiento_Informes/Home_Seguimiento_Informes'
// import { List_Reportes_Informes } from '../Pages/Nueva_Prueba_Informes/Home_Seguimiento_Informes/List_Reportes_Informes'
// import { Reporte_Informe_Formato1 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato1'
// import { Reporte_Informe_Formato2 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato2'
// import { Reporte_Informe_Formato3 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato3'
// import { Reporte_Informe_Formato4 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato4'
// import { Reporte_Informe_Formato5 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato5'
// import { Reporte_Informe_Formato6 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato6'
// import { Reporte_Informe_Formato7 } from '../Pages/Nueva_Prueba_Informes/Reportes_Informes/Formato1/Reporte_Informe_Formato7'
// import { Page_Reparticion } from '../Pages/Reparticion/Page_Reparticion'
// import { Page_Secretaria } from '../Pages/Secretaria/Page_Secretaria'
// import { Page_Designar_Reparticiones_Usuario } from '../Pages/Page_Designar_Reparticiones_Usuario/Page_Designar_Reparticiones_Usuario'


// export const App_Router = () => {
//   const {isAuthenticated,usuario} = useStore_sesion()
//   const user = true

//   interface Ruta{
//     path:string
//     type:"private" | "public"
//     Element : JSX.Element
//   }

//   const lst_Rutas:Ruta[]=[
//     {path:"/login" , Element:<Login />,type:"public" },
   

//     //Rutas Modulo Documento
//     {path:"/documentos_public" , Element:<PruebaDocuemento type_route='public'/>,type:"public" },

//     {path:"/" , Element:<Home/>,type:"public" },

//     // {path:"/" , Element:<h1 ><PruebaDocuemento type_route='private'/></h1>,type:"private" },
//     // {path:"/crear_documento" , element:<h1 >crear documento h1</h1>,type:"private" },


//     {path:"/usuarios" , Element:<Prueba_Usuarios />,type:"public" },
//     {path:"/designar_reparticiones_usuario" , Element:<Page_Designar_Reparticiones_Usuario />,type:"public" },

//     // {path:"/reparticiones" , Element:<Prueba_Reparticiones />,type:"private" },
//     {path:"/reparticiones" , Element:<Page_Reparticion />,type:"private" },
//     {path:"/secretarias" , Element:<Page_Secretaria />,type:"private" },

//     // {path:"/Reporte_By_Type_Doducment" , Element:<Reporte_By_Tipe_Document />,type:"private" },


//     // {path:"/seguimiento_informes" , Element:<Seguimiento_Home />,type:"public" },
    
//     {path:"/home_seguimiento_informes" , Element:<Home_Seguimiento_Informes />,type:"public" },
//     {path:"/informes_reportes" , Element:<List_Reportes_Informes />,type:"public" },
//     {path:"/informe_reporte_1" , Element:<Reporte_Informe_Formato1 />,type:"public" },
//     {path:"/informe_reporte_2" , Element:<Reporte_Informe_Formato2 />,type:"public" },
//     {path:"/informe_reporte_3" , Element:<Reporte_Informe_Formato3 />,type:"public" },
//     {path:"/informe_reporte_4" , Element:<Reporte_Informe_Formato4 />,type:"public" },
//     {path:"/informe_reporte_5" , Element:<Reporte_Informe_Formato5 />,type:"public" },
//     {path:"/informe_reporte_6" , Element:<Reporte_Informe_Formato6 />,type:"public" },
//     {path:"/informe_reporte_7" , Element:<Reporte_Informe_Formato7 />,type:"public" },


//     {path:"/seguimiento_informes" , Element:<Crud_Informe />,type:"public" },
//     {path:"/recomendacion_informe" , Element:<Crud_Recomendacion_Informe />,type:"public" },
//     {path:"/descripcion_recomendacion" , Element:<Crud_Descripcion_Recomendacion />,type:"public" },
//     {path:"/tarea_descipcion" , Element:<Crud_Tarea_Descipcion />,type:"public" },
//     {path:"/responsable_tarea" , Element:<Crud_Responsable_Tarea />,type:"public" },
//     {path:"/accion_tarea_responsable" , Element:<Crud_Accion_Tarea_Responsable />,type:"public" },
//     {path:"/accion_tarea_mae" , Element:<Crud_Accion_Tarea_MAE />,type:"public" },

    
    
    

//     {path:"/crear_informe" , Element:<CrearInformePage />,type:"public" },
//     {path:"/detalle_informe" , Element:<Detalle_Informe_Page />,type:"public" },

//     {path:"/PDF_informe_formato_1" , Element:<PDF_informe_formato_1 />,type:"public" },
//     {path:"/PDF_informe_formato_2" , Element:<PDF_informe_formato_2 />,type:"public" },
//     {path:"/PDF_lst_recomendaciones" , Element:<PDF_lst_recomendaciones_por_año />,type:"public" },

//     {path:"/responsables" , Element:<Responsables_Page />,type:"public" },
//     {path:"/crear_responsable" , Element:<Crear_Responsables />,type:"public" },

    

    


//     // {path:"login" , element:<Login />,type:"private" },
//     // {path:"login" , element:<Login />,type:"private" },
//     // {path:"login" , element:<Login />,type:"private" },
//     // {path:"login" , element:<Login />,type:"private" },
//     // {path:"login" , element:<Login />,type:"private" },
//   ]

//   const RenderRutasPrivadas =()=>{
//     return lst_Rutas.filter((ruta)=>ruta.type == "private").map((r)=>(
//       <Route key={r.path} path={r.path}  element={
//         <PrivateRoute user={isAuthenticated} Element={r.Element} />
//       }/>
//     ))
//   }
//   const RenderRutasPublicas =()=>{
//     return lst_Rutas.filter((ruta)=>ruta.type == "public").map((r)=>(
//       <Route key={r.path} path={r.path}  element={r.Element}/>
//     ))
//   }
//   return (
    
//     <BrowserRouter>
//       <div style={{height:"100vh"}}>
       
          
//           <Routes>
//             {
//               RenderRutasPrivadas()
//             }
//             {
//               RenderRutasPublicas()
//             }
//             {
//               usuario?.reparticion.nombre == "ORGANIZACIÓN Y MÉTODOS" &&
//               <Route  path={"/Reporte_By_Type_Doducment"}  element={
//                 <PrivateRoute user={isAuthenticated} Element={<Reporte_By_Tipe_Document/>} />
//               }/>
//             }

//             {/* <Route path="/"  element={
//               <PrivateRoute user={user} Element={<Home />} />
//             }/>
//             <Route path="/login" element={<Login />} />
//             <Route path="/documento" element={<Documento_Page />} />

//             <Route path="/administradores"  element={
//               <PrivateRoute user={user} Element={<ArministradoresPage />} />
//             }/>
//             <Route path="/crear_administradores"  element={
//               <PrivateRoute user={user} Element={<Create_Administrador_Page />} />
//             }/>
//             <Route path="/secretaria"  element={
//               <PrivateRoute user={user} Element={<Secretaria_Page />} />
//             }/>
//             <Route path="/crear_secretaria"  element={
//               <PrivateRoute user={user} Element={<Create_Secretaria_Page />} />
//             }/> */}
            
//           </Routes>
//           {/* <Drawer_Component/> */}
       
          
//       </div>
//     </BrowserRouter>
//   )
// }








export const RouterApp = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/home",
    element: <Private_Route><Home/></Private_Route> 
  },
  {
    path:"/reparticiones",
    element:<Private_Route idsPermitidos={[1,7]}><Page_Reparticion /></Private_Route>
  },
  {
    path:"/secretarias",
    element:<Private_Route idsPermitidos={[1,7]}><Page_Secretaria /></Private_Route>
  },

  {
    path:"/designar_reparticiones_usuario",
    element:<Private_Route idsPermitidos={[1,7]}><Page_Designar_Reparticiones_Usuario /></Private_Route>
  },
  {
    path:"/usuarios",
    element:<Private_Route idsPermitidos={[1,7]}><Prueba_Usuarios /></Private_Route>
  },
  {
    path:"/Reporte_By_Type_Doducment",
    element:<Private_Route idsPermitidos={[1,7]}><Reporte_By_Tipe_Document /></Private_Route>
  },


  //SEGUIMIENTO DE INFORMES

  {path:"/home_seguimiento_informes" , element:<Home_Seguimiento_Informes />},
  {path:"/informes_reportes" , element:<List_Reportes_Informes /> },
  {path:"/informe_reporte_1" , element:<Reporte_Informe_Formato1 />},
  {path:"/informe_reporte_1/:id_informe" , element:<Reporte_1 />},
  {path:"/informe_reporte_2/:id_informe" , element:<Reporte_2 />},
  {path:"/informe_reporte_3" , element:<Reporte_3 />},
  {path:"/informe_reporte_6" , element:<Reporte_6 />},
  {path:"/informe_reporte_7" , element:<Reporte_7 />},



  {path:"/informe_reporte_2" , element:<Reporte_Informe_Formato2 />},
  // {path:"/informe_reporte_3" , element:<Reporte_Informe_Formato3 />},
  {path:"/informe_reporte_4" , element:<Reporte_Informe_Formato4 />},
  {path:"/informe_reporte_5" , element:<Reporte_Informe_Formato5 />},
  {path:"/informe_reporte_6" , element:<Reporte_Informe_Formato6 />},
  {path:"/informe_reporte_7" , element:<Reporte_Informe_Formato7 />},


  {path:"/seguimiento_informes" , element:<Crud_Informe /> },
  {path:"/recomendacion_informe" , element:<Crud_Recomendacion_Informe /> },
  {path:"/descripcion_recomendacion" , element:<Crud_Descripcion_Recomendacion /> },
  {path:"/tarea_descipcion" , element:<Crud_Tarea_Descipcion />},
  {path:"/responsable_tarea" , element:<Crud_Responsable_Tarea />},
  {path:"/accion_tarea_responsable" , element:<Crud_Accion_Tarea_Responsable />},
  {path:"/accion_tarea_mae" , element:<Crud_Accion_Tarea_MAE />},

  
  
  

  {path:"/crear_informe" , element:<CrearInformePage />},
  {path:"/detalle_informe" , element:<Detalle_Informe_Page /> },

  {path:"/PDF_informe_formato_1" , element:<PDF_informe_formato_1 /> },
  {path:"/PDF_informe_formato_2" , element:<PDF_informe_formato_2 /> },
  {path:"/PDF_lst_recomendaciones" , element:<PDF_lst_recomendaciones_por_año /> },

  {path:"/responsables" , element:<Responsables_Page />},
  {path:"/crear_responsable" , element:<Crear_Responsables />},

 
 

]);