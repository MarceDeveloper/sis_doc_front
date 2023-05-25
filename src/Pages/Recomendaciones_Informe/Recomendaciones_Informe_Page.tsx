



import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, Input, VStack , Text, Pressable, Modal} from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'native-base';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { use_ZiseDevice } from '../../hooks/use_ZiseDevice';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { DTO_Secretaria } from '../../hooks/hooks_api/secretaria/DTO_secretaria';
import { DTO_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { DTO_Informe } from '../../hooks/hooks_api/informe/DTO_Informe';
import { use_recomendacion } from '../../hooks/hooks_api/recomendacion/use_recomendacion';
import { DTO_Recomendacion } from '../../hooks/hooks_api/recomendacion/DTO_recomendacion';



export const Recmendaciones_Informe_Page = () => {
  const params = useParams()
  const location = useLocation()
  const navi = useNavigate()

  const {get_by_id_informe} = use_recomendacion()
  const [lst_recomendaciones, setLst_recomendaciones] = useState<DTO_Recomendacion[]>([])

  const {isMobile} = use_ZiseDevice()
 
  useEffect(() => {
    if (location?.state?.informe?.id_informe) {
        get_by_id_informe(location?.state?.informe?.id_informe).then((res)=> {7
          console.log(res)
          setLst_recomendaciones(res)
        })
    }
  }, [])
  

  console.log({
    params,
    location,
    // navigation
  })



  if (!location?.state?.informe) {
    return <h1>Error </h1>
  }
  const informe:DTO_Informe = location.state.informe

  return (
    <>
      {/* <Pressable onPress={()=>{navi("/crear_recomendaciones_informe")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
        <AiOutlinePlus size={30} color="green"/>
      </Pressable> */}
      <Box >
      
        <Navbar/>
        <Center>
          
          
          
          <VStack width="80%" space={4}>
            <Box w={["100%","50%"]}>
              <Text>Informe: {informe.titulo}</Text>
              <Text>Lst recomendaciones informe</Text>
            </Box>
            <TableContainer component={Paper}>
              <Table size='small' border={2} sx={{ minWidth: 650 }} aria-label="simple table">
            
                <TableHead>
                  <TableRow  classes={{ root: 'table-header' }}>
                    <TableCell>nombre entidad</TableCell>
                  </TableRow>
                 
                </TableHead>
                <TableBody >
                  {/* {
                    lst_recomendaciones.map((reco)=>(
                      <TableRow key={entidad.id_entidad}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {entidad.nombre_entidad}
                        </TableCell>
                      </TableRow>
                    ))
                  } */}
                    
                </TableBody>
              </Table>
            </TableContainer>
            
          </VStack>
        </Center>
      </Box>



    </>
  )
}
