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
      <Navbar/>
    </>
  );
};
