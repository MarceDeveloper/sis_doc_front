import React from 'react'

export const Modal_Crear_Iinforme = () => {
  const CrearInforme = ()=>{
    const new_informe = "nuevo informe"
    console.log(new_informe)
  }
  return (
    <div>
        <button onClick={()=>{CrearInforme()}} >Crate new Informe</button>
        <h1>Modal_Crear_Iinforme</h1>
    </div>
  )
}
