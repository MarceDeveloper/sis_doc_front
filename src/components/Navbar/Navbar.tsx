




import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton, ListSubheader, Box } from '@mui/material';
// import { Menu as MenuIcon, Home as HomeIcon, AccountCircle as AccountCircleIcon, Mail as MailIcon } from '@mui/icons-material';
import { FaUserCircle, FaBars, FaBuilding, FaUsers } from 'react-icons/fa'
import { BiLogOut, BiUserPlus, } from 'react-icons/bi';
import { AiOutlineUsergroupAdd, AiTwotoneHome } from 'react-icons/ai';
import { IoMdDocument } from 'react-icons/io';
import { HiDocumentReport } from 'react-icons/hi';





import { Colores } from '../../config/config_style';
import { useStore_sesion } from '../../store/store_sesion';
import { useNavigate } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { lst_ids_adm } from '../../utils/lst_ids_adm';




export const Navbar: React.FC = () => {
  const { usuario, logout } = useStore_sesion(useShallow((store) => store))

  const navi = useNavigate()
  // const {usuario,logout,isAuthenticated} = useStore_sesion()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleMenuClick = () => {
    setIsDrawerOpen(false)
    // Handle menu item click
  };

  interface I_Ruta {
    label: string
    icono: React.ReactElement
    path: string
  }
  const colorIcon = "white"
  const lst_Rutas: I_Ruta[] = [
    {
      icono: <AiTwotoneHome color={colorIcon} />,
      label: "Home",
      path: "/"
    },
    {
      icono: <IoMdDocument color={colorIcon} />,
      label: "Documento",
      path: "/"
    },

    // {
    //   icono:<FaBuilding color={colorIcon}/>,
    //   label:"Seguimiento de Informes",
    //   path:"/home_seguimiento_informes"
    // },
    // {
    //   icono:<FaBuilding color={colorIcon}/>,
    //   label:"Responsables",
    //   path:"/responsables"
    // },
    // {
    //   icono:<FaBuilding color={colorIcon}/>,
    //   label:"PDF_Recomendaciones",
    //   path:"/PDF_lst_recomendaciones"
    // },



  ]
  const lst_Rutas_only_oym: I_Ruta[] = [
    {
      icono: <HiDocumentReport color={colorIcon} />,
      label: "Reporte",
      path: "/Reporte_By_Type_Doducment"
    },
    {
      icono: <FaUsers color={colorIcon} />,
      label: "Usuarios",
      path: "/usuarios"
    },
  ]

  const lst_adm: I_Ruta[] = [
    {
      icono: <FaUsers color={colorIcon} />,
      label: "Usuarios",
      path: "/usuarios"
    },
    {
      icono: <FaBuilding color={colorIcon} />,
      label: "Reparticiones",
      path: "/reparticiones"
    },
    {
      icono: <FaBuilding color={colorIcon} />,
      label: "Secretarias",
      path: "/secretarias"
    },
    {
      icono: <HiDocumentReport color={colorIcon} />,
      label: "Reporte",
      path: "/Reporte_By_Type_Doducment"
    },
  ]

  const lst_adm_seguimiento_informes: I_Ruta[] = [
    {
      icono: <FaUsers color={colorIcon} />,
      label: "Seguimiento de Informes",
      path: "/home_seguimiento_informes"
    },
    // {
    //   icono: <FaBuilding color={colorIcon} />,
    //   label: "informes_reportes",
    //   path: "/informes_reportes"
    // },
    // {
    //   icono: <FaBuilding color={colorIcon} />,
    //   label: "informe_reporte_1",
    //   path: "/informe_reporte_1"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "informe_reporte_2",
    //   path: "/informe_reporte_2"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "informe_reporte_3",
    //   path: "/informe_reporte_3"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "informe_reporte_4",
    //   path: "/informe_reporte_4"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "informe_reporte_6",
    //   path: "/informe_reporte_6"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "informe_reporte_7",
    //   path: "/informe_reporte_7"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "seguimiento_informes",
    //   path: "/seguimiento_informes"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "recomendacion_informe",
    //   path: "/recomendacion_informe"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "descripcion_recomendacion",
    //   path: "/descripcion_recomendacion"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "tarea_descipcion",
    //   path: "/tarea_descipcion"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "responsable_tarea",
    //   path: "/responsable_tarea"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "accion_tarea_responsable",
    //   path: "/accion_tarea_responsable"
    // },
    // {
    //   icono: <HiDocumentReport color={colorIcon} />,
    //   label: "accion_tarea_mae",
    //   path: "/accion_tarea_mae"
    // },

    {
      icono: <HiDocumentReport color={colorIcon} />,
      label: "responsables",
      path: "/responsables"
    },
    
  ]



  return (
    <div className='no-print'>
      <AppBar color='primary' position="sticky" sx={{ zIndex: 200 }}>
        <Toolbar>
          {usuario &&
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <FaBars />
            </IconButton>
          }
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            Sistema de Seguimiento de Documentos OyM
          </Typography>
          {
            usuario ?
              <IconButton color="inherit" aria-label="logout" onClick={async () => {
                await logout()
                navi("/")
              }}>
                <BiLogOut />
              </IconButton>
              :
              <IconButton color="inherit" aria-label="logout" onClick={() => { navi("/") }}>
                <BiUserPlus />
              </IconButton>
          }
          {/* <IconButton color="inherit" aria-label="logout" onClick={()=>{logout()}}>
            <BiLogOut  />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      {
        usuario &&
        <Drawer draggable={true} anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}
          sx={{
            width: 300, // Establece el ancho del Drawer
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor: Colores.color2,
              color: "white",
              width: ["90vw", 250], // Establece el ancho del contenido interno del Drawer
              boxSizing: 'border-box',
            },
          }}
        >
          <List
            subheader={
              <ListSubheader component="div" sx={{ display: 'flex', flexDirection: "column", height: 140, justifyContent: 'center', alignItems: 'center' }}>

                <ListItemIcon >
                  <FaUserCircle size={60} style={{ margin: "auto" }} />
                </ListItemIcon>
                <Typography fontSize={12} style={{ fontWeight: "bold" }} variant="subtitle1" color={Colores.color2}>
                  {usuario?.nombre}
                </Typography>

                <Typography textAlign={"center"} fontSize={12} style={{ fontWeight: "bold" }} variant="subtitle1" color={Colores.color2}>
                  {usuario?.reparticion.nombre}
                </Typography>
              </ListSubheader>
            }
          >
            {lst_Rutas.map((ruta, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => {
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
            {/* {
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
                
                  </ListItemButton>
                </ListItem>
              ))
            } */}

            {
              (lst_ids_adm.includes(usuario.id_usuario)) &&
              lst_adm.map((ruta, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => {
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
            
            {
            
              lst_adm_seguimiento_informes.map((ruta, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => {
                    navi(ruta.path)
                  }}>
                    <ListItemIcon>
                      {ruta.icono}
                    </ListItemIcon>
                    <Typography variant='subtitle2'>{ruta.label}</Typography>
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
    </div>
  );
};
