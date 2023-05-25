import { Box, HStack, Icon, IconButton, Pressable, StatusBar,Text } from "native-base";
import { useStore_Ui } from "../../store/store_ui";
import { FaBars } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import { useLocation, useParams } from "react-router-dom";
import { useStore_sesion } from "../../store/store_sesion";
import { useEffect, useRef, useState } from "react";
import { Grid ,Typography} from "@mui/material";
import { Colores } from "../../config/config_style";


interface Iprops {
  Height_Navbar? : (Height_nav:number)=> void
}

export const Navbar = ({
  Height_Navbar
}:Iprops) => {
    const [Height_nav, setHeight_nav] = useState(0)
    const componenteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      console.log(componenteRef)
      if (Height_Navbar) {
        if (componenteRef.current) {
          const alturaComponente = componenteRef.current.clientHeight;
          Height_Navbar(alturaComponente)
        }
      }
    }, []);

    const {logout} = useStore_sesion()
    const {pathname } = useLocation()
    const {drawer_visible,toogle_Drawer} = useStore_Ui()
    return (
      <>
       <Grid ref={componenteRef} minHeight={54} pl={3} boxShadow={5} position={"sticky"} top={0} zIndex={2} container  sx={{backgroundColor:Colores.Navbar}}>
          <Grid xs={1} display={"flex"} height={50}  sx={{ alignItems:"center", justifyContent:"start"}}>
            <FaBars onClick={()=>{toogle_Drawer()}} color="white" size={25}/>
          </Grid>
          <Grid xs={9} overflow={"hidden"} display={"flex"} height={50}  sx={{ alignItems:"center" }}>
            {/* <Typography color={"white"} whiteSpace={"nowrap"}>Sistema de Seguimiento de Documentos</Typography> */}
            <span  style={{color:"white", fontSize:20,fontWeight:"bold",whiteSpace:"nowrap" }}>
              Sistema de Seguimiento de Documentos UAJMS
            </span>
              {/* Sistema 1.0.0  {pathname} */}
          </Grid>
          <Grid xs={2} pr={3} display={"flex"} height={50}  sx={{alignItems:"center", justifyContent:"end"}}>
            <BiLogOut onClick={()=>{logout()}} color="white" size={25}/>
          </Grid>
        </Grid>
        
      
        {/* <HStack width={"100vw"} ref={componenteRef} shadow={5} position={"sticky"} top={0} zIndex={2}   bg="primary.900" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
          <HStack alignItems="center" px={3}>
            <FaBars onClick={()=>{toogle_Drawer()}} color="white" size={25}/>
            <Text ml={3} color="white" fontSize="20" fontWeight="bold">
              Sistema 1.0.0  {pathname}
            </Text>
          

          </HStack>
          <HStack  px={3}>
            <BiLogOut onClick={()=>{logout()}} color="white" size={25}/>
          </HStack>
        </HStack> */}
      </>
    )
  
  }
  