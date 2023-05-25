import React from 'react';
import { create, createStore, SetState } from 'zustand';
import {Usuario} from '../Model/Usuario'
import { Informe } from '../Model/Informe';

interface Store_App {
  usuario: Usuario | null;
  setUsuario: (usuario: Usuario | null) => void;
  lst_informes: Informe[] | null;
  setlst_informes: (lst_informes: Informe [] | null) => void;
}

const useStore_App = create<Store_App>((set) => ({
    usuario:null,
    setUsuario(usuario) {
        set({usuario})
    },
    lst_informes:[],
    setlst_informes(lst_informes) {
        set({lst_informes:lst_informes})
    },

//   name: '',
//   setName: (name) => set({ name }),
}),);