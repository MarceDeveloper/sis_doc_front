import { create, createStore, SetState } from 'zustand';
import { Usuario } from '../Model/Usuario';
import { delete_Store_Sesion, set_Store_Sesion } from '../localStorage/Store_Sesion';

type AuthState = {
  isAuthenticated: boolean;
  token:string | null
  usuario:Usuario | null
  login: (token:string,usuario:Usuario) => void;
  logout: () => void;
};

// const useAuth = create<AuthState>((set) => ({
export const useStore_sesion = create<AuthState>((set) => ({
  isAuthenticated: false,
  token : null,
  usuario:null,
  login: (token:string, usuario:Usuario) => {
    set_Store_Sesion({
      token:token,
      usuario:usuario
    })
    set({ 
      isAuthenticated: true,
      token:token,
      usuario:usuario
    })
  },
  logout: () => {
    delete_Store_Sesion()
    set({ 
      isAuthenticated: false,
      token:null,
      usuario:null
    })
  },
}));
