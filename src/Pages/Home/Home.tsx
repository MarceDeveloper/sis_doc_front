import { Box, Button, Center, FormControl, Input, VStack } from "native-base";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Navbar } from "../../components/Navbar/Navbar";


interface I_Form{
  nombre:string
  apellido:string
}

export const Home = () => {
  const navi = useNavigate();
  const {control,handleSubmit,formState: { errors }, register} = useForm<I_Form>();
  const onSubmit = (data: I_Form) => {
    console.log("submiting with ", data);
  };

  return (
    <>
    <Box  >
    <Navbar/>
      <Center>
        <VStack width="80%" space={4}>
          <Box w={["100%","50%"]}>
            <FormControl isRequired isInvalid={"Nombre" in errors}>
              <FormControl.Label>Nombre</FormControl.Label>
              <Controller
                control={control}
                render={(ren) => (
                  <Input
                    placeholder="John"
                    onChangeText={(val: string) => ren.field.onChange(val)}
                    value={ren.field.value}
                  />
                )}
                name="apellido"
                rules={{ required: "el nombre es obligatorio", minLength: 3 }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.apellido?.message}
              </FormControl.ErrorMessage>
              
              
            </FormControl>
          </Box>
          
          
          
          
          
          <button onClick={handleSubmit(onSubmit)}>Enviar</button>
          
        </VStack>
      </Center>
    </Box>
    </>
  );
};
