import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { axios_ } from '../../../axios/_axios';

export interface Reparticion {
    id_reparticion :number
    nombre: string;
    codigo: number;
    id_unidad: number;
    estado: string;
}

export interface Form_Reparticion {
    id_reparticion :number
    nombre: string;
    codigo: number;
    id_unidad: number;
}

export const use_reparticiones_prisma = () => {
  const [reparticiones, setReparticiones] = useState<Reparticion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    

    fetchReparticiones();
  }, []);

  const fetchReparticiones = async () => {
    try {
      setLoading(true);
      const response = await axios_.get('/api/reparticiones'); // Reemplaza '/api/reparticiones' con la ruta correcta de tu API
      setReparticiones(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error al obtener los reparticiones');
      setLoading(false);
    }
  };

  const createReparticion = async (reparticion: Form_Reparticion) => {
    try {
      const response = await axios_.post('/api/reparticiones', reparticion); // Reemplaza '/api/reparticiones' con la ruta correcta de tu API
      // setReparticiones((prevUsuarios) => [...prevUsuarios, response.data]);
      fetchReparticiones()
      Swal.fire('Éxito', 'Reparticion creado exitosamente', 'success');
    } catch (error) {
      setError('Error al crear el reparticion');
      console.log(error)
      Swal.fire('Error', 'Hubo un error al crear el reparticion', 'error');
    }
  };

  const updateReparticion = async (id: number, reparticion: Form_Reparticion) => {
    try {
      await axios_.put(`/api/reparticiones/${id}`, reparticion); // Reemplaza '/api/reparticiones' con la ruta correcta de tu API
      fetchReparticiones()
      // setReparticiones((prevUsuarios) =>
      //   prevUsuarios.map((u) => (u.id_usuario === id ? reparticion : u))
      // );
      Swal.fire('Éxito', 'Reparticion actualizado exitosamente', 'success');
    } catch (error) {
      setError('Error al actualizar el reparticion');
      Swal.fire('Error', 'Hubo un error al actualizar el reparticion', 'error');
    }
  };

  const deleteReparticion = async (id: number) => {
    try {
      await axios_.delete(`/api/reparticiones/${id}`); // Reemplaza '/api/reparticiones' con la ruta correcta de tu API
      // setReparticiones((prevUsuarios) =>
      //   prevUsuarios.filter((u) => u.id_usuario !== id)
      // );
      fetchReparticiones()

      Swal.fire('Éxito', 'Reparticion eliminado exitosamente', 'success');
    } catch (error) {
      setError('Error al eliminar el reparticion');
      Swal.fire('Error', 'Hubo un error al eliminar el reparticion', 'error');
    }
  };

  return {
    reparticiones,
    loading,
    error,
    createReparticion,
    updateReparticion,
    deleteReparticion
  };
};

