import { axios_ } from '../axios/_axios';
import { api_base_url } from '../config/config_api';
// import { api_base_url } from './config';

const API_URL = `${api_base_url}api/recomendacion`;

export const service_recomendaciones = {
  async getAllI() {
    try {
      const response = await axios_.get(`${API_URL}/lista`);
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

