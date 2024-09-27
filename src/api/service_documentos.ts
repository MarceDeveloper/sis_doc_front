import { axios_ } from '../axios/_axios';
import { api_base_url } from '../config/config_api';
// import { api_base_url } from './config';

const API_URL = `${api_base_url}api/documentos`;

export const service_docuementos = {
  async get_documentos_by_ids_reparticiones(ids_reparticiones:number[]) {
    try {
      const response = await axios_.post(`${API_URL}/by_ids_reparticion`,{ids_reparticiones});
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  
};

