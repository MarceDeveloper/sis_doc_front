import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { Home } from '../Pages/Home/Home'
import { PrivateRoute } from './PrivateRoute'
import { Login } from '../Pages/Login/Login'
// import { Drawer_Component } from '../components/Drawer/Drawer'
import { useStore_sesion } from '../store/store_sesion'
import { Prueba_Usuarios } from '../Pages/Usuario/Prueba_Usuarios'
import { PruebaDocuemento } from '../Pages/PruebaDocumento/PruebaDocuemento'
import { Prueba_Reparticiones } from '../Pages/Reparticion/Prueba_Reparticiones'
import { Reporte_By_Tipe_Document } from '../Pages/Reportes/Reporte_By_Tipe_Document'


export const App_Router = () => {
  const {isAuthenticated,usuario} = useStore_sesion()
  const user = true

  interface Ruta{
    path:string
    type:"private" | "public"
    Element : JSX.Element
  }

  const lst_Rutas:Ruta[]=[
    {path:"/login" , Element:<Login />,type:"public" },
   

    //Rutas Modulo Documento
    {path:"/documentos_public" , Element:<PruebaDocuemento type_route='public'/>,type:"public" },

    {path:"/" , Element:<Home/>,type:"public" },

    // {path:"/" , Element:<h1 ><PruebaDocuemento type_route='private'/></h1>,type:"private" },
    // {path:"/crear_documento" , element:<h1 >crear documento h1</h1>,type:"private" },


    {path:"/usuarios" , Element:<Prueba_Usuarios />,type:"public" },
    {path:"/reparticiones" , Element:<Prueba_Reparticiones />,type:"private" },
    // {path:"/Reporte_By_Type_Doducment" , Element:<Reporte_By_Tipe_Document />,type:"private" },


    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
    // {path:"login" , element:<Login />,type:"private" },
  ]

  const RenderRutasPrivadas =()=>{
    return lst_Rutas.filter((ruta)=>ruta.type == "private").map((r)=>(
      <Route key={r.path} path={r.path}  element={
        <PrivateRoute user={isAuthenticated} Element={r.Element} />
      }/>
    ))
  }
  const RenderRutasPublicas =()=>{
    return lst_Rutas.filter((ruta)=>ruta.type == "public").map((r)=>(
      <Route key={r.path} path={r.path}  element={r.Element}/>
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
            {
              usuario?.reparticion.nombre == "ORGANIZACIÓN Y MÉTODOS" &&
              <Route  path={"/Reporte_By_Type_Doducment"}  element={
                <PrivateRoute user={isAuthenticated} Element={<Reporte_By_Tipe_Document/>} />
              }/>
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
