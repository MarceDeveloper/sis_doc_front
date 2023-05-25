import React from 'react';
import { create, createStore, SetState } from 'zustand';
import {Usuario} from '../Model/Usuario'
import { Informe } from '../Model/Informe';

interface Store_Ui {
  drawer_visible: boolean ;
  toogle_Drawer: () => void;
}

export const useStore_Ui = create<Store_Ui>((set) => ({
    drawer_visible:false,

    toogle_Drawer:()=>{
        set((state)=>({
            drawer_visible:!state.drawer_visible
        }))
    }
//   name: '',
//   setName: (name) => set({ name }),
}),);