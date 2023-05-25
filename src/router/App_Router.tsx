import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Home } from '../Pages/Home/Home'
import { ArministradoresPage } from '../Pages/Administrador/ArministradoresPage'
import { PrivateRoute } from './PrivateRoute'
import { Login } from '../Pages/Login/Login'
import { Box, ZStack } from 'native-base'
import { Drawer_Component } from '../components/Drawer/Drawer'
import { Create_Administrador_Page } from '../Pages/Administrador/Create_Administrador'
import { Secretaria_Page } from '../Pages/Secretaria/Secretaria_Page'
import { Create_Secretaria_Page } from '../Pages/Secretaria/Create_Secretaria'
import { Entidad_Page } from '../Pages/Entidad/Entidad_page'
import { Create_Entidad_Page } from '../Pages/Entidad/Create_Entidad_Page'
import { Tipo_Informe_Page } from '../Pages/Tipo_Informe/Tipo_Informe_page'
import { Create_Tipo_Informe_Page } from '../Pages/Tipo_Informe/Create_Tipo_Informe_Page'
import { Sub_Tipo_Informe_Page } from '../Pages/Sub_Tipo_Informe/Sub_Tipo_Informe_page'
import { Create_Sub_Tipo_Informe_Page } from '../Pages/Sub_Tipo_Informe/Create_Sub_Tipo_Informe_Page'
import { Responsable_Page } from '../Pages/Responsable/Responsable_Page'
import { Create_Responsable_Page } from '../Pages/Responsable/Create_Responsble_Page'
// import { Informe_Page } from '../Pages/Informe/Informe_page'
import { Create_Informe_Page } from '../Pages/Informe/Create_Informe_Page'
import { Recmendaciones_Informe_Page } from '../Pages/Recomendaciones_Informe/Recomendaciones_Informe_Page'
import { Create_Recomendacion_Informe_Page } from '../Pages/Recomendaciones_Informe/Create_Recomendacion_Informe_Page'
// import { Reparticion_Page } from '../Pages/reparticion/Reparticion_page'
// import { Create_Reparticion_Page } from '../Pages/reparticion/Create_Reparticion_Page'
import { Documento_Page } from '../Pages/Documento/Documento/Documento_page'
import { Create_Documento_Page } from '../Pages/Documento/Documento/Create_Documento_Page'
import { useStore_sesion } from '../store/store_sesion'
import { Prueba_Usuarios } from '../Pages/PruebaDocumento/Prueba_Usuarios'
import { Prueba_Reparticiones } from '../Pages/PruebaDocumento/Prueba_Reparticiones'


export const App_Router = () => {
  const {isAuthenticated} = useStore_sesion()
  const user = true

  interface Ruta{
    path:string
    type:"private" | "public"
    element : JSX.Element
  }

  const lst_Rutas:Ruta[]=[
    {path:"/login" , element:<Login />,type:"public" },
    // {path:"/" , element:<Secretaria_Page />,type:"private" },
    // {path:"/documento" , element:<Documento_Page />,type:"private" },
    {path:"/administradores" , element:<ArministradoresPage />,type:"public" },
    {path:"/crear_administradores" , element:<Create_Administrador_Page />,type:"private" },
    {path:"/secretaria" , element:<Secretaria_Page />,type:"public" },
    {path:"/crear_secretaria" , element:<Create_Secretaria_Page />,type:"public" },
    {path:"/crear_entidad" , element:<Create_Entidad_Page />,type:"private" },
    {path:"/entidad" , element:<Entidad_Page />,type:"private" },
    {path:"/tipo_informe" , element:<Tipo_Informe_Page />,type:"private" },
    {path:"/crear_tipo_informe" , element:<Create_Tipo_Informe_Page />,type:"private" },
    {path:"/sub_tipo_informe" , element:<Sub_Tipo_Informe_Page />,type:"private" },
    {path:"/crear_sub_tipo_informe" , element:<Create_Sub_Tipo_Informe_Page />,type:"private" },
    {path:"/responsable" , element:<Responsable_Page />,type:"private" },
    {path:"/crear_responsable" , element:<Create_Responsable_Page />,type:"private" },
    // {path:"/informe" , element:<Informe_Page />,type:"private" },
    {path:"/crear_informe" , element:<Create_Informe_Page />,type:"private" },
    {path:"/recomendaciones_informe" , element:<Recmendaciones_Informe_Page />,type:"private" },
    {path:"/crear_recomendaciones_informe" , element:<Create_Recomendacion_Informe_Page />,type:"private" },

    //Rutas Modulo Documento
    // {path:"/reparticion" , element:<Reparticion_Page />,type:"private" },
    // {path:"/crear_reparticion" , element:<Create_Reparticion_Page />,type:"private" },

    {path:"/" , element:<Documento_Page />,type:"private" },
    {path:"/crear_documento" , element:<Create_Documento_Page />,type:"private" },


    {path:"/usuarios" , element:<Prueba_Usuarios />,type:"private" },
    {path:"/reparticiones" , element:<Prueba_Reparticiones />,type:"private" },


    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
  ]

  const RenderRutasPrivadas =()=>{
    return lst_Rutas.filter((ruta)=>ruta.type == "private").map((r)=>(
      <Route key={r.path} path={r.path}  element={
        <PrivateRoute user={isAuthenticated} Element={r.element} />
      }/>
    ))
  }
  const RenderRutasPublicas =()=>{
    return lst_Rutas.filter((ruta)=>ruta.type == "public").map((r)=>(
      <Route key={r.path} path={r.path}  element={
        <PrivateRoute user={user} Element={r.element} />
      }/>
    ))
  }
  return (
    
    <BrowserRouter>
      <div style={{height:"100vh"}}>
       
          
          <Routes>
            {
              RenderRutasPrivadas()
            }
             {
              RenderRutasPublicas()
            }
            {/* <Route path="/"  element={
              <PrivateRoute user={user} Element={<Home />} />
            }/>
            <Route path="/login" element={<Login />} />
            <Route path="/documento" element={<Documento_Page />} />

            <Route path="/administradores"  element={
              <PrivateRoute user={user} Element={<ArministradoresPage />} />
            }/>
            <Route path="/crear_administradores"  element={
              <PrivateRoute user={user} Element={<Create_Administrador_Page />} />
            }/>
            <Route path="/secretaria"  element={
              <PrivateRoute user={user} Element={<Secretaria_Page />} />
            }/>
            <Route path="/crear_secretaria"  element={
              <PrivateRoute user={user} Element={<Create_Secretaria_Page />} />
            }/> */}
            
          </Routes>
          <Drawer_Component/>
       
          
      </div>
    </BrowserRouter>
  )
}
