



import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio, Checkbox } from '@mui/material';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { DTO_create_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
import { DTO_create_Responsable } from '../../hooks/hooks_api/responable/DTO_Responsable';
import { use_responsable } from '../../hooks/hooks_api/responable/use_responsable';
import { use_recomendacion } from '../../hooks/hooks_api/recomendacion/use_recomendacion';
import { DTO_create_Recomendacion } from '../../hooks/hooks_api/recomendacion/DTO_recomendacion';




export const Create_Recomendacion_Informe_Page = () => {
  const {crear_recomendacion} = use_recomendacion()
  const [disable_justificacion, setDisable_justificacion] = useState(false)

  const {control,handleSubmit,formState: { errors }, register} = useForm<DTO_create_Recomendacion>();

  const onSubmit = (data: DTO_create_Recomendacion) => {
    console.log("submiting with ", data);
    // crear_recomendacion(data)
  };
  

  return (
    <Box >
      <Navbar/>
      <Center>
        <VStack width="80%" >
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"titulo" in errors}>
              <FormControl.Label>titulo</FormControl.Label>
              <Controller control={control}
                name="titulo" defaultValue=""
                rules={{ required: "el titulo es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="titulo" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.titulo?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"comentario" in errors}>
              <FormControl.Label>comentario</FormControl.Label>
              <Controller control={control}
                name="comentario" defaultValue=""
                rules={{ required: "el comentario es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="comentario" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.comentario?.message}</Text>
            </FormControl>
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"numero_recomendacion" in errors}>
              <FormControl.Label>numero de recomendacion</FormControl.Label>
              <Controller control={control}
                name="numero_recomendacion" defaultValue=""
                rules={{ required: "el numero de recomendacion es obligatorio",  }}
                render={(ren) => (
                  <Input placeholder="12321" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.numero_recomendacion?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"plazo_impl" in errors}>
              <FormControl.Label>plazo implementacion</FormControl.Label>
              <Controller control={control}
                name="plazo_impl" defaultValue=""
                rules={{ required: "el plazo de implementacion es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <input type="date" id="start" name="trip-start" value={ren.field.value}  onChange={(val) => ren.field.onChange(val.target.value)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.plazo_impl?.message}</Text>
            </FormControl>
          
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"descripcion" in errors}>
              <FormControl.Label>descripcion</FormControl.Label>
              <Controller control={control}
                name="descripcion" defaultValue=""
                rules={{ required: "la descripcion es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="descripcion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.descripcion?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"antecedente" in errors}>
              <FormControl.Label>antecedente</FormControl.Label>
              <Controller control={control}
                name="antecedente" defaultValue=""
                rules={{ required: "el antecedente es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="Tipo de Informe" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>

                    <Select.Item  label={"NUEVA"} value={"NUEVA"} />
                    <Select.Item  label={"RECURRENTE"} value={"RECURRENTE"} />
                   
                  </Select>
                )}
                
              />
              <Text color={"error.600"}>{errors.antecedente?.message}</Text>
            </FormControl>
          
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]}  isInvalid={"aceptacion" in errors}>
              <FormControl.Label>aceptacion</FormControl.Label>
              <Controller control={control}
                name="aceptacion" defaultValue={false}
                rules={{  }}
                render={(ren) => (
                  <Checkbox value={ren.field.value} onChange={(val)=>{
                    // setDisable_justificacion(true)
                    ren.field.onChange(val)
                  }}/>
                  // <Input placeholder="aceptacion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.aceptacion?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"justificacion_rechazo" in errors}>
              <FormControl.Label>justificacion rechazo</FormControl.Label>
              <Controller control={control}
                name="justificacion_rechazo" defaultValue=""
                rules={{ required: "la justificacion rechazo es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input isDisabled={disable_justificacion} placeholder="justificacion rechazo" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>

                )}
                
              />
              <Text color={"error.600"}>{errors.justificacion_rechazo?.message}</Text>
            </FormControl>
          
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
         
            <FormControl w={["100%","48%"]} isRequired isInvalid={"estado_impl" in errors}>
              <FormControl.Label>estado implementacion</FormControl.Label>
              <Controller control={control}
                name="estado_impl" defaultValue=""
                rules={{ required: "el estado implementacion es obligatorio", minLength: 3 }}
                render={(ren) => (

                  <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="Tipo de Informe" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>

                    <Select.Item  label={"PENDIENTE"} value={"PENDIENTE"} />
                    <Select.Item  label={"PROCESO"} value={"PROCESO"} />
                    <Select.Item  label={"DESCARGADA"} value={"DESCARGADA"} />
                    <Select.Item  label={"LEVANTADA"} value={"LEVANTADA"} />
                   
                  </Select>

                )}
                
              />
              <Text color={"error.600"}>{errors.estado_impl?.message}</Text>
            </FormControl>
          
          </HStack>
         
        
          {/* <HStack mt={3} justifyContent={"flex-end"} >
            <Button w={["100%",100]}  onPress={handleSubmit(onSubmit)}>Enviar</Button>
          </HStack> */}
          <button onClick={()=>console.log(errors)}>ver errors</button>
        </VStack>
      </Center>
    </Box>
  )
}
