import React, { useState, useEffect } from 'react'
import { Box, Container, Paper, Grid, TextField, Button, Typography, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem, ListItemText, Checkbox as MuiCheckbox, ListItemIcon, FormControl as MuiFormControl, FormLabel, RadioGroup, Radio, Autocomplete, IconButton } from '@mui/material';
import { Navbar } from '../../../../components/Navbar/Navbar';
import { use_reparticiones } from '../../../../hooks/hooks_api/reparticion/use_reparticiones_prisma';
import { SubmitHandler, useForm } from 'react-hook-form';
import { axios_ } from '../../../../axios/_axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { service_secretaria } from '../../../../api/service_secretaria';


interface Responsable {
    cargo: string
    nombre: string
    id_reparticion: string

}

export const Crear_Responsables = () => {
    const navi = useNavigate()
    // const [id_secre_select, set_id_secre_select] = useState(0)
    // const { secretarias_reparticiones } = use_reparticiones()
    const [secre_with_reparticiones, set_secre_with_reparticiones] = useState<any[]>([])
    const [secre_select, set_secre_select] = useState<any>()



    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Responsable>()


    const onSubmit: SubmitHandler<Responsable> = async (data) => {
        try {
            const result = await axios_.post(`/api/responsables/crear`, { data: data })
            await Swal.fire({ title: "OK", icon: "success", text: "creado con exito" })
            navi(-1)
        } catch (error) {
            Swal.fire({ title: "Error", icon: "error", text: "no se pudo crear el responsable" })
        }
        console.log(data)
    }
    useEffect(() => {
        onInit()

    }, [])

    const onInit = async ()=>{
        const res = await service_secretaria.getAllI_secretarias_with_reparticiones()
        console.log({secres:res})
        set_secre_with_reparticiones(res)
    }




    return (
        <Box>
            <Navbar />
            <h1>Crear Responsable</h1>
            <Container maxWidth="xl">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    {...register("nombre", { required: true })}
                                    onChange={(e) => { setValue("nombre", e.target.value) }}
                                    size='small'
                                    label="Nombre"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    {...register("cargo", { required: true })}
                                    onChange={(e) => { setValue("cargo", e.target.value) }}
                                    size='small'
                                    label="Cargo"
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined" size="small" required>
                                    <InputLabel id="secretaria-label">Secretaria</InputLabel>
                                    <Select
                                        required
                                        labelId="secretaria-label"
                                        label="Secretaria"
                                        onChange={(e)=>{
                                            const secre: any[] = secre_with_reparticiones.find((item)=> item.secretaria.id_reparticion == Number(e.target.value))
                                            set_secre_select(secre)
                                        }}
                                        // onChange={(e) => { set_id_secre_select(Number(e.target.value)) }}
                                        // value={secretarias_reparticiones?.find((x) => { x.secretaria.id_reparticion == id_secre_select })}

                                    >
                                        {
                                            secre_with_reparticiones?.map((secre:any,index) => <MenuItem key={secre.secretaria.nombre} value={secre.secretaria.id_reparticion}>{secre.secretaria.nombre}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                                        
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined" size="small" required>
                                    <InputLabel id="secretaria-label">Reparticion</InputLabel>
                                    <Select
                                        required
                                        labelId="secretaria-label"
                                        label="Reparticiones"
                                        // onChange={()=>{}}
                                        {...register("id_reparticion", { required: true })}


                                    >
                                        {
                                            secre_select?.lst_reparticiones.map((item:any, index:number) => <MenuItem key={item.reparticion.id_reparticion} value={item.reparticion.id_reparticion}>{item.reparticion.nombre}</MenuItem>)
                                        }

                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <Button type='submit' variant="contained" color="primary" fullWidth>
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>

    );
}
