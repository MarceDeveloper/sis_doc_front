import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { axios_ } from '../../../axios/_axios';

export interface Usuario {
  id_usuario: number;
  usuario: string;
  nombre: string;
  contrasena:string
  estado: string;
  id_reparticion:number

}

export interface Form_Usuario {
  id_usuario: number;
  usuario: string;
  nombre: string;
  contrasena:string
  id_reparticion:number
}

export const use_usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    

    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      setLoading(true);
      const response = await axios_.get('/api/usuarios'); // Reemplaza '/api/usuarios' con la ruta correcta de tu API
      setUsuarios(response.data?.data);
      setLoading(false);
    } catch (error) {
      setError('Error al obtener los usuarios');
      setLoading(false);
    }
  };

  const createUser = async (usuario: Form_Usuario) => {
    try {
      const response = await axios_.post('/api/usuarios', usuario); // Reemplaza '/api/usuarios' con la ruta correcta de tu API
      // setUsuarios((prevUsuarios) => [...prevUsuarios, response.data]);
      fetchUsuarios()
      Swal.fire('Éxito', 'Usuario creado exitosamente', 'success');
    } catch (error) {
      setError('Error al crear el usuario');
      Swal.fire('Error', 'Hubo un error al crear el usuario', 'error');
    }
  };

  const updateUser = async (id: number, usuario: Form_Usuario) => {
    try {
      await axios_.put(`/api/usuarios/${id}`, usuario); // Reemplaza '/api/usuarios' con la ruta correcta de tu API
      fetchUsuarios()
      // setUsuarios((prevUsuarios) =>
      //   prevUsuarios.map((u) => (u.id_usuario === id ? usuario : u))
      // );
      Swal.fire('Éxito', 'Usuario actualizado exitosamente', 'success');
    } catch (error) {
      setError('Error al actualizar el usuario');
      Swal.fire('Error', 'Hubo un error al actualizar el usuario', 'error');
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios_.delete(`/api/usuarios/${id}`); // Reemplaza '/api/usuarios' con la ruta correcta de tu API
      // setUsuarios((prevUsuarios) =>
      //   prevUsuarios.filter((u) => u.id_usuario !== id)
      // );
      fetchUsuarios()

      Swal.fire('Éxito', 'Usuario eliminado exitosamente', 'success');
    } catch (error) {
      setError('Error al eliminar el usuario');
      Swal.fire('Error', 'Hubo un error al eliminar el usuario', 'error');
    }
  };

  return {
    usuarios,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
  };
};

