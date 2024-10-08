import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
} from "@mui/material";
import styled, { keyframes } from "styled-components";
import { axios_ } from "../../axios/_axios";
import { useStore_sesion } from "../../store/store_sesion";
import { useNavigate } from "react-router-dom";
import { get_Store_Sesion } from "../../localStorage/Store_Sesion";
import Swal from "sweetalert2";

// Estilos para el contenedor principal con un fondo de gradiente animado
const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  animation: gradientAnimation 10s ease infinite;
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  background-size: 200% 200%;
`;

// Animación para la entrada del formulario
const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledPaper = styled(Paper)`
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  animation: ${FadeIn} 0.7s ease-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #21d4fd, #b721ff);
  color: white;
  &:hover {
    background: linear-gradient(45deg, #d376ff, #005bea);
  }
  margin-top: 16px;
`;

export const Login = () => {
  const { login } = useStore_sesion();
  const navigate = useNavigate();
  const [nombre_usuario, setnombre_usuario] = useState("");
  const [contrasena, setcontrasena] = useState("");

  useEffect(() => {
    const data_sesion = get_Store_Sesion();
    if (data_sesion) {
      login(data_sesion.token, data_sesion.usuario);
      navigate("/home");
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios_.post("/api/sesion/login", {
        usuario: nombre_usuario,
        contrasena: contrasena,
      });
      const token = res?.headers["auth-token"];
      if (token && res.data?.usuario) {
        login(token, res.data.usuario);
        navigate("/home");
      }
    } catch (error: any) {
      Swal.fire(
        "Error",
        error?.response?.data?.error || "Hubo un error al iniciar sesión",
        "error"
      );
    }
  };

  const goToChangePassword = () => {
    navigate("/change_my_password");
  };

  return (
    <LoginWrapper>
      <Container maxWidth="xs">
        <StyledPaper elevation={3}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Bienvenido
          </Typography>

          <Typography
            variant="body1"
            align="center"
            gutterBottom
            style={{ marginBottom: "24px", color: "#555" }}
          >
            Organización y Métodos
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Usuario"
              variant="outlined"
              margin="normal"
              value={nombre_usuario}
              onChange={(e) => setnombre_usuario(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Contraseña"
              variant="outlined"
              type="password"
              margin="normal"
              value={contrasena}
              onChange={(e) => setcontrasena(e.target.value)}
              required
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </StyledButton>

            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={goToChangePassword}
              sx={{ mt: 2 }}
            >
              Cambiar Contraseña
            </Button>
          </Box>
        </StyledPaper>
      </Container>
    </LoginWrapper>
  );
};
