import React, { useEffect, useState } from 'react'
import { Container, Box, Paper, Grid, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import { axios_ } from '../../../axios/_axios';

import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

interface Iprops {
    id_informe: number
}

export const Adm_Responsables_Informe = ({ id_informe }: Iprops) => {
    const [lst_respomsables, setlst_respomsables] = useState<any[]>([])
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        get_responsables_habilitados()
    }, [])

    const get_responsables_habilitados = async () => {
        if (id_informe != 0) {
            const res = await axios_.get(`/api/responsables/lst_habilita_para_informe/${id_informe}`)
            setlst_respomsables(res.data?.data)
            console.log(res.data?.data)
        }
    }

    const filteredResponsables = lst_respomsables.filter((responsable) =>
        `${responsable.nombre} ${responsable.cargo}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box height={"100vh"}>
            <h1>adm responsables {lst_respomsables.length}</h1>
            <TextField
                label="Buscar Responsable"
                variant="outlined"
                fullWidth
            // onChange={handleSearch}
            />
            <List>
                {filteredResponsables.map((responsable) => (
                    <ListItem key={responsable.id}>
                        <ListItemText primary={responsable.nombre +" "+ responsable.cargo}  />
                        {/* <ListItemSecondaryAction>
                            {filteredResponsables.some((r: any) => r.id === responsable.id) ? (
                                <IconButton
                                    // onClick={() => onQuitarResponsable(responsable)}
                                    color="secondary"
                                >
                                    <RemoveCircle />
                                </IconButton>
                            ) : (
                                <IconButton
                                    // onClick={() => onAgregarResponsable(responsable)}
                                    color="primary"
                                >
                                    <AddCircle />
                                </IconButton>
                            )}
                        </ListItemSecondaryAction> */}
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
