import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ReactSwal } from '../../utils/ReactSwall/ReactSwall';

interface InformeFormData_Update {
    titulo: string;
    numeroInforme: string;
}

interface Iprops{
    data:{
        titulo:string,
        numeroInforme: string;
    }
}

const cerrar = ()=>{
    ReactSwal.close()
}


export const Swall_Update_Informe = async () =>{
    await ReactSwal.fire({
        html:(
            <div>
                <h1>modificar</h1>
                <button onClick={()=>{cerrar()}}>modificar</button>
            </div>
        )
    })
    return "me lleva la fregada"
}
