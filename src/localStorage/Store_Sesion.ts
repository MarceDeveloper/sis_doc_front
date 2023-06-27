import { I_Sesion } from "../Model/I_Sesion"
import { name_local_storage } from "../config/config_api"

export const set_Store_Sesion = (sesion:I_Sesion)=>{
    // console.log("guardare", sesion)
    localStorage.setItem(name_local_storage,JSON.stringify(sesion) )
}

export const get_Store_Sesion = ()=>{
    const stringData_sesion = localStorage.getItem(name_local_storage )
    if (stringData_sesion) {
        const data_sesion :I_Sesion = JSON.parse(stringData_sesion)
        return data_sesion
    }
}
export const delete_Store_Sesion = ()=>{
    localStorage.removeItem(name_local_storage )
 
}