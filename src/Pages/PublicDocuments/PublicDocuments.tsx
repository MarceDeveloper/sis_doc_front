import { Grid } from '@mui/material'
import React from 'react'
import { Table_Documento } from '../PruebaDocumento/Table_Documento'
import { Filter_Documentos } from '../PruebaDocumento/Filter_Documentos'

export const PublicDocuments = () => {
  return (
    <Grid>
        <Filter_Documentos lst_documentos={[]} onFilter={()=>{}} />
    </Grid>
  )
}
