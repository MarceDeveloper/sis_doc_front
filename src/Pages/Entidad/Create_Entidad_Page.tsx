



import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio } from '@mui/material';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { DTO_create_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';




export const Create_Entidad_Page = () => {
  const {crear_entidad} = use_entidad()

  const {control,handleSubmit,formState: { errors }, register} = useForm<DTO_create_Entidad>();

  const onSubmit = (data: DTO_create_Entidad) => {
    console.log("submiting with ", data);
    crear_entidad(data)
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
                name="nombre_entidad" defaultValue=""
                rules={{ required: "el nombre es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.nombre_entidad?.message}</Text>
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
