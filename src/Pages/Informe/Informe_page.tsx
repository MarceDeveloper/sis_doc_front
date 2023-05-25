import React from 'react'

export const Informe_page = () => {
  return (
    <div>Informe_page</div>
  )
}




// import React, { useEffect, useState } from 'react'
// import { Navbar } from '../../components/Navbar/Navbar'
// import { Box, Center, FormControl, Input, VStack , Text, Pressable, Modal, Button, HStack, Flex} from 'native-base'
// import { useForm ,Controller} from 'react-hook-form';
// import { AiOutlinePlus } from 'react-icons/ai';
// import { FaBars } from 'react-icons/fa';
// import { useMediaQuery } from 'native-base';


// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { use_ZiseDevice } from '../../hooks/use_ZiseDevice';
// import { useNavigate } from 'react-router-dom';
// import { use_tipo_informe } from '../../hooks/hooks_api/tipo_informe/use_tipo_informe';
// import { DTO_Tipo_Informe } from '../../hooks/hooks_api/tipo_informe/DTO_tipo_informe';
// import { use_sub_tipo_informe } from '../../hooks/hooks_api/sub_tipo_informe/use_sub_tipo_informe';
// import { DTO_Sub_Tipo_Informe } from '../../hooks/hooks_api/sub_tipo_informe/DTO_sub_tipo_informe';
// import { use_informe } from '../../hooks/hooks_api/informe/use_Informe';
// import { DTO_Informe } from '../../hooks/hooks_api/informe/DTO_Informe';


// export const Informe_Page = () => {
//   const {isMobile} = use_ZiseDevice()
//   const navi = useNavigate()
//   const {getAll_informe} = use_informe()
//   const [lst_informes, setlst_informes] = useState<DTO_Informe[]>([])
//   // const {getAll_sub_tipo_informe} = use_sub_tipo_informe()
//   // const [lst_sub_tipo_infor, setlst_sub_tipo_infor] = useState<DTO_Sub_Tipo_Informe[]>([])
 
//   useEffect(() => {
//     getAll_informe().then((res)=> {
//       console.log(res)
//       setlst_informes(res)
//     })
//   }, [])
  


//   return (
//     <>
//       {/* <Pressable onPress={()=>{navi("/crear_informe")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
//         <AiOutlinePlus size={30} color="green"/>
//       </Pressable> */}
//       <Box >
      
//         <Navbar/>
//         <Center>
          
          
          
//           <VStack width="80%" space={4}>
//             <Box w={["100%","50%"]}>
//               <Text>Lst informe</Text>
//             </Box>
//             <TableContainer component={Paper}>
//               <Table size='small' border={1} sx={{ minWidth: 650 }} aria-label="simple table">
            
//                 <TableHead >
//                   <TableRow classes={{ root: 'table-header' }}>
//                     <TableCell>nombre informe</TableCell>
//                     <TableCell>nombre informe</TableCell>

//                     <TableCell>Acciones</TableCell>

//                   </TableRow>
                 
//                 </TableHead>
//                 <TableBody >
//                   {
//                     lst_informes.map((infor)=>(
//                       <TableRow key={infor.id_informe}
//                         // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                       >
//                         <TableCell >
//                           {infor.titulo}
//                         </TableCell>
//                         <TableCell >
//                           {infor.titulo}
//                         </TableCell>
//                         <TableCell>
//                           <Table size='small'>
//                             <TableBody>
//                               <TableRow>
//                                 <TableCell>
//                                   <Button onPress={()=>{navi("/recomendaciones_informe",{state:{informe:infor}})}}>recomendaciones</Button>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Button>Editar</Button>
//                                 </TableCell>
//                                 <TableCell>
//                                   <Button background={'error.500'}>eliminar</Button>
//                                 </TableCell>
//                               </TableRow>
//                             </TableBody>
//                           </Table>
//                         </TableCell>
//                         {/* <TableCell  component="th" scope="row">
                            
//                           <HStack>
//                             <Button>Editar</Button>
//                             <Button mx={3} >Eliminar</Button>
//                             <Button>ADD Tarea</Button>

//                           </HStack>
//                         </TableCell> */}
//                       </TableRow>
//                     ))
//                   }
//                   <TableRow></TableRow>
                    
//                 </TableBody>
//               </Table>
//             </TableContainer>
            
//           </VStack>
//         </Center>
//       </Box>



//     </>
//   )
// }
