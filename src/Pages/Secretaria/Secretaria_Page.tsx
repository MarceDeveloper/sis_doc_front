



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

interface I_Form{
  apellido:string
}

export const Secretaria_Page = () => {
  const navi = useNavigate()
  const {getAll_Secretaria} = use_secretaria()
  const [lst_secreatarias, setlst_secreatarias] = useState<DTO_Secretaria[]>([])

  const {isMobile} = use_ZiseDevice()
 
  useEffect(() => {
    getAll_Secretaria().then((res)=> {
      console.log(res)
      setlst_secreatarias(res)
    })
  }, [])
  


  return (
    <>
      
      {/* <Pressable onPress={()=>{navi("/crear_secretaria")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
        <AiOutlinePlus size={30} color="green"/>
      </Pressable> */}
      <Box >
      
        <Navbar/>
        <Center>
          
          
          
          <VStack width="80%" space={4}>
            <Box w={["100%","50%"]}>
              <Text>Lst Secretarias</Text>
            </Box>
            <TableContainer   component={Paper}>
        
              <Table  className="customTable" size='small' border={2}  aria-label="simple table">

                <TableHead sx={{position:"sticky" , top:0 , zIndex:1}} >

                  <TableRow className='customTableRowHead'>
                    <TableCell colSpan={1}>secretaria</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {
                    lst_secreatarias?.map((sec,index)=>(
                      <TableRow  key={sec.id_secretaria}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell className='customTableRowBody' component="th" scope="row">{sec.nombre_secretaria}</TableCell>

                        
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
