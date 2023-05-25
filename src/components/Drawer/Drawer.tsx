import React from 'react'
import { useStore_Ui } from '../../store/store_ui'
import * as s from './styled'
import { Box, Center ,Pressable,Text} from 'native-base'
import { FaBars } from 'react-icons/fa';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { Colores } from '../../config/config_style';
import {Typography} from '@mui/material'
import { useStore_sesion } from '../../store/store_sesion';
import {IoPerson} from 'react-icons/io5'

export const Drawer_Component = () => {
  const {drawer_visible, toogle_Drawer} = useStore_Ui()
  const navi = useNavigate()
  const {usuario} = useStore_sesion()


  interface I_Ruta{
    label:string
    icono:React.ReactElement
    path:string
  }

  const colorIcon = "white"
  const lst_Rutas : I_Ruta[] = [
    
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"administradores",
    //   path:"/administradores"
    // },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"secretaria",
    //   path:"/secretaria"
    // },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"entidad",
    //   path:"/entidad"
    // },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"login",
    //   path:"/login"
    // },
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Home",
      path:"/"
    },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"tipo informe",
    //   path:"/tipo_informe"
    // },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"sub tipo informe",
    //   path:"/sub_tipo_informe"
    // },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"responsable",
    //   path:"/responsable"
    // },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"informe",
    //   path:"/informe"
    // },
    {
      icono:<FaBars color={colorIcon}/>,
      label:"Documento",
      path:"/"
    },
    // {
    //   icono:<FaBars color={colorIcon}/>,
    //   label:"Reparticion",
    //   path:"/reparticion"
    // },
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
    
    
  ]
  
  return (
    <>
      <s.WrapperDrawer visible={drawer_visible}  >
       
        <Box  >
          <Center shadow={3} minHeight={20} backgroundColor={Colores.Drawer_Head}>
            <Text bold fontSize={15} color={'white'}>SSD UAJMS</Text>
            <Typography style={{ display: 'flex', alignItems: 'center' }} variant='body2' color={"whitesmoke"}><IoPerson style={{marginRight:5}}/> {usuario?.nombre}</Typography>
          </Center>
          <Pressable position={'absolute'} top={3} right={3}
            onPress={()=>{toogle_Drawer()}}
          >
            <AiOutlineCloseCircle color={'white'} size={35}/>
          </Pressable>
        </Box>
        <Box >
          {
            lst_Rutas.map((ruta,index)=>(
              <Pressable  alignItems={'center'} m={3} flexDirection={'row'} key={index}
                onPress={()=>{
                  navi(ruta.path)
                  toogle_Drawer()
                }}
              >
                {ruta.icono}
                <Text color={"white"} ml={3}>{ruta.label}</Text>
              </Pressable>
            ))
          }
        </Box>
        
      </s.WrapperDrawer>
    </>
    
  )
}
