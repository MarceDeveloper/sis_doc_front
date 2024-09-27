import { create } from 'zustand'
import { combine, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type Store = {
    loading: {
        loading_state: boolean,
        start_loading: () => void
        stop_loading: () => void
    },
    
}

export const use_Example_Page_Store = create<Store>()(
    devtools(
        immer(
            (set) => ({
                loading: {
                    loading_state: false,
                    start_loading: () => set((state) => { state.loading.loading_state = true }),
                    stop_loading:  () => set((state) => { state.loading.loading_state = true }),

                },


            })
        )

    )
)