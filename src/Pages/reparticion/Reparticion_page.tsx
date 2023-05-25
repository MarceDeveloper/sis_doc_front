import React from 'react'

export const Reparticion_page = () => {
  return (
    <div>Reparticion_page</div>
  )
}




// import React, { useEffect, useState } from 'react'
// import { Navbar } from '../../components/Navbar/Navbar'
// import { Box, Center, FormControl, Input, VStack , Text, Pressable, Modal} from 'native-base'
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
// import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
// import { DTO_Secretaria } from '../../hooks/hooks_api/secretaria/DTO_secretaria';
// import { DTO_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
// import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
// import { use_reparticion } from '../../hooks/hooks_api/reparticion/use_reparticion';
// import { DTO_Reparticion } from '../../hooks/hooks_api/reparticion/DTO_reparticion';

// interface I_Form{
//   apellido:string
// }

// export const Reparticion_Page = () => {
//   const navi = useNavigate()
//   const {getAll_reparticion} = use_reparticion()
//   const [lst_reparticiones, setLst_reparticiones] = useState<DTO_Reparticion[]>([])

//   const {isMobile} = use_ZiseDevice()
 
//   useEffect(() => {
//     getAll_reparticion().then((res)=> {
//       console.log(res)
//       setLst_reparticiones(res)
//     })
//   }, [])
  


//   return (
//     <>

//        <Pressable onPress={()=>{navi("/crear_reparticion")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
//         <AiOutlinePlus size={30} color="green"/>
//       </Pressable>
//       <Box >
      
//         <Navbar/>
//         <Center>
          
          
          
//           <VStack width="80%" space={4}>
//             <Box w={["100%","50%"]}>
//               <Text>Lst Reparticiones</Text>
//             </Box>
//             <TableContainer component={Paper}>
//               <Table border={2} sx={{ minWidth: 650 }} aria-label="simple table">
            
//                 <TableHead>
//                   <TableRow  classes={{ root: 'table-header' }}>
//                     <TableCell>nombre reparticion</TableCell>
//                   </TableRow>
                 
//                 </TableHead>
//                 <TableBody >
//                   {
//                     lst_reparticiones.map((reparticion)=>(
//                       <TableRow key={reparticion.id_reparticion}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                       >
//                         <TableCell component="th" scope="row">
//                           {reparticion.nombre_reparticion}
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   }
                    
//                 </TableBody>
//               </Table>
//             </TableContainer>
            
//           </VStack>
//         </Center>
//       </Box>



//     </>
//   )
// }
