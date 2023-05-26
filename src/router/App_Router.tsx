import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Home } from '../Pages/Home/Home'
import { PrivateRoute } from './PrivateRoute'
import { Login } from '../Pages/Login/Login'
import { Box, ZStack } from 'native-base'
// import { Drawer_Component } from '../components/Drawer/Drawer'
import { useStore_sesion } from '../store/store_sesion'
import { Prueba_Usuarios } from '../Pages/Usuario/Prueba_Usuarios'
import { PruebaDocuemento } from '../Pages/PruebaDocumento/PruebaDocuemento'
import { Prueba_Reparticiones } from '../Pages/Reparticion/Prueba_Reparticiones'


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
   

    //Rutas Modulo Documento
  
    {path:"/" , element:<h1 ><PruebaDocuemento/></h1>,type:"private" },
    {path:"/crear_documento" , element:<h1 >crear documento h1</h1>,type:"private" },


    {path:"/usuarios" , element:<Prueba_Usuarios />,type:"public" },
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
          {/* <Drawer_Component/> */}
       
          
      </div>
    </BrowserRouter>
  )
}
