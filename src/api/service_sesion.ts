import { axios_ } from '../axios/_axios';
import { api_base_url } from '../config/config_api';

const API_URL = `${api_base_url}api/sesion`;

export const service_sesion = {
  async change_password_by_nick_and_pass(nick:string,old_password:string,new_password:string) {
    try {
      const response = await axios_.post(API_URL+"/change_password_by_pass_and_user",{
        nick,new_password,old_password
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

 



  
};
