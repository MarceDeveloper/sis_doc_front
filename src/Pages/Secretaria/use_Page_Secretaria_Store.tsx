import { create } from 'zustand'
import { combine, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { service_reparticion } from '../../api/service_reparticion'
import { service_secretaria } from '../../api/service_secretaria'
import { Await } from 'react-router-dom'
import { ReactSwal } from '../../utils'
import { Error_Sawall } from '../../utils/Error_Swall_Axios'
import { Axios_Error_Api } from '../../utils/Type_Axios_Error'



type NewStore = {
    loading:{
        loading_state:boolean,
        stop_loading:()=>void
        start_loading:()=>void
    },
    modal:{
        is_visible:boolean
        cloce_modal:()=>void
        open_modal:()=>void
    },
    lst_secretarias_with_reparticiones :{
        lst:any[]
        set_lst:(lst:any[])=>void
    },
    reparticiones:{
        lst:any[]
        set_lst:(lst:any[])=>void
        reparticion_update:null | any
        set_update_reparticion : (reparticion:any)=>void,
        crete_reparticion:(id_unidad_padre:number,nombre:string)=>Promise<void>

    }
}

export const use_Page_Secretari_Store = create<NewStore>()(
    devtools(
        immer(
            (set,get) => ({
                loading: {
                    loading_state: false,

                    start_loading: () => set(
                        (state) => {
                            state.loading.loading_state = true
                        }
                    ),
                    stop_loading: () => set(
                        (state) => {
                            state.loading.loading_state = false
                        }
                    ),
                },
                modal: {
                    is_visible: false,

                    open_modal: () => set(
                        (state) => {
                            state.modal.is_visible = true
                        }
                    ),
                    cloce_modal: () => set(
                        (state) => {
                            state.modal.is_visible = false
                        }
                    ),
                },
                lst_secretarias_with_reparticiones:{
                    lst:[],
                    
                    set_lst: (lst) => set(
                        (state) => {
                            state.lst_secretarias_with_reparticiones.lst = lst
                        }
                    ),
                   
                   
                    
                },
                reparticiones:{
                    lst:[],
                    reparticion_update:null,
                    set_lst:(lst)=>{
                        set(
                            (state) => {
                                state.reparticiones.lst = lst
                            }
                        )
                    },
                    set_update_reparticion:(reparticion)=>{
                        set(
                            (state) => {
                                state.reparticiones.reparticion_update = reparticion
                            }
                        )

                    },
                 
                    crete_reparticion:async (id_unidad_padre,nombre) => {
                    
                        try {
                            get().loading.start_loading()
                           await service_reparticion.create(id_unidad_padre,nombre)
                           const lst = await service_secretaria.getAllI_secretarias_with_reparticiones()
                            ReactSwal.fire({icon:"success",title:"accion realizada con exito"})
                            set(
                                (state) => {
                                    state.lst_secretarias_with_reparticiones.lst = lst
                                }
                            )
                            get().modal.cloce_modal()
                            
                        } catch (error) {
                            Error_Sawall(error as Axios_Error_Api)
                            throw error;
                        }
                    }
                }


            })
         
        )
    )

)