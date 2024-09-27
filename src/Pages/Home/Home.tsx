import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStore_sesion } from "../../store/store_sesion";
import { PruebaDocuemento } from "../PruebaDocumento/PruebaDocuemento";


interface I_Form {
  nombre: string
  apellido: string
}

export const Home = () => {
  const navi = useNavigate();
  const { isAuthenticated, token } = useStore_sesion()
  const { control, handleSubmit, formState: { errors }, register } = useForm<I_Form>();
  const onSubmit = (data: I_Form) => {
    console.log("submiting with ", data);
  };

  if (!token) {
    return(
      <h1>cargando</h1>
    )
  }

  return (
    <>
      {
        isAuthenticated ?
          <PruebaDocuemento type_route="private" />
          :
          <PruebaDocuemento type_route="public" />
      }
    </>
  );
};
