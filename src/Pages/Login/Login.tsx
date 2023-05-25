import React, { useEffect, useState } from "react";
import "./Styles.css";
import { axios_ } from "../../axios/_axios";
import { useStore_sesion } from "../../store/store_sesion";
import { useNavigate } from "react-router-dom";
import { I_Sesion } from "../../Model/I_Sesion";
import { get_Store_Sesion } from "../../localStorage/Store_Sesion";
import Swal from "sweetalert2";

export const Login = () => {
  const {login,isAuthenticated} = useStore_sesion()
  const navi = useNavigate()
  const [nombre_usuario, setnombre_usuario] = useState("");
  const [contrasena, setcontrasena] = useState("");

  useEffect(() => {
    const data_sesion = get_Store_Sesion()
    if (data_sesion) {
      console.log("en memoria",data_sesion)
      login(data_sesion.token,data_sesion.usuario)
      console.log("ingresare esta data")
      navi("/")
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("enviar")
    try {
      const res = await axios_.post("/sesion/login",{usuario:nombre_usuario,contrasena:contrasena})
      const token = res?.headers["auth-token"]
      console.log(res)

      if (token && res.data?.usuario) {
        console.log("guardar esete usuario ",res.data.usuario)
        login(token,res.data.usuario)
        navi("/")
      }
    } catch (error: any) {
      const mensaje =
      
      Swal.fire('Error', error?.response?.data?.error || 'Hubo un error al iniciar sesion', 'error');

      console.log()
    }
   

  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Organizacion y Metodos</h2>
        <label>usuario</label>
        <input
          type="nombre_usuario"
          value={nombre_usuario}
          onChange={(e) => setnombre_usuario(e.target.value)}
          placeholder="usuario"
          required
        />
        <label>contrasena</label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setcontrasena(e.target.value)}
          placeholder="contraseña"
          required
        />
        <button style={{backgroundColor:"#025666"}} type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
};

