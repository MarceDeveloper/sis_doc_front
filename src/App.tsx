import GlobalStyle from './ComponentsStyled/GlobalStyle';

import { useEffect, useState } from 'react'
import { Input } from './ComponentsStyled/Input'
import { Login } from './Pages/Login/Login';
import { Formulario } from './components/FormBasic/FormBasic';
import { GlobalStyle_Form } from './ComponentsStyled/GlobalStyle_Form';
import { App_Router } from './router/App_Router';
import { get_Store_Sesion } from './localStorage/Store_Sesion';
import { useStore_sesion } from './store/store_sesion';
import { PruebaDocuemento, } from './Pages/PruebaDocumento/PruebaDocuemento';
import { GlobalStyleModal } from './ComponentsStyled/GlobalStyleModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home } from './Pages/Home/Home';
import { Colores } from './config/config_style';



const theme = createTheme({
  palette: {
    primary: {
      main: Colores.color1, // Cambia el color principal
    },
    secondary: {
      main: Colores.color2, // Cambia el color secundario
    },

  },
});

function App() {
  const {login} = useStore_sesion()
  useEffect(() => {
    const data_sesion = get_Store_Sesion()
    if (data_sesion) {
      console.log("en memoria",data_sesion)
      login(data_sesion.token,data_sesion.usuario)
    }
  }, [])

  return (
    <div style={{height:"100%",width:"100%"}}>
      <GlobalStyle/>
      <GlobalStyle_Form/>
      <GlobalStyleModal/>
      {/* <NativeBaseProvider theme={themeNativeBas}> */}
        <ThemeProvider theme={theme}>
          <App_Router/>
        </ThemeProvider>
      {/* </NativeBaseProvider> */}
        {/* <PruebaDocuemento/> */}
      {/* <Formulario/> */}
      {/* <Login /> */}
       {/* <h1>Crear administrador</h1>
       <Input />
       <input/> */}
    </div>
  )
}

export default App
