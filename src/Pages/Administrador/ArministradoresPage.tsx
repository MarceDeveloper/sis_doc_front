// import React from 'react'
// import { useForm } from "react-hook-form";

// interface IForm{
//     id_administrador:number
//     nombre_administrador:string
//     nombre_usuario:string
//     contrasena:string
// }

// export const ArministradoresPage = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

//   const onSubmit = (data: IForm) => {
//     ;
//   };

//   return (
//     <div className="form-container">
//       <h2>Formulario de contacto</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-field">
//           <label htmlFor="name">Nombre completo</label>
//           <input
//             {...register("nombre_usuario", { required: true })}
//             type="text"
//             placeholder="Ingrese su nombre completo"
//           />
//           {errors.nombre_usuario && <span>This field is required</span>}
//         </div>
//         <div className="form-field">
//           <label htmlFor="name">Nombre completo</label>
//           <input
//             type="checkbox"
//             id="lala"
//             name="lala"
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="email">Correo electrónico</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Ingrese su correo electrónico"
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="subject">Asunto</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             placeholder="Ingrese el asunto del mensaje"
//           />
//           <span>me lleva la fregada</span>
//         </div>
//         <div className="form-field">
//           <label htmlFor="message">Mensaje</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Ingrese su mensaje"
//             defaultValue={""}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="category">Categoría</label>
//           <select id="category" name="category">
//             <option value={0}>Seleccione una opción</option>
//             <option value={1}>Sugerencias</option>
//             <option value={2}>Soporte técnico</option>
//             <option value={3}>Información</option>
//             <option value={4}>Otros</option>
//           </select>
//         </div>
//         <button type="submit">Enviar mensaje</button>
//       </form>
//     </div>
//   )
// }



import React,{useEffect,useState} from 'react'
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
import { use_administrador } from '../../hooks/hooks_api/administrador/use_administrador';

interface I_Form{
  apellido:string
}

export const ArministradoresPage = () => {
  const [lst_admisntiradores, setlst_admisntiradores] = useState([])
  const navi = useNavigate()
  const {getAll_administradores} = use_administrador()

  const {isMobile} = use_ZiseDevice()

  useEffect(() => {
    getAll_administradores().then((res)=>{console.log(res)})
  }, [])
  
  

  return (
    <>
        {
          isMobile &&
          // <Pressable onPress={()=>{navi("/crear_administradores")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"absolute"} top={20} right={10}>
          //   <AiOutlinePlus size={30} color="green"/>
          // </Pressable>
          <button>revisar esto</button>
        }
        {
          !isMobile &&
          <Pressable zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"absolute"} bottom={8} right={8}>
            <AiOutlinePlus size={30} color="green"/>
          </Pressable>
        }
      <Box >
      
        <Navbar/>
        <Center>
          
          
          
          <VStack width="80%" space={4}>
            <Box w={["100%","50%"]}>
              <Text>Lst Administradores</Text>
            </Box>
            <TableContainer component={Paper}>
              <Table border={2} sx={{ minWidth: 650 }} aria-label="simple table">
            
                <TableHead>
                  <TableRow  classes={{ root: 'table-header' }}>
                    <TableCell colSpan={2}>Usuarios</TableCell>
                    <TableCell>Informes</TableCell>
                  </TableRow>
                  <TableRow classes={{ root: 'table-header' }}>
                    <TableCell>Credenciales</TableCell>
                    <TableCell>CI</TableCell>
                    <TableCell>nombre informe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {
                    
                  }
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        me lleva
                      </TableCell>
                      <TableCell align="right">lala</TableCell>
                      <TableCell align="right">lala</TableCell>
                    </TableRow>
                   
                </TableBody>
              </Table>
            </TableContainer>
            
          </VStack>
        </Center>
      </Box>



    </>
  )
}
