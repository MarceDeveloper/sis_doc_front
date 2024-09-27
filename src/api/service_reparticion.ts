
import { axios_ } from '../axios/_axios';
import { api_base_url } from '../config/config_api';
// import { api_base_url } from './config';

const API_URL = `${api_base_url}api/reparticiones`;

export const service_reparticion = {
  async getAllI() {
    try {
      const response = await axios_.get(API_URL);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  async getAllI_only_reparticiones() {
    try {
      const response = await axios_.get(API_URL+"/only_reparticiones");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  async getAllI_reparticiones_with_secretaria() {
    try {
      const response = await axios_.get(API_URL+"/reparticiones_with_secretaria");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  

  async create(id_unidad_padre: number, nombre: string) {
    try {
      const response = await axios_.post(API_URL, { id_unidad_padre, nombre });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async update(id: number, id_unidad_padre: number, nombre: string) {
    try {
      const response = await axios_.put(`${API_URL}/${id}`, { id_unidad_padre, nombre });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async delete(id: number) {
    try {
      const response = await axios_.delete(`${API_URL}/${id}`);
      console.log({response_delete:response})
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async findById(id: number) {
    try {
      const response = await axios_.get(`${API_URL}/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

