import { AxiosResponse } from "axios"
import { I_Sesion } from "../Model/I_Sesion"
import { get_Store_Sesion, set_Store_Sesion } from "../localStorage/Store_Sesion"
// import { get_Store_Sesion, set_Store_Sesion } from "../localStorage/Store_Sesion"

export const verify_refres_token =(res:AxiosResponse<any, any>)=>{
    if(res.headers["auth-token-refresh"]){
        const new_token = res.headers["auth-token-refresh"]
        const data_sesion = get_Store_Sesion()
        if (data_sesion) {
            const new_Sesion:I_Sesion = {
                // data:data_sesion?.data,
                usuario:data_sesion?.usuario,
                token:new_token
            }
            set_Store_Sesion(new_Sesion)
            
        }
    
    }
}