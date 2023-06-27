// import React, { useState } from 'react';
// import {  Button, Modal, Fab, Grid } from '@mui/material';
// import { Form_Usuarios } from './Form_Usuarios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
// import {AiFillDelete} from 'react-icons/ai'
// import { AiOutlinePlus } from 'react-icons/ai';

// import {TfiWrite} from 'react-icons/tfi'
// import {GrAddCircle} from 'react-icons/gr'
// import { Navbar } from '../../components/Navbar/Navbar';
// import { Box, FormControl, Input } from 'native-base';
// import { Colores } from '../../config/config_style';
// import { ScreenLoading } from '../../components/ScreenLoading/ScreenLoading';
// import { validate_map } from '../../utils/validate_map';
// import { Form_Reparticion, use_reparticiones_prisma } from '../../hooks/hooks_api/reparticion/use_reparticiones_prisma';
// import { Form_Reparticiones } from './Form_Reparticiones';
// import { FaSearch } from 'react-icons/fa';



// export const Prueba_Reparticiones: React.FC = () => {
//   const {reparticiones,createReparticion,loading,updateReparticion,deleteReparticion} = use_reparticiones_prisma()
//   const [open, setOpen] = useState(false);
//   const [selectedReparticion, setSelectedReparticion] = useState<Form_Reparticion | undefined>(undefined);
//   const [palabra_search, setpalabra_search] = useState("")
  
//   const handleClose = ()=>{
//     setOpen(false)
//   }

  

//   const handleModalCreateReparticion = () => {
//     setSelectedReparticion(undefined);
//     setOpen(true)
//   };

//   const handleModalEditReparticion = (reparticion: Form_Reparticion) => {
//     console.log("abri modal")
//     setSelectedReparticion(reparticion);
//     setOpen(true);
//   };
//   const handleModalDelete = (id: number) => {
//     deleteReparticion(id)
//   };

//   const Crear = (reparticion:Form_Reparticion)=>{
//     console.log("creare")
//     createReparticion(reparticion)
//     setOpen(false)
//   }
//   const Edit = (reparticion:Form_Reparticion)=>{
//     updateReparticion(reparticion.id_reparticion,reparticion)
//     setOpen(false)

//   }
//   const FilterLst = () =>{
//     const cadena = palabra_search.toUpperCase()
//     let matchesSearch = true
//     let matchesEstadoDocumento = true

//     let matches_reparticion = true
//     let matches_is_fisico = true
//     let matches_is_digital = true
    
   

//     if(!Array.isArray(reparticiones)){
//       return []
//     }
    
//     return  reparticiones.filter((rep) => {
//       if (cadena.length > 0 ) {
//         matchesSearch = rep.nombre.toUpperCase().includes(cadena)
//         || rep.codigo.toString().toUpperCase().includes(cadena)
//         || rep.id_unidad.toString().toUpperCase().includes(cadena)


//       }
  
//       return matchesSearch 
//     });
   
//   }
  


 

  
//   return (
//     <div>
//       <ScreenLoading is_visible={loading}/>
//       <Navbar/>

//       <Fab color='primary' aria-label="Add" onClick={()=>{}} style={{ position: 'fixed', bottom: 16, right: 16 }}>
//         <AiOutlinePlus  size={50} onClick={()=>{handleModalCreateReparticion()}}/>
//       </Fab>
//       <Grid pl={2} mt={2} xs={12} lg={8}   >
//             {/* <FormControl.Label p={0} m={0} >BUSCAR POR NOMBRE</FormControl.Label> */}

//             <Input w={"100%"} InputLeftElement={<FaSearch style={{marginLeft:5,marginRight:5}}/>}
//               onChangeText={(text)=>setpalabra_search(text)}
//             />
//       </Grid>
//       <TableContainer sx={{maxWidth:["100%","100%"], mx:"auto" ,mt:2}}>
//       <Table className='customTable' size='small'>
//         <TableHead>
//           <TableRow className='customTableRowHead'>
//             <TableCell className='cell_head'>Nombre</TableCell>
//             <TableCell className='cell_head'>Codigo</TableCell>
//             <TableCell className='cell_head'>Id Unidad</TableCell>
//             <TableCell className='cell_head'>Acciones</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {FilterLst().map((reparticion) => (
//             <TableRow key={reparticion?.id_reparticion}>
//               <TableCell className='customTableRowBody'>{reparticion?.nombre}</TableCell>
//               <TableCell className='customTableRowBody'>{reparticion?.codigo}</TableCell>
//               <TableCell className='customTableRowBody'>{reparticion?.id_unidad}</TableCell>
//               <TableCell align='center' className='customTableRowBody'>
//                 <Button size='small' sx={{mr:1}} onClick={() => {handleModalDelete(reparticion.id_reparticion)}} variant='outlined' color='error'><AiFillDelete/></Button>
//                 <Button size='small' sx={{ml:1}} onClick={() => {handleModalEditReparticion(reparticion)}} variant='outlined' color='info'><TfiWrite/></Button>

            
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
      

//       {/* Mostrar el modal para crear/actualizar reparticiones */}
//       <Modal open={open} onClose={handleClose}>
//         <div className="modal-container" style={{width:"90%"}}>
//           <Form_Reparticiones  onSubmit={selectedReparticion == undefined ? Crear : Edit} defaultValues={selectedReparticion} />
//         </div>
//       </Modal>

     
//     </div>
//   );
// };
import React, { useState } from 'react';
import {  Button, Modal, Fab } from '@mui/material';
import { Form_Usuario, Usuario, use_usuarios } from '../../hooks/prueba/usuario/use_usuarios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import {AiFillDelete} from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai';

import {TfiWrite} from 'react-icons/tfi'
import {GrAddCircle} from 'react-icons/gr'
import { Navbar } from '../../components/Navbar/Navbar';
import { Colores } from '../../config/config_style';
import { ScreenLoading } from '../../components/ScreenLoading/ScreenLoading';
import { validate_map } from '../../utils/validate_map';
import { use_reparticiones } from '../../hooks/hooks_api/reparticion/use_reparticiones_prisma';


export const Prueba_Reparticiones: React.FC = () => {
  const {reparticiones,loading,secretarias_reparticiones} = use_reparticiones()



 

  
  return (
    <div>
      <ScreenLoading is_visible={loading}/>
      <Navbar/>

      
      <TableContainer sx={{maxWidth:["100%","90%"], mx:"auto" ,mt:2}}>
      <Table className='customTable' size='small'>
        <TableHead>
          <TableRow className='customTableRowHead'>
            <TableCell className='cell_head'>Secretaria</TableCell>
            <TableCell className='cell_head'>Nivel</TableCell>
            <TableCell className='cell_head'>Reparticion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            secretarias_reparticiones?.map((secre)=>(
              secre.reparticiones.map((rep)=>(
                <TableRow key={rep?.id_reparticion}>
                  <TableCell className='customTableRowBody'>{secre.secretaria.nombre}</TableCell>
                  <TableCell className='customTableRowBody'>{rep?.nivel}</TableCell>
                  <TableCell className='customTableRowBody'>{rep?.nombre}</TableCell>
                
                </TableRow>
              ))
            ))
          }
          {/* {validate_map(reparticiones).map((rep) => (
            <TableRow key={rep?.id_reparticion}>
              <TableCell className='customTableRowBody'>{rep?.actividad}</TableCell>
              <TableCell className='customTableRowBody'>{rep?.nivel}</TableCell>
              <TableCell className='customTableRowBody'>{rep?.nombre}</TableCell>
             
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
      

   

     
    </div>
  );
};
