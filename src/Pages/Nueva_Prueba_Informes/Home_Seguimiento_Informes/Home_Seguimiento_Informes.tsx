import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { MdReport, MdDescription } from 'react-icons/md';
import { Colores } from '../../../config/config_style';
import { Navbar } from '../../../components/Navbar/Navbar';


export const Home_Seguimiento_Informes = () => {
    const navi = useNavigate()
    return (
        
        <Box style={{ minHeight:"100vh"}}>
            <Navbar/>
            <Typography variant="h4" gutterBottom>
                Seguimiento de Informes
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card >
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Reportes
                            </Typography>
                            <MdReport size={40} />
                            <Button
                                component={Link}
                                to="/informes_reportes"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={()=>{navi("/seguimiento_informes")}}
                            >
                                Ver Reportes
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Gestión de Informes
                            </Typography>
                            <MdDescription size={40} />
                            <Button
                                component={Link}
                                to="/seguimiento_informes"
                                variant="contained"
                                color="primary"
                                fullWidth

                            >
                                Gestionar Informes
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
