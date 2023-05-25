



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
import { useNavigate } from 'react-router-dom';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { DTO_Secretaria } from '../../hooks/hooks_api/secretaria/DTO_secretaria';
import { DTO_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { use_tipo_informe } from '../../hooks/hooks_api/tipo_informe/use_tipo_informe';
import { DTO_Tipo_Informe } from '../../hooks/hooks_api/tipo_informe/DTO_tipo_informe';

interface I_Form{
  apellido:string
}

export const Tipo_Informe_Page = () => {
  const navi = useNavigate()
  const {getAll_tipo_informe} = use_tipo_informe()
  const [lst_tipo_informe, setlst_tipo_informe] = useState<DTO_Tipo_Informe[]>([])

  const {isMobile} = use_ZiseDevice()
 
  useEffect(() => {
    getAll_tipo_informe().then((res)=> {
      console.log(res)
      setlst_tipo_informe(res)
    })
  }, [])
  


  return (
    <>
        
        {/* <Pressable onPress={()=>{navi("/crear_tipo_informe")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
          <AiOutlinePlus size={30} color="green"/>
        </Pressable> */}
        <Box >
      
        <Navbar/>
        <Center>
          
          
          
          <VStack width="80%" space={4}>
            <Box w={["100%","50%"]}>
              <Text>Lst tipo informe</Text>
            </Box>
            <TableContainer   component={Paper}>
        
              <Table  className="customTable" size='small' border={2}  aria-label="simple table">

                <TableHead sx={{position:"sticky" , top:0 , zIndex:1}} >

                  <TableRow className='customTableRowHead'>
                    <TableCell colSpan={1}>tipo de informe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {
                    lst_tipo_informe?.map((t_info,index)=>(
                      <TableRow  key={t_info.id_tipo_informe}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell className='customTableRowBody' component="th" scope="row">{t_info.nombre_tipo_informe}</TableCell>

                        
                      </TableRow>
                    ))
                  }
                  <TableRow></TableRow>
                </TableBody>
              </Table>
            </TableContainer>
      
            
          </VStack>
        </Center>
      </Box>



    </>
  )
}
