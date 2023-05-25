



import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Box, Center, FormControl, HStack, Input, VStack,Text, Button, Select, CheckIcon  } from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { FormControlLabel, RadioGroup,Radio } from '@mui/material';


interface I_Form{
  apellido:string
  nombre:string
  marca:string
}

export const ModelPageForm = () => {

  const {control,handleSubmit,formState: { errors }, register} = useForm<I_Form>();

  const onSubmit = (data: I_Form) => {
    console.log("submiting with ", data);
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
                name="apellido" defaultValue=""
                rules={{ required: "el nombre es obligatorio", minLength: 3 }}
                render={(ren) => (
                  <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.apellido?.message}</Text>
            </FormControl>
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre" in errors}>
              <FormControl.Label>Nombre</FormControl.Label>
              <Controller control={control}
                name="nombre" defaultValue=""
                rules={{ required: "debe seleccionar uno", minLength: 3 }}
                render={(ren) => (
                  <Select selectedValue={ren.field.value} minWidth="200"  placeholder="Choose Service" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => ren.field.onChange(itemValue)}>
                      <Select.Item label="UX Research" value="ux" />
                      <Select.Item label="Web Development" value="web" />
                      <Select.Item label="Cross Platform Development" value="cross" />
                      <Select.Item label="UI Designing" value="ui" />
                      <Select.Item label="Backend Development" value="backend" />
                    </Select>
                  // <Input placeholder="John" value={ren.field.value}  onChangeText={(val: string) => ren.field.onChange(val)}/>
                )}
                
              />
              <Text color={"error.600"}>{errors.nombre?.message}</Text>
            </FormControl>
          </HStack>
          <HStack justifyContent={"space-between"}  flexWrap={"wrap"} >
            <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre" in errors}>
              <FormControl.Label>Nombre</FormControl.Label>
              <Controller control={control}
                name="marca" defaultValue=""
                rules={{ required: "debe seleccionar una marca", minLength: 3 }}
                render={(ren) => (
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={ren.field.value}
                    onChange={(val)=>ren.field.onChange(val)}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                )}
                
              />
              <Text color={"error.600"}>{errors.marca?.message}</Text>
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
