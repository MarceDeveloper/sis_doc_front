



import { api_base_url } from '../config/config_api';
import { DTO_reporte_formato_1 } from './DTO_Seguimiento/DTO_formato_1';
import { DTO_reporte_formato_2 } from './DTO_Seguimiento/DTO_format_2';
import { DTO_reporte_formato_3 } from './DTO_Seguimiento/DTO_format_3';
import { DTO_reporte_formato_6 } from './DTO_Seguimiento/DTO_format_6';
import { axios_ } from '../axios/_axios';

const API_URL = `${api_base_url}api/seguimiento_informes`;

export const getReporte = async (informeId: number) => {
  const response = await axios_.get(`${API_URL}/reporte1/${informeId}`);
  return response.data;
};


export const service_reporte_seguimiento_informes = {
  async get_formato_1(id_informe: number): Promise<DTO_reporte_formato_1> {
    try {
      const response = await axios_.get(`${API_URL}/reporte_1/${id_informe}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  async get_formato_2(id_informe: number): Promise<DTO_reporte_formato_2> {
    try {
      const response = await axios_.get(`${API_URL}/reporte_2/${id_informe}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },


  // async get_formato_3(year?: string): Promise<DTO_reporte_formato_3[]> {
  //   try {
  //     const url = year ? `${API_URL}/reporte_3/${year}` : `${API_URL}/reporte_3`;

  //     const response = await axios.get(url);

  //     return response.data.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // },


  get_formato_3: async (yearStart: string, yearEnd: string, informe_tipo: string) => {
    try {
      const response = await axios_.get(`${API_URL}/reporte_3/by_range_years/${yearStart}/${yearEnd}/${informe_tipo}`);
      // const response = await axios.get(`/api/informe_reporte_formato_3/by_range_years/${yearStart}/${yearEnd}/${informe_tipo}`);
      // const response = await axios.get(`${API_URL}/reporte_3`);

      return response.data.data;
    } catch (error) {
      console.log(error)
      throw error
    }
  },

  get_reporte_6: async ():Promise<DTO_reporte_formato_6> => {
    try {
      const response = await axios_.get(`${API_URL}/reporte_6`);

      return response.data.data;
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  get_reporte_7: async () => {
    try {
      const response = await axios_.get(`${API_URL}/reporte_7`);

      return response.data.data;
    } catch (error) {
      console.log(error)
      throw error
    }
  },



};
