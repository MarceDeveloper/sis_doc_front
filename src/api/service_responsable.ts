import { axios_ } from "../axios/_axios"

export const api_service_responsable  = {
    lst : async ()=>{
        const res = await axios_.get("/api/responsables/lista")
        return res.data?.data
    },
    create:async () => {
        const res = await axios_.post("/api/responsables/crear")
        return res.data?.data
    } 
}