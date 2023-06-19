// import { Box, HStack, Icon, IconButton, Pressable, StatusBar,Text } from "native-base";
// import { useStore_Ui } from "../../store/store_ui";
// import { FaBars } from 'react-icons/fa';
// import { BiLogOut } from 'react-icons/bi';

// import { useLocation, useParams } from "react-router-dom";
// import { useStore_sesion } from "../../store/store_sesion";
// import { useEffect, useRef, useState } from "react";
// import { Grid ,Typography} from "@mui/material";
// import { Colores } from "../../config/config_style";


// interface Iprops {
//   Height_Navbar? : (Height_nav:number)=> void
// }

// export const Navbar = ({
//   Height_Navbar
// }:Iprops) => {
//     const [Height_nav, setHeight_nav] = useState(0)
//     const componenteRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       console.log(componenteRef)
//       if (Height_Navbar) {
//         if (componenteRef.current) {
//           const alturaComponente = componenteRef.current.clientHeight;
//           Height_Navbar(alturaComponente)
//         }
//       }
//     }, []);

//     const {logout} = useStore_sesion()
//     const {pathname } = useLocation()
//     const {drawer_visible,toogle_Drawer} = useStore_Ui()
//     return (
//       <>
//        <Grid ref={componenteRef} minHeight={54} pl={3} boxShadow={5} position={"sticky"} top={0} zIndex={2} container  sx={{backgroundColor:Colores.Navbar}}>
//           <Grid xs={1} display={"flex"} height={50}  sx={{ alignItems:"center", justifyContent:"start"}}>
//             <FaBars onClick={()=>{toogle_Drawer()}} color="white" size={25}/>
//           </Grid>
//           <Grid xs={9} overflow={"hidden"} display={"flex"} height={50}  sx={{ alignItems:"center" }}>
//             {/* <Typography color={"white"} whiteSpace={"nowrap"}>Sistema de Seguimiento de Documentos</Typography> */}
//             <span  style={{color:"white", fontSize:20,fontWeight:"bold",whiteSpace:"nowrap" }}>
//               Sistema de Seguimiento de Documentos UAJMS
//             </span>
//               {/* Sistema 1.0.0  {pathname} */}
//           </Grid>
//           <Grid xs={2} pr={3} display={"flex"} height={50}  sx={{alignItems:"center", justifyContent:"end"}}>
//             <BiLogOut onClick={()=>{logout()}} color="white" size={25}/>
//           </Grid>
//         </Grid>
        
      
//         {/* <HStack width={"100vw"} ref={componenteRef} shadow={5} position={"sticky"} top={0} zIndex={2}   bg="primary.900" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
//           <HStack alignItems="center" px={3}>
//             <FaBars onClick={()=>{toogle_Drawer()}} color="white" size={25}/>
//             <Text ml={3} color="white" fontSize="20" fontWeight="bold">
//               Sistema 1.0.0  {pathname}
//             </Text>
          

//           </HStack>
//           <HStack  px={3}>
//             <BiLogOut onClick={()=>{logout()}} color="white" size={25}/>
//           </HStack>
//         </HStack> */}
//       </>
//     )
  
//   }
  



import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton, ListSubheader, Box } from '@mui/material';
// import { Menu as MenuIcon, Home as HomeIcon, AccountCircle as AccountCircleIcon, Mail as MailIcon } from '@mui/icons-material';
import {FaUserCircle,FaBars} from 'react-icons/fa' 
import { BiLogOut ,BiUserPlus} from 'react-icons/bi';


import { Colores } from '../../config/config_style';
import { useStore_sesion } from '../../store/store_sesion';
import { useNavigate } from 'react-router-dom';




export const Navbar: React.FC = () => {
  const navi = useNavigate()
  const {usuario,logout,isAuthenticated} = useStore_sesion()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleMenuClick = () => {
    setIsDrawerOpen(false)
    // Handle menu item click
  };

  interface I_Ruta{
    label:string
    icono:React.ReactElement
    path:string
  }
  const colorIcon = "white"
  const lst_Rutas : I_Ruta[] = [
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Home",
      path:"/"
    },
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Documento",
      path:"/"
    },
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Usuarios",
      path:"/usuarios"
    },
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Reparticiones",
      path:"/reparticiones"
    },
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Reporte",
      path:"/Reporte_By_Type_Doducment"
    },
  ]
  return (
    <>
      <AppBar color='primary' position="sticky" sx={{zIndex:200}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <FaBars />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            Sistema de Seguimiento de Documentos OyM
          </Typography>
          {
            isAuthenticated ?
            <IconButton color="inherit" aria-label="logout" onClick={()=>{logout()}}>
              <BiLogOut  />
            </IconButton>
            :
            <IconButton color="inherit" aria-label="logout" onClick={()=>{navi("/Login")}}>
              <BiUserPlus  />
            </IconButton> 
          }
          {/* <IconButton color="inherit" aria-label="logout" onClick={()=>{logout()}}>
            <BiLogOut  />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      {
        isAuthenticated &&
        <Drawer  draggable={true} anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}
          sx={{
            width: 300, // Establece el ancho del Drawer
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor:Colores.color2,
              color:"white",
              width: ["90vw",250], // Establece el ancho del contenido interno del Drawer
              boxSizing: 'border-box',
            },
          }}
        >
          <List
            subheader={
              <ListSubheader component="div" sx={{ display: 'flex',flexDirection:"column", height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <ListItemIcon >
                    <FaUserCircle size={60} style={{margin:"auto"}} />
                </ListItemIcon>
                <Typography variant="subtitle1">
                  {usuario?.nombre}
                </Typography>
              </ListSubheader>
            }
          >
            {lst_Rutas.map((ruta, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={()=>{
                  navi(ruta.path)
                }}>
                  <ListItemIcon>
                    {ruta.icono}
                  </ListItemIcon>
                  <Typography fontSize={18}>{ruta.label}</Typography>
                  {/* <ListItemText  primary={text} /> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            {/* <List>
              <ListItem button onClick={handleMenuClick}>
                <ListItemIcon>
                  <FaUserCircle />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={handleMenuClick}>
                <ListItemIcon>
                  <FaUserCircle />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button onClick={handleMenuClick}>
                <ListItemIcon>
                  <FaUserCircle />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </List> */}
        </Drawer>
      }
    </>
  );
};
