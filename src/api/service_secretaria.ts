import { api_base_url } from '../config/config_api';
import { axios_ } from '../axios/_axios';
// import { api_base_url } from './config';

const API_URL = `${api_base_url}api/secretarias`;

export const service_secretaria = {
  async getAllI() {
    try {
      const response = await axios_.get(API_URL);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  async getAllI_secretarias_with_reparticiones() {
    try {
      const response = await axios_.get(API_URL+"/secretarias_with_reparticiones");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  

  async create(id_unidad: number, nombre: string) {
    try {
      const response = await axios_.post(API_URL, { id_unidad, nombre });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async update(id: number, id_unidad: number, nombre: string) {
    try {
      const response = await axios_.put(`${API_URL}/${id}`, { id_unidad, nombre });
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

  async findById(id: number) {
    try {
      const response = await axios_.get(`${API_URL}/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

