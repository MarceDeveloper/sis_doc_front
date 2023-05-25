



// import React ,{useEffect, useState} from 'react'
// import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
// import { useForm ,Controller} from 'react-hook-form';
// import { FormControlLabel, RadioGroup,Radio, Checkbox ,Typography,Grid} from '@mui/material';
// import { use_documento } from '../../../hooks/hooks_api/documento/use_documento';
// import { DTO_create_Docuemento } from '../../../hooks/hooks_api/documento/DTO_Documento';
// import { Navbar } from '../../../components/Navbar/Navbar';
// import { util_file } from '../../../utils/file/util_file';
// import { use_reparticion } from '../../../hooks/hooks_api/reparticion/use_reparticion';
// import { DTO_Reparticion } from '../../../hooks/hooks_api/reparticion/DTO_reparticion';
// import { axios_ } from '../../../axios/_axios';
// import { saveAs } from 'file-saver';
// import { use_estado_documento } from '../../../hooks/hooks_api/estado_documento/use_estado_documento';
// import { DTO_Estado_Documento } from '../../../hooks/hooks_api/estado_documento/DTO_estado_documento';
// import { use_Promise_All } from '../../../hooks/use_Promise_All';
// import { ScreenLoading } from '../../../components/ScreenLoading/ScreenLoading';
// import Swal from 'sweetalert2';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { validate_map } from '../../../utils/validate_map';
// import moment_time from 'moment-timezone'
// import { Colores } from '../../../config/config_style';


// export const Create_Documento_Page = () => {
//   const {state} = useLocation()
//   console.log("***********")
//   console.log({state:state?.documento})
//   const navi = useNavigate()
//   const {crear_documento,update_documento} = use_documento()
//   const {getAll_reparticion} = use_reparticion()
//   const {getAll_estado_documento} = use_estado_documento()
//   const [select_id_reparticion, setselect_id_reparticion] = useState(0)
//   const [lst_reparticiones, setLst_reparticiones] = useState<DTO_Reparticion[]>([])
//   const [lst_estado_documento, setLst_estado_documento] = useState<DTO_Estado_Documento[]>([])
//   const {control,handleSubmit,formState: { errors }, register,getValues} = useForm<DTO_create_Docuemento>({
//     defaultValues:state?.documento ? state.documento : {}
//   });

//   const [file_select, setFile_select] = useState<Uint8Array>()

//   const {get_Fetch:get_Fetch_data_init,is_fetching:is_feching_data_init} = use_Promise_All()

//   useEffect(() => {
//     get_Fetch_data_init([
//       getAll_reparticion().then((res)=>setLst_reparticiones(res)),
//       // getAll_reparticion().then((res)=>setLst_reparticiones(res)),
//       getAll_estado_documento().then((res)=>setLst_estado_documento(res))
//     ],undefined,()=>{Swal.fire({title:"Error",text:"no se pudo obtener los datos necesarios",icon:"info"})})
//   }, [])
  
//   console.log({reparticiones:lst_reparticiones})
  
//   const onSubmit = async (data: DTO_create_Docuemento) => {
//     // if (!select_id_reparticion) {
//     //   return
//     // }
//     // data.id_reparticion = select_id_reparticion
 
//     const formData = new FormData();

//     if (data?.file_data?.length >= 0) {
//       const files = data?.file_data as any
//       const file = files[0]
//       data.file_data = file
//       // crear_documento(data)
//     }
//     if (data.formato_fisico) {
//       data.formato_fisico = true
//     }else{
//       data.formato_fisico = false

//     }
//     if (data.formato_digital) {
//       data.formato_digital = true
//     }else{
//       data.formato_digital = false
//     }
  

//     try {
//       if (state?.documento) {
//         //actualizar
//         console.log("actualizare")
//         data.id_estado_documento = parseInt(data.id_estado_documento.toString()) 
//         data.id_reparticion = parseInt(data.id_reparticion.toString()) 

//         const res = await update_documento(state.documento?.id_documento,data)
//         console.log({new_doc:res})
        
//       }else{
//         //crear
//         const res = await crear_documento(data)
//         console.log({new_doc:res})
//       }
//       navi(-1)
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Ocurrió un error',
//       });
//     }
    
//   };
  

//   return (
//     <Box w={"full"}>
//       <ScreenLoading is_visible={is_feching_data_init}/>
//       <Navbar/>

//       <Center>
        
//         <VStack width="80%" py={5}>
//         <Typography sx={{backgroundColor:Colores.color1,color:"whitesmoke",px:2}}>{state?.documento ? "EDITAR" : "CREAR"} DOCUMENTO: {state?.documento?.nombre_documento } </Typography>

//         <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             {/* <FormControl w={["100%","48%"]} isRequired isInvalid={"id_reparticion" in errors}>
//               <FormControl.Label>reparticion</FormControl.Label>
              
//               <Select selectedValue={String(select_id_reparticion)} minWidth="200"  placeholder="Reparticion" _selectedItem={{
//                     bg: "teal.600",
//                     endIcon: <CheckIcon size="5" />
//                   }} mt={1} onValueChange={(itemValue)=>{
//                     setselect_id_reparticion(Number(itemValue))
//                   }}>
//                 {
//                   lst_reparticiones.map((repart)=><Select.Item key={repart.id_reparticion} label={repart.nombre} value={String(repart.id_reparticion)} />)
//                 }
//               </Select>
//             </FormControl> */}
//              <FormControl w={["100%","48%"]} isRequired isInvalid={"id_reparticion" in errors}>
//               <FormControl.Label>reparticion</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={-1}
//                 name="id_reparticion" 
//                 rules={{ required: "la reparticion es obligatoria" }}
//                 render={(ren) => (
//                   <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="reparticion" _selectedItem={{
//                     bg: "teal.600",
//                     endIcon: <CheckIcon size="5" />
//                   }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
//                       {/* <Select.Item label="VIGENTE" value="VIGENTE" /> */}
//                       {
//                         validate_map(lst_reparticiones).map((doc,index)=> <Select.Item key={doc.id_reparticion} label={doc.nombre} value={String(doc.id_reparticion)} />)
//                       }
//                   </Select>
//                   // <input   value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.id_estado_documento?.message}</Text>
//             </FormControl>
          
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"estatuto" in errors}>
//               <FormControl.Label>estatuto</FormControl.Label>
//               <Controller control={control}
//                 name="estatuto" defaultValue=""
//                 rules={{ required: "el estatuto es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input placeholder="estatuto" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.estatuto?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"reglamento" in errors}>
//               <FormControl.Label>File</FormControl.Label>
//                 <input
//                   {...register("file_data", {
//                     // required: "Recipe picture is required",
//                   })}
//                   type="file"
               
//                 />
//               <Text color={"error.600"}>{errors.file_data?.message}</Text>
//             </FormControl>
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"codigo_manual" in errors}>
//               <FormControl.Label>codigo_manual</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="codigo_manual" 
//                 rules={{ required: "el codigo manual es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="codigo_manual" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.codigo_manual?.message}</Text>
//             </FormControl>
//           </HStack>
         
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"reglamento" in errors}>
//               <FormControl.Label>reglamento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="reglamento" 
//                 rules={{ required: "el reglamento de procedimiento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input placeholder="reglamento" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//              <Text color={"error.600"}>{errors.reglamento?.message}</Text>
//             </FormControl>

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"manual_procedimiento" in errors}>
//               <FormControl.Label>manual_procedimiento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="manual_procedimiento" 
//                 rules={{ required: "el manual de procedimiento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="manual_procedimiento" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.manual_procedimiento?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"guia" in errors}>
//               <FormControl.Label>guia</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="guia" 
//                 rules={{ required: "la guia de procedimiento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="guia" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//              <Text color={"error.600"}>{errors.guia?.message}</Text>
//             </FormControl>

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"instructivo" in errors}>
//               <FormControl.Label>instructivo</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="instructivo" 
//                 rules={{ required: "el instructivo es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="instructivo" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.instructivo?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"registro" in errors}>
//               <FormControl.Label>registro</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="registro" 
//                 rules={{ required: "el registro de documento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="registro" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.registro?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"nombre_documento" in errors}>
//               <FormControl.Label>nombre de documento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="nombre_documento" 
//                 rules={{ required: "el nombre de documento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="nombre_documento" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//              <Text color={"error.600"}>{errors.nombre_documento?.message}</Text>
//             </FormControl>

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"elaborado_por" in errors}>
//               <FormControl.Label>elaborado por</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="elaborado_por" 
//                 rules={{ required: "elaborado por es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="elaborado_por" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.elaborado_por?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"revisado_por" in errors}>
//               <FormControl.Label>revisado_por</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="revisado_por" 
//                 rules={{ required: "revisado_por es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="revisado_por" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//              <Text color={"error.600"}>{errors.revisado_por?.message}</Text>
//             </FormControl>

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"aprobado_por" in errors}>
//               <FormControl.Label>aprobado por</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="aprobado_por" 
//                 rules={{ required: "aprobado_por es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="aprobado por" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.aprobado_por?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"resolucion" in errors}>
//               <FormControl.Label>resolucion</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="resolucion" 
//                 rules={{ required: "la resolucion es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input  placeholder="resolucion" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//              <Text color={"error.600"}>{errors.resolucion?.message}</Text>
//             </FormControl>

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"fecha" in errors}>
//               <FormControl.Label>fecha</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="fecha" 
//                 rules={{ required: "la fecha es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <input  type='date' value={String(moment_time.utc(ren.field.value).format('YYYY-MM-DD'))}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.fecha?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"estado_documento" in errors}>
//               <FormControl.Label>estado de documento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={-1}
//                 name="id_estado_documento" 
//                 rules={{ required: "el estado de documento es obligatorio" }}
//                 render={(ren) => (
//                   <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="estado documento" _selectedItem={{
//                     bg: "teal.600",
//                     endIcon: <CheckIcon size="5" />
//                   }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
//                       {/* <Select.Item label="VIGENTE" value="VIGENTE" /> */}
//                       {
//                         lst_estado_documento.map((doc,index)=> <Select.Item key={doc.id_estado_documento} label={doc.nombre} value={String(doc.id_estado_documento)} />)
//                       }
//                   </Select>
//                   // <input   value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.id_estado_documento?.message}</Text>
//             </FormControl>

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"observaciones" in errors}>
//               <FormControl.Label>observaciones</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="observaciones" 
//                 rules={{ required: "las observaciones de documento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input placeholder='observaciones'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.observaciones?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             {/* <FormControl w={["100%","48%"]} isRequired isInvalid={"vigencia" in errors}>
//               <FormControl.Label>vigencia</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="vigencia" 
//                 rules={{ required: "la vigencia de documento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input placeholder='vigencia'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.vigencia?.message}</Text>
//             </FormControl> */}

//             <FormControl w={["100%","48%"]} isRequired isInvalid={"version_documento" in errors}>
//               <FormControl.Label>codigo</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="codigo" 
//                 rules={{ required: "el codigo de documento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input placeholder='codigo'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.codigo?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"version_documento" in errors}>
//               <FormControl.Label>version de documento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="version_documento" 
//                 rules={{ required: "la version de documento de documento es obligatorio", minLength: 1 }}
//                 render={(ren) => (
//                   <Input placeholder='version documento'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.version_documento?.message}</Text>
//             </FormControl>
//             <FormControl w={["100%","48%"]}  isInvalid={"formato_fisico" in errors}>
//               <FormControl.Label>formato fisico</FormControl.Label>
//               <Controller control={control}
//                 name="formato_fisico" defaultValue={false}
//                 rules={{  }}
//                 render={(ren) => (
//                   <Checkbox checked={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
//                   // <Checkbox value={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
//                   // <Input placeholder="aceptacion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.formato_fisico?.message}</Text>
//             </FormControl>
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]}  isInvalid={"formato_digital" in errors}>
//               <FormControl.Label>formato_digital</FormControl.Label>
//               <Controller control={control}
//                 name="formato_digital" defaultValue={false}
//                 rules={{  }}
//                 render={(ren) => (
//                   <Checkbox value={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
//                   // <Input placeholder="aceptacion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.formato_digital?.message}</Text>
//             </FormControl>
            
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"numero_documento" in errors}>
//               <FormControl.Label>numero_documento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="numero_documento" 
//                 rules={{ required: "el numero documento es obligatorio", minLength: 1 }}
//                 render={(ren) => (
//                   <Input placeholder='numero_documento'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.numero_documento?.message}</Text>
//             </FormControl>

            
//           </HStack>
//           <HStack mt={3} justifyContent={"flex-end"} >
//             <Button w={["100%",100]}  onPress={handleSubmit(onSubmit)}>Enviar</Button>
//           </HStack>
//           {/* <HStack mt={3} justifyContent={"flex-end"} >
//             <Button w={["100%",100]}  onPress={()=>{console.log(errors)}}>Ver errores</Button>
//           </HStack> */}
     
//         </VStack>
//         {/* <button onClick={()=>{console.log(getValues())}}>ver form</button> */}
//       </Center>
//     </Box>
//   )
// }










import React ,{useEffect, useState} from 'react'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio, Checkbox ,Typography,Grid} from '@mui/material';
import { use_documento } from '../../../hooks/hooks_api/documento/use_documento';
import { DTO_create_Docuemento } from '../../../hooks/hooks_api/documento/DTO_Documento';
import { Navbar } from '../../../components/Navbar/Navbar';
import { util_file } from '../../../utils/file/util_file';
import { use_reparticion } from '../../../hooks/hooks_api/reparticion/use_reparticion';
import { DTO_Reparticion } from '../../../hooks/hooks_api/reparticion/DTO_reparticion';
import { axios_ } from '../../../axios/_axios';
import { saveAs } from 'file-saver';
import { use_estado_documento } from '../../../hooks/hooks_api/estado_documento/use_estado_documento';
import { DTO_Estado_Documento } from '../../../hooks/hooks_api/estado_documento/DTO_estado_documento';
import { use_Promise_All } from '../../../hooks/use_Promise_All';
import { ScreenLoading } from '../../../components/ScreenLoading/ScreenLoading';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { validate_map } from '../../../utils/validate_map';
import moment_time from 'moment-timezone'
import { Colores } from '../../../config/config_style';


export const Create_Documento_Page = () => {
  const {state} = useLocation()
  console.log("***********")
  console.log({state:state?.documento})
  const navi = useNavigate()
  const {crear_documento,update_documento} = use_documento()
  const {getAll_reparticion} = use_reparticion()
  const {getAll_estado_documento} = use_estado_documento()
  const [select_id_reparticion, setselect_id_reparticion] = useState(0)
  const [lst_reparticiones, setLst_reparticiones] = useState<DTO_Reparticion[]>([])
  const [lst_estado_documento, setLst_estado_documento] = useState<DTO_Estado_Documento[]>([])
  const {control,handleSubmit,formState: { errors }, register,getValues} = useForm<DTO_create_Docuemento>({
    defaultValues:state?.documento ? state.documento : {}
  });

  const [file_select, setFile_select] = useState<Uint8Array>()

  const {get_Fetch:get_Fetch_data_init,is_fetching:is_feching_data_init} = use_Promise_All()

  useEffect(() => {
    get_Fetch_data_init([
      getAll_reparticion().then((res)=>setLst_reparticiones(res)),
      // getAll_reparticion().then((res)=>setLst_reparticiones(res)),
      getAll_estado_documento().then((res)=>setLst_estado_documento(res))
    ],undefined,()=>{Swal.fire({title:"Error",text:"no se pudo obtener los datos necesarios",icon:"info"})})
  }, [])
  
  console.log({reparticiones:lst_reparticiones})
  
  const onSubmit = async (data: DTO_create_Docuemento) => {
    // if (!select_id_reparticion) {
    //   return
    // }
    // data.id_reparticion = select_id_reparticion
 
    const formData = new FormData();

    if (data?.file_data?.length >= 0) {
      const files = data?.file_data as any
      const file = files[0]
      data.file_data = file
      // crear_documento(data)
    }
    if (data.formato_fisico) {
      data.formato_fisico = true
    }else{
      data.formato_fisico = false

    }
    if (data.formato_digital) {
      data.formato_digital = true
    }else{
      data.formato_digital = false
    }
  

    try {
      if (state?.documento) {
        //actualizar
        console.log("actualizare")
        data.id_estado_documento = parseInt(data.id_estado_documento.toString()) 
        data.id_reparticion = parseInt(data.id_reparticion.toString()) 

        const res = await update_documento(state.documento?.id_documento,data)
        console.log({new_doc:res})
        
      }else{
        //crear
        const res = await crear_documento(data)
        console.log({new_doc:res})
      }
      navi(-1)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error',
      });
    }
    
  };
  

  return (
    <Box w={"full"}>
      <ScreenLoading is_visible={is_feching_data_init}/>
      <Navbar/>

      <Center>
        
        <VStack width="80%" py={5}>
        <Typography p={2} sx={{backgroundColor:Colores.color2,color:"whitesmoke"}}>{state?.documento ? "EDITAR" : "CREAR"} DOCUMENTO: {state?.documento?.nombre_documento } </Typography>

        <HStack  justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"nombre_documento" in errors}>
              <FormControl.Label>Nombre de documento</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="nombre_documento" 
                rules={{ required: "el nombre de documento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="nombre del documento" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
             <Text color={"error.600"}>{errors.nombre_documento?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"version_documento" in errors}>
              <FormControl.Label>Version de documento</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="version_documento" 
                rules={{ required: "la version de documento de documento es obligatorio", minLength: 1 }}
                render={(ren) => (
                  <Input placeholder='version del documento'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.version_documento?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"id_reparticion" in errors}>
              <FormControl.Label>Reparticion</FormControl.Label>
              <Controller control={control}
                defaultValue={-1}
                name="id_reparticion" 
                rules={{ required: "la reparticion es obligatoria" }}
                render={(ren) => (
                  <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="reparticion" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
                      {
                        validate_map(lst_reparticiones).map((doc,index)=> <Select.Item key={doc.id_reparticion} label={`${doc.codigo} - ${doc.nombre}`} value={String(doc.id_reparticion)} />)
                      }
                  </Select>
                )}
                
              />
              <Text color={"error.600"}>{errors.id_estado_documento?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"estado_documento" in errors}>
              <FormControl.Label>Estado de documento</FormControl.Label>
              <Controller control={control}
                defaultValue={-1}
                name="id_estado_documento" 
                rules={{ required: "el estado de documento es obligatorio" }}
                render={(ren) => (
                  <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="estado documento" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
                      {/* <Select.Item label="VIGENTE" value="VIGENTE" /> */}
                      {
                        lst_estado_documento.map((doc,index)=> <Select.Item key={doc.id_estado_documento} label={doc.nombre} value={String(doc.id_estado_documento)} />)
                      }
                  </Select>
                  // <input   value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.id_estado_documento?.message}</Text>
            </FormControl>
            {/* FILE */}
            <FormControl w={["100%","48%"]} >
              <FormControl.Label>File</FormControl.Label>
                <input
                  {...register("file_data", {
                    // required: "Recipe picture is required",
                  })}
                  type="file"
               
                />
              <Text color={"error.600"}>{errors.file_data?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"fecha" in errors}>
              <FormControl.Label>Fecha</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="fecha" 
                rules={{ required: "la fecha es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <input  type='date' value={String(moment_time.utc(ren.field.value).format('YYYY-MM-DD'))}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.fecha?.message}</Text>
            </FormControl>

            <FormControl w={["100%","48%"]} isRequired isInvalid={"codigo" in errors}>
              <FormControl.Label>Codigo</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="codigo" 
                rules={{ required: "el codigo de documento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder='codigo'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.codigo?.message}</Text>
            </FormControl>
           
            
          
            <FormControl w={["100%","48%"]} isRequired isInvalid={"estatuto" in errors}>
              <FormControl.Label>Estatuto</FormControl.Label>
              <Controller control={control}
                name="estatuto" defaultValue=""
                rules={{ required: "el estatuto es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="estatuto" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.estatuto?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"codigo_manual" in errors}>
              <FormControl.Label>Codigo manual</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="codigo_manual" 
                rules={{ required: "el codigo manual es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="codigo manual" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.codigo_manual?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"reglamento" in errors}>
              <FormControl.Label>Reglamento</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="reglamento" 
                rules={{ required: "el reglamento de procedimiento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="reglamento" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
             <Text color={"error.600"}>{errors.reglamento?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"guia" in errors}>
              <FormControl.Label>Guia</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="guia" 
                rules={{ required: "la guia de procedimiento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="guia" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
             <Text color={"error.600"}>{errors.guia?.message}</Text>
            </FormControl>

            <FormControl w={["100%","48%"]} isRequired isInvalid={"instructivo" in errors}>
              <FormControl.Label>Instructivo</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="instructivo" 
                rules={{ required: "el instructivo es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="instructivo" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.instructivo?.message}</Text>
            </FormControl>

            <FormControl w={["100%","48%"]} isRequired isInvalid={"manual_procedimiento" in errors}>
              <FormControl.Label>Manual procedimiento</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="manual_procedimiento" 
                rules={{ required: "el manual de procedimiento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="manual procedimiento" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.manual_procedimiento?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"revisado_por" in errors}>
              <FormControl.Label>revisado_por</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="revisado_por" 
                rules={{ required: "revisado es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="revisado por" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
             <Text color={"error.600"}>{errors.revisado_por?.message}</Text>
            </FormControl>

            <FormControl w={["100%","48%"]} isRequired isInvalid={"aprobado_por" in errors}>
              <FormControl.Label>Aprobado por</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="aprobado_por" 
                rules={{ required: "aprobado por es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="aprobado por" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.aprobado_por?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"elaborado_por" in errors}>
              <FormControl.Label>Elaborado por</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="elaborado_por" 
                rules={{ required: "elaborado por es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="elaborado por" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.elaborado_por?.message}</Text>
            </FormControl>
            
            <FormControl w={["100%","48%"]} isRequired isInvalid={"registro" in errors}>
              <FormControl.Label>Registro</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="registro" 
                rules={{ required: "el registro de documento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="registro" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.registro?.message}</Text>
            </FormControl>

            <FormControl w={["100%","48%"]} isRequired isInvalid={"resolucion" in errors}>
              <FormControl.Label>Resolucion</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="resolucion" 
                rules={{ required: "la resolucion es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input  placeholder="resolucion" value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
             <Text color={"error.600"}>{errors.resolucion?.message}</Text>
            </FormControl>

           
            <FormControl w={["100%","48%"]}  isInvalid={"formato_fisico" in errors}>
              <FormControl.Label>Formato fisico</FormControl.Label>
              <Controller control={control}
                name="formato_fisico" defaultValue={false}
                rules={{  }}
                render={(ren) => (
                  <Checkbox checked={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
                  // <Checkbox value={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
                  // <Input placeholder="aceptacion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.formato_fisico?.message}</Text>
            </FormControl>

           

            <FormControl w={["100%","48%"]} isRequired isInvalid={"numero_documento" in errors}>
              <FormControl.Label>Numero de documento</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="numero_documento" 
                rules={{ required: "el numero documento es obligatorio", minLength: 1 }}
                render={(ren) => (
                  <Input placeholder='numero de documento'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.numero_documento?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"observaciones" in errors}>
              <FormControl.Label>observaciones</FormControl.Label>
              <Controller control={control}
                defaultValue={""}
                name="observaciones" 
                rules={{ required: "las observaciones de documento es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder='observaciones'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.observaciones?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]}  isInvalid={"formato_digital" in errors}>
              <FormControl.Label>Formato digital</FormControl.Label>
              <Controller control={control}
                name="formato_digital" defaultValue={false}
                rules={{  }}
                render={(ren) => (
                  <Checkbox value={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
                  // <Input placeholder="aceptacion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.formato_digital?.message}</Text>
            </FormControl>
          </HStack>
          
          <HStack mt={3} justifyContent={"flex-end"} >
            <Button w={["100%",100]}  onPress={handleSubmit(onSubmit)}>Enviar</Button>
          </HStack>
          {/* <HStack mt={3} justifyContent={"flex-end"} >
            <Button w={["100%",100]}  onPress={()=>{console.log(errors)}}>Ver errores</Button>
          </HStack> */}
     
        </VStack>
        {/* <button onClick={()=>{console.log(getValues())}}>ver form</button> */}
      </Center>
    </Box>
  )
}
