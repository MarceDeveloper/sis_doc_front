import { axios_ } from '../axios/_axios';
import { api_base_url } from '../config/config_api';

const API_URL = `${api_base_url}api/usuarios`;

export const service_usuario = {
  async getAll() {
    try {
      const response = await axios_.get(API_URL);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async getById(id: number) {
    try {
      const response = await axios_.get(`${API_URL}/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async create(usuario: string, contrasena: string, nombre: string, id_reparticion: number, puede_ver_documentos: string) {
    try {
      const response = await axios_.post(API_URL, { usuario, contrasena, nombre, id_reparticion, puede_ver_documentos });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async update(id: number, usuario: string, contrasena: string, nombre: string, id_reparticion: number, puede_ver_documentos: string) {
    try {
      const response = await axios_.put(`${API_URL}/${id}`, { usuario, contrasena, nombre, id_reparticion, puede_ver_documentos });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async delete(id: number) {
    try {
      const response = await axios_.delete(`${API_URL}/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },


  async get_user_with_reparticiones(id_usuario:number) {
    try {
      const response = await axios_.get(API_URL+`/user_with_reparticiones/${id_usuario}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  async designar_reparticion_usuario(id_usuario:number,id_reparticion:number) {
    try {
      const response = await axios_.post(API_URL+`/asignar_reparticion`,{
        id_usuario,id_reparticion
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async quitar_reparticion_usuario(id_reparticion_usuario:number) {
    try {
      const response = await axios_.post(API_URL+`/quitar_reparticion`,{
        id_reparticion_usuario
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async usuario_reparticiones(id_usuario:number) {
    try {
      const response = await axios_.get(`${API_URL}/usuario_reparticiones/${id_usuario}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },


  
};
