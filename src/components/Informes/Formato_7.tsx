import React, { useEffect } from 'react'
import { service_reporte_seguimiento_informes } from '../../api/service_reportes_seguimiento_informes'

export const Reporte_7 = () => {
    useEffect(() => {
        Oninti()
        
      return () => {
        
      }
    }, [])
    
    const Oninti = async ()=>{
        const res = await service_reporte_seguimiento_informes.get_reporte_7()
        console.log({res})
    }

    return (
        <div>reporte_7</div>
    )
}
