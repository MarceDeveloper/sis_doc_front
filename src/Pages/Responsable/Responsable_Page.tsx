



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
import { use_responsable } from '../../hooks/hooks_api/responable/use_responsable';
import { DTO_Responsable } from '../../hooks/hooks_api/responable/DTO_Responsable';

interface I_Form{
  apellido:string
}

export const Responsable_Page = () => {
  const navi = useNavigate()
  const {getAll_responsable} = use_responsable()
  const [lst_responsable, setlst_responsable] = useState<DTO_Responsable[]>([])

  const {isMobile} = use_ZiseDevice()
 
  useEffect(() => {
    getAll_responsable().then((res)=> {
      console.log(res)
      setlst_responsable(res)
    })
  }, [])
  


  return (
    <>
  
      {/* <Pressable onPress={()=>{navi("/crear_responsable")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
        <AiOutlinePlus size={30} color="green"/>
      </Pressable> */}
      <Box >
      
        <Navbar/>
        <Center>

          
          <VStack width="80%" space={4}>
            <Box w={["100%","50%"]}>
              <Text>Lst Responsables</Text>
            </Box>
            <TableContainer   component={Paper}>
        
              <Table  className="customTable" size='small' border={2}  aria-label="simple table">

                <TableHead sx={{position:"sticky" , top:0 , zIndex:1}} >

                  <TableRow className='customTableRowHead'>
                    <TableCell colSpan={1}>responsable</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {
                    lst_responsable?.map((res,index)=>(
                      <TableRow  key={res.id_responsable}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell className='customTableRowBody' component="th" scope="row">{res.nombre_responsable}</TableCell>

                        
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
