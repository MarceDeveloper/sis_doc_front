
import React from 'react'

export const Editar_Documento_Page_copy = () => {
  return (
    <div>_</div>
  )
}



// import React ,{useEffect, useState} from 'react'
// import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
// import { useForm ,Controller} from 'react-hook-form';
// import { FormControlLabel, RadioGroup,Radio, Checkbox } from '@mui/material';
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


// export const Create_Documento_Page = () => {
//   const navi = useNavigate()
//   const {crear_documento} = use_documento()
//   const {getAll_reparticion} = use_reparticion()
//   const {getAll_estado_documento} = use_estado_documento()
//   const [select_id_reparticion, setselect_id_reparticion] = useState(0)
//   const [lst_reparticiones, setLst_reparticiones] = useState<DTO_Reparticion[]>([])
//   const [lst_estado_documento, setLst_estado_documento] = useState<DTO_Estado_Documento[]>([])
//   const {control,handleSubmit,formState: { errors }, register} = useForm<DTO_create_Docuemento>();

//   const [file_select, setFile_select] = useState<Uint8Array>()

//   const {get_Fetch:get_Fetch_data_init,is_fetching:is_feching_data_init} = use_Promise_All()

//   useEffect(() => {
//     get_Fetch_data_init([
//       getAll_reparticion().then((res)=>setLst_reparticiones(res)),
//       getAll_reparticion().then((res)=>setLst_reparticiones(res)),
//       getAll_estado_documento().then((res)=>setLst_estado_documento(res))
//     ],undefined,()=>{Swal.fire({title:"Error",text:"no se pudo obtener los datos necesarios",icon:"info"})})
//   }, [])
  
  
//   const onSubmit = async (data: DTO_create_Docuemento) => {
    
//     if (!select_id_reparticion) {
//       return
//     }
//     data.id_reparticion = select_id_reparticion
//     const formData = new FormData();

//     if (data?.file_data?.length >= 0) {
//       const files = data?.file_data as any
//       const file = files[0]
//       data.file_data = file
//       // crear_documento(data)
//     }
//     console.log(data.fecha)
//     await crear_documento(data)
//     // navi(-1)
    
//   };
  

//   return (
//     <Box w={"full"}>
//       <ScreenLoading is_visible={is_feching_data_init}/>
//       <Navbar/>
//       <Center>
//         <VStack width="80%" py={5}>
//         <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"id_reparticion" in errors}>
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
//                   <input  type='date' value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
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
//                   <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="" _selectedItem={{
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
//                   <Input placeholder='codigo'  value={String(ren.field.value)}  onChange={(val:any) => ren.field.onChange(val)}/>
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
//                   <Input placeholder='version documento'  value={String(ren.field.value)}  onChange={(val:any) => ren.field.onChange(val)}/>
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
//                   <Checkbox value={ren.field.value} onChange={(val)=>ren.field.onChange(val)}/>
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
        

//             {/* <FormControl w={["100%","48%"]} isRequired isInvalid={"unidad" in errors}>
//               <FormControl.Label>unidad</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="unidad" 
//                 rules={{ required: "la unidad de documento es obligatorio", minLength: 3 }}
//                 render={(ren) => (
//                   <Input placeholder='unidad'  value={String(ren.field.value)}  onChange={(val) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.unidad?.message}</Text>
//             </FormControl> */}
//           </HStack>
//           <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
//             <FormControl w={["100%","48%"]} isRequired isInvalid={"numero_documento" in errors}>
//               <FormControl.Label>numero_documento</FormControl.Label>
//               <Controller control={control}
//                 defaultValue={""}
//                 name="numero_documento" 
//                 rules={{ required: "el numero documento es obligatorio", minLength: 1 }}
//                 render={(ren) => (
//                   <Input placeholder='numero_documento'  value={String(ren.field.value)}  onChange={(val:any) => ren.field.onChange(val)}/>
//                 )}
                
//               />
//               <Text color={"error.600"}>{errors.numero_documento?.message}</Text>
//             </FormControl>

            
//           </HStack>
//           <button>revisar esto linea de abajo</button>
//           {/* <HStack mt={3} justifyContent={"flex-end"} >
//             <Button w={["100%",100]}  onPress={handleSubmit(onSubmit)}>Enviar</Button>
//           </HStack> */}
//           {/* <HStack mt={3} justifyContent={"flex-end"} >
//             <Button w={["100%",100]}  onPress={()=>{console.log(errors)}}>Ver errores</Button>
//           </HStack> */}
//           {/* <HStack mt={3} justifyContent={"flex-end"} >
//             <Button w={["100%",100]}  onPress={async ()=>{
//               try {
//                 const response = await axios_.post('/files', {file_name:"fuentes.docx"},{ responseType: 'blob' });
//                 // Guardar la respuesta como un archivo
//                 saveAs(response.data, 'fuentes.docx');
//               } catch (error) {
//                 // Manejar errores
//                 console.error('Error al realizar la solicitud:', error);
//               }
//             }}>get file</Button>
//           </HStack> */}
//         </VStack>
        
//       </Center>
//     </Box>
//   )
// }
