



import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio } from '@mui/material';
import { use_secretaria } from '../../hooks/hooks_api/secretaria/use_secretaria';
import { use_entidad } from '../../hooks/hooks_api/entidad/use_entidad';
import { DTO_Entidad, DTO_create_Entidad } from '../../hooks/hooks_api/entidad/DTO_entidad';
import { use_tipo_informe } from '../../hooks/hooks_api/tipo_informe/use_tipo_informe';
import { DTO_Tipo_Informe, DTO_create_Tipo_Informe } from '../../hooks/hooks_api/tipo_informe/DTO_tipo_informe';
import { use_sub_tipo_informe } from '../../hooks/hooks_api/sub_tipo_informe/use_sub_tipo_informe';
import { DTO_Sub_Tipo_Informe, DTO_create_Sub_Tipo_Informe } from '../../hooks/hooks_api/sub_tipo_informe/DTO_sub_tipo_informe';
import { DTO_creata_Informe } from '../../hooks/hooks_api/informe/DTO_Informe';
import { use_informe } from '../../hooks/hooks_api/informe/use_Informe';




export const Create_Informe_Page = () => {
  const {crear_informe} = use_informe()
  const {getAll_sub_tipo_informe} = use_sub_tipo_informe()
  const {getAll_tipo_informe} = use_tipo_informe()
  const {getAll_entidad} = use_entidad()

  const [id_tipo_select, setid_tipo_select] = useState(0)
  const [lst_tipo_infor, setlst_tipo_infor] = useState<DTO_Tipo_Informe[]>([])
  const [lst_sub_tipo_infor, setlst_sub_tipo_infor] = useState<DTO_Sub_Tipo_Informe[]>([])
  const [lst_entidad, setlst_entidad] = useState<DTO_Entidad[]>([])

  const {control,handleSubmit,formState: { errors }, register} = useForm<DTO_creata_Informe>();

  useEffect(() => {
    getAll_sub_tipo_informe().then((res)=>setlst_sub_tipo_infor(res))
    getAll_tipo_informe().then((res)=>setlst_tipo_infor(res))
    getAll_entidad().then((res)=>setlst_entidad(res))

  }, [])
  

  const onSubmit = (data: DTO_creata_Informe) => {
    console.log("submiting with ", data);
    crear_informe(data)
    // crear_sub_tipo_informe(data)
  };
  

  return (
    <Box >
      <Navbar/>
      <Center>
        <VStack width="80%" >
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
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
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
              <FormControl.Label>Tipo Informe</FormControl.Label>
              <Select selectedValue={String(id_tipo_select)} minWidth="200"  placeholder="Tipo de Informe" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={(itemValue)=>{
                    setid_tipo_select(Number(itemValue))
                  }}>
                {
                  lst_tipo_infor.map((tipo_infor)=><Select.Item key={tipo_infor.id_tipo_informe} label={tipo_infor.nombre_tipo_informe} value={String(tipo_infor.id_tipo_informe)} />)
                }
              </Select>
            </FormControl>
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
                <FormControl.Label>Sub Tipo Informe</FormControl.Label>
                <Controller control={control}
                  name="subtipo_informe_id"
                  rules={{ required: "el sub tipo es obligatorio" }}
                  render={(ren) => (
                    <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="Tipo de Informe" _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
                        {
                          lst_sub_tipo_infor.filter((sub)=> sub.id_tipo_informe == id_tipo_select).map((sub_tipo)=><Select.Item key={sub_tipo.id_subtipo_informe} label={sub_tipo.nombre_subtipo_informe} value={String(sub_tipo.id_subtipo_informe)} />)
                        }
                      </Select>
                  )}
                  
                />
                <Text color={"error.600"}>{errors.subtipo_informe_id?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
                <FormControl.Label>Entidad</FormControl.Label>
                <Controller control={control}
                  name="entidad_id"
                  rules={{ required: "la entidad es obligatorio" }}
                  render={(ren) => (
                    <Select selectedValue={String(ren.field.value)} minWidth="200"  placeholder="Tipo de Informe" _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
                        {
                          lst_entidad.map((entidad)=><Select.Item key={entidad.id_entidad} label={entidad.nombre_entidad} value={String(entidad.id_entidad)} />)
                        }
                      </Select>
                  )}
                  
                />
                <Text color={"error.600"}>{errors.subtipo_informe_id?.message}</Text>
            </FormControl>
            
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre sub tipo" in errors}>
              <FormControl.Label>descripcion</FormControl.Label>
              <Controller control={control}
                name="descripcion" defaultValue=""
                rules={{ required: "la descripcion es obligatoria", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="descripcion" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.descripcion?.message}</Text>
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
