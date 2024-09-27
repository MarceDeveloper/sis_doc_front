import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AssessmentIcon from '@mui/icons-material/Assessment'; // Importa el ícono que desees
import { Navbar } from '../../../components/Navbar/Navbar';


interface ReportOption {
    id: number;
    name: string;
    path: string;
}

const lst_reportes : ReportOption[] = [
    // {
    //     id:1,
    //     name:"Reporte 1",
    //     path:"/informe_reporte_1"
    // },
    // {
    //     id:2,
    //     name:"Reporte 2",
    //     path:"/informe_reporte_2"
    // },
    {
        id:3,
        name:"Reporte 3",
        path:"/informe_reporte_3"
    },
    // {
    //     id:4,
    //     name:"Reporte 4",
    //     path:"/informe_reporte_4"
    // },
    // {
    //     id:5,
    //     name:"Reporte 5",
    //     path:"/informe_reporte_5"
    // },
    {
        id:6,
        name:"Reporte 6",
        path:"/informe_reporte_6"
    },
    {
        id:6,
        name:"Reporte 7",
        path:"/informe_reporte_7"
    }
]
export const List_Reportes_Informes = () => {
    return (
        <>
        <Navbar/>
        <List>
            {lst_reportes.map((report) => (
                <Link key={report.id} component={RouterLink} to={report.path} color="inherit" underline="none">
                    <ListItem button>
                        <ListItemIcon>
                            <AssessmentIcon /> 
                        </ListItemIcon>
                        <ListItemText primary={report.name} />
                    </ListItem>
                </Link>
            ))}
        </List>
        </>
    )
}
