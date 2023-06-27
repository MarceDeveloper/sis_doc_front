import create from 'zustand';
import { DTO_documento } from '../../Model/DTO/DTO_Documento';
import { axios_ } from '../../axios/_axios';



type Store_Documento = {
  documentos: DTO_documento[];
  set_documentos:(documentos:DTO_documento[])=>void
  get_documentos: () => Promise<DTO_documento>;
//   agregarDocumento: (form_data:any) => Promise<void>;
//   eliminarDocumento: (id: number) => Promise<void>;
};

export const useStore_Documentos = create<Store_Documento>((set) => ({
  documentos: [],
  get_documentos: async () => {
    const response = await axios_('/api/documentos');
    return response?.data 
  },
  set_documentos(documentos) {
      set({documentos:documentos})
  },

}));
