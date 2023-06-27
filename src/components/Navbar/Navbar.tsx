
  



import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton, ListSubheader, Box } from '@mui/material';
// import { Menu as MenuIcon, Home as HomeIcon, AccountCircle as AccountCircleIcon, Mail as MailIcon } from '@mui/icons-material';
import {FaUserCircle,FaBars,FaBuilding,FaUsers} from 'react-icons/fa' 
import { BiLogOut ,BiUserPlus,} from 'react-icons/bi';
import { AiOutlineUsergroupAdd,AiTwotoneHome} from 'react-icons/ai';
import { IoMdDocument} from 'react-icons/io';
import { HiDocumentReport} from 'react-icons/hi';





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
      icono:<AiTwotoneHome color={colorIcon}/>,
      label:"Home",
      path:"/"
    },
    {
      icono:<IoMdDocument color={colorIcon}/>,
      label:"Documento",
      path:"/"
    },
    // {
    //   icono:<FaUsers color={colorIcon}/>,
    //   label:"Usuarios",
    //   path:"/usuarios"
    // },
    {
      icono:<FaBuilding color={colorIcon}/>,
      label:"Reparticiones",
      path:"/reparticiones"
    },
    
  ]
  const lst_Rutas_only_oym : I_Ruta[] = [
    {
      icono:<HiDocumentReport color={colorIcon}/>,
      label:"Reporte",
      path:"/Reporte_By_Type_Doducment"
    },
    {
      icono:<FaUsers color={colorIcon}/>,
      label:"Usuarios",
      path:"/usuarios"
    },
  ]
  return (
    <>
      <AppBar color='primary' position="sticky" sx={{zIndex:200}}>
        <Toolbar>
          { isAuthenticated &&
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <FaBars />
            </IconButton>
          }
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            Sistema de Seguimiento de Documentos OyM
          </Typography>
          {
            isAuthenticated ?
            <IconButton color="inherit" aria-label="logout" onClick={async ()=>{
              await logout()
              navi("/")
            }}>
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
              <ListSubheader component="div" sx={{ display: 'flex',flexDirection:"column", height: 140, justifyContent: 'center', alignItems: 'center' }}>
               
                <ListItemIcon >
                    <FaUserCircle size={60} style={{margin:"auto"}} />
                </ListItemIcon>
                <Typography fontSize={12} style={{fontWeight:"bold"}} variant="subtitle1" color={Colores.color2}>
                  {usuario?.nombre}
                </Typography>
                
                <Typography textAlign={"center"} fontSize={12} style={{fontWeight:"bold"}} variant="subtitle1" color={Colores.color2}>
                  {usuario?.reparticion.nombre}
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
                  <Typography variant='subtitle2'>{ruta.label}</Typography>
                  {/* <ListItemText  primary={text} /> */}
                </ListItemButton>
              </ListItem>
            ))}
            {
              usuario?.reparticion.id_unidad == 30565 &&
              lst_Rutas_only_oym.map((ruta, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={()=>{
                    navi(ruta.path)
                  }}>
                    <ListItemIcon>
                      {ruta.icono}
                    </ListItemIcon>
                    <Typography variant='subtitle2'>{ruta.label}</Typography>
                    {/* <ListItemText  primary={text} /> */}
                  </ListItemButton>
                </ListItem>
              ))
            }
            
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
