



import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio } from '@mui/material';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { DTO_create_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
import { use_tipo_informe } from '../../hooks/hooks_api/tipo_informe/use_tipo_informe';
import { DTO_Tipo_Informe, DTO_create_Tipo_Informe } from '../../hooks/hooks_api/tipo_informe/DTO_tipo_informe';
import { use_sub_tipo_informe } from '../../hooks/hooks_api/sub_tipo_informe/use_sub_tipo_informe';
import { DTO_Sub_Tipo_Informe, DTO_create_Sub_Tipo_Informe } from '../../hooks/hooks_api/sub_tipo_informe/DTO_sub_tipo_informe';




export const Create_Sub_Tipo_Informe_Page = () => {
  const [lst_tipo_informe, setlst_tipo_informe] = useState<DTO_Tipo_Informe[]>([])
  const {crear_sub_tipo_informe} = use_sub_tipo_informe()
  const {getAll_tipo_informe} = use_tipo_informe()

  const {control,handleSubmit,formState: { errors }, register} = useForm<DTO_create_Sub_Tipo_Informe>();

  useEffect(() => {
    getAll_tipo_informe().then((res)=>setlst_tipo_informe(res))
  }, [])
  

  const onSubmit = (data: DTO_create_Sub_Tipo_Informe) => {
    console.log("submiting with ", data);
    crear_sub_tipo_informe(data)
  };
  

  return (
    <Box >
      <Navbar/>
      <Center>
        <VStack width="80%" >
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
              <FormControl.Label>Nombre</FormControl.Label>
              <Controller control={control}
                name="nombre_subtipo_informe" defaultValue=""
                rules={{ required: "el nombre es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.nombre_subtipo_informe?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
              <FormControl.Label>Tipo Informe</FormControl.Label>
              <Controller control={control}
                name="id_tipo_informe"
                rules={{ required: "el tipo es obligatorio" }}
                render={(ren) => (
                  <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="Tipo de Informe" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
                    {
                      lst_tipo_informe.map((tipo_infor)=><Select.Item key={tipo_infor.id_tipo_informe} label={tipo_infor.nombre_tipo_informe} value={String(tipo_infor.id_tipo_informe)} />)
                    }
                  </Select>
                )}
                
              />
              <Text color={"error.600"}>{errors.id_tipo_informe?.message}</Text>
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
