// // import { Route, Navigate } from 'react-router-dom';
// // import { useStore_sesion } from '../store/store_sesion';

// import React, {useEffect,useState} from "react";
// import { Navigate, Route } from "react-router-dom";


// // type PrivateRouteProps = {
// //   component: React.ComponentType<any>;
// //   path: string;
// // };

// // export const PrivateRoute: React.FC<PrivateRouteProps> = ({
// //   component: Component,
// //   path,
// //   ...rest
// // }) => {

// //   const isAuthenticated = useStore_sesion((state) => state.isAuthenticated);

// //   return (
// //     <Route
// //       path={path}
// //       {...rest}
// //       render={(props:any) =>
// //         isAuthenticated ? (
// //           <Component {...props} />
// //         ) : (
// //           <Navigate to="/login" />
// //         )
// //       }
// //     />
// //   );
// // };
// interface Iprops{
//   user:boolean
//   redirectPath?:string
//   Element:JSX.Element
// }
// export const PrivateRoute = ({
//   redirectPath = '/login',
//   Element,
//   user
// }:Iprops) => {
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     // Simulación de verificación de existencia de usuario (puedes reemplazarla con tu lógica real)
//     if (!user) {
//       setTimeout(() => {
//         // const userExists = checkUserExists(); // Función que verifica si existe el usuario
//         // setUserExists(userExists);
//         setLoading(false);
//       }, 2000);
//     }
//   }, []);

//   // if (loading) {
//   //   return <h1>Loading</h1>
//   // }

//   if (!user) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return Element;
// };




import React from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useStore_sesion } from '../store/store_sesion';

interface Iprops {
  children: React.ReactNode
  idsPermitidos?: number[];
}

export const Private_Route = ({ children, idsPermitidos }: Iprops) => {
  const navigate = useNavigate();
  const usuario = useStore_sesion((store) => store.usuario);

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  if (idsPermitidos && !idsPermitidos.includes(usuario.id_usuario)) {
    // return <Navigate to="/" replace />;
    return <>{children}</>;
  }

  return <>{children}</>;
};