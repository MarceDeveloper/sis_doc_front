// import axios, { AxiosError, AxiosHeaders } from 'axios'
// // import { delete_Store_Sesion, get_Store_Sesion, set_Store_Sesion } from '../localStorage/Store_Sesion';
// import { swal } from '../utils/alert_swal/swal';
// // import { verify_refres_token } from './verify_refres_token';
// import { api_base_url } from '../config/config_api';


// const lst_not_required_token = [
//     `${api_base_url}/Login`,
//     `${api_base_url}/ruta_no_nececita_toekn`
// ]


// //rutas sin token
// export const axios_ = axios.create({
//     baseURL:api_base_url,
//     // headers:{
//     //     'Content-type': 'application/json',
//     // }
// })

// axios_.interceptors.response.use((res)=>{
    
//     // verify_refres_token(res)
//     console.log("entra por bien")
//     return res
// },(err:AxiosError)=>{
//     ("entro error")
//     (err.response?.status)
//     swal.fire({icon:"error",title:"error",titleText:"ha ocurrido un error"})
//     switch (err.response?.status) {
//         case 401:
//             alert("accion no completada su seion a expirado sera redirigido a el inico de sesion")
//             // delete_Store_Sesion()
//             window.location.replace("/")
//             return err
//             break;
//         case 403:
//             swal.fire({icon:"error",title:"error"})
//             break
//         default:
//             ("defauld")
//             break;
//     }
//     return Promise.reject(err)
//     return err
// })

// axios_.interceptors.request.use((req)=>{
//     if (!req.headers) {
//         // req.headers = {};
//     }
//     if (!req.baseURL) {
//         return req
//     }
//     // url no nececita token
//     if (lst_not_required_token.indexOf(req.baseURL+req.url) != -1) {
        
//         return req
//     }

//     //agregar token a la peticion
//     // const data_sesion = get_Store_Sesion()
//     // const token_storage = data_sesion?.token
//     // if (token_storage) {
//     //     req.headers.Authorization= token_storage
//     // }
    
//     return req
// })


import axios, { AxiosError } from 'axios'
import { api_base_url } from '../config/config_api';
import { delete_Store_Sesion, get_Store_Sesion, set_Store_Sesion } from '../localStorage/Store_Sesion';
import { swal } from '../utils/alert_swal/swal';
import { verify_refres_token } from './verify_refresh_token';


const lst_not_required_token = [
    `${api_base_url}/Login`,
    // `${api_base_url}${route_names.gestion_secretarias}`
]


//rutas sin token
export const axios_ = axios.create({
    baseURL:api_base_url,
    // headers:{
    //     'Content-type': 'application/json',
    // }
})

axios_.interceptors.response.use((res)=>{
    
    verify_refres_token(res)
    // console.log("entra por bien")
    return res
},(err:AxiosError)=>{
    // console.log("entro error")
    // console.log(err.response?.status)
    // swal.fire({icon:"error",title:"error",titleText:"ha ocurrido un error"})
    switch (err.response?.status) {
        case 401:
            // alert("accion no completada su seion a expirado sera redirigido a el inico de sesion")
            delete_Store_Sesion()
            window.location.replace("/")
            return err
            break;
        case 403:
            swal.fire({icon:"error",title:"error"})
            break
        default:
            console.log("defauld")
            break;
    }
    return Promise.reject(err)
    return err
})

axios_.interceptors.request.use((req)=>{
    if (!req.headers) {
        req.headers = {} as any
    }
    if (!req.baseURL) {
        return req
    }
    // url no nececita token
    if (lst_not_required_token.indexOf(req.baseURL+req.url) != -1) {
        
        return req
    }

    //agregar token a la peticion
    const data_sesion = get_Store_Sesion()
    const token_storage = data_sesion?.token
    if (token_storage) {
        req.headers.Authorization= `Bearer ${token_storage}` 
    }
    
    return req
})



