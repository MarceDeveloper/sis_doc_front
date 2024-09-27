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
    secretarias_with_reparticiones :{
        lst:any[]
        set_lst:(lst:any[])=>void
    },
  
}

export const use_Page_Designar_Reparticion_Usuario_Sotore = create<NewStore>()(
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
                secretarias_with_reparticiones:{
                    lst:[],
                    
                    set_lst: (lst) => set(
                        (state) => {
                            state.secretarias_with_reparticiones.lst = lst
                        }
                    ),
                   

                    
                },
             


            })
         
        )
    )

)