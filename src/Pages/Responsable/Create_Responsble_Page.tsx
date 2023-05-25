



import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio } from '@mui/material';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { DTO_create_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
import { DTO_create_Responsable } from '../../hooks/hooks_api/responable/DTO_Responsable';
import { use_responsable } from '../../hooks/hooks_api/responable/use_responsable';




export const Create_Responsable_Page = () => {
  const {crear_responsable} = use_responsable()

  const {control,handleSubmit,formState: { errors }, register} = useForm<DTO_create_Responsable>();

  const onSubmit = (data: DTO_create_Responsable) => {
    console.log("submiting with ", data);
    crear_responsable(data)
  };
  

  return (
    <Box >
      <Navbar/>
      <Center>
        <VStack width="80%" >
        <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre" in errors}>
              <FormControl.Label>Nombre</FormControl.Label>
              <Controller control={control}
                name="nombre_responsable" defaultValue=""
                rules={{ required: "el nombre es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.nombre_responsable?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre" in errors}>
              <FormControl.Label>usuario</FormControl.Label>
              <Controller control={control}
                name="nombre_usuario" defaultValue=""
                rules={{ required: "el usuario es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.nombre_usuario?.message}</Text>
            </FormControl>
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre" in errors}>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Controller control={control}
                name="contrasena" defaultValue=""
                rules={{ required: "la contraseña es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.contrasena?.message}</Text>
            </FormControl>
          
          </HStack>
         
         
        
          {/* <HStack mt={3} justifyContent={"flex-end"} >
            <Button w={["100%",100]}  onPress={handleSubmit(onSubmit)}>Enviar</Button>
          </HStack> */}
          
        </VStack>
      </Center>
    </Box>
  )
}
