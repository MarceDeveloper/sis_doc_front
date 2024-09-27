import React, { useEffect, useState } from 'react';
import { Button, Modal, Fab } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai';

import { TfiWrite } from 'react-icons/tfi'
import { GrAddCircle } from 'react-icons/gr'
import { ScreenLoading } from '../../../../components/ScreenLoading/ScreenLoading';
import { Navbar } from '../../../../components/Navbar/Navbar';
import { validate_map } from '../../../../utils/validate_map';
import { useNavigate } from 'react-router-dom';
import { axios_ } from '../../../../axios/_axios';
import { api_service_responsable } from '../../../../api/service_responsable';


interface Responsable {
    id: number
    nombre: string
    cargo: string
    id_reparticion:number
}

export const Responsables_Page: React.FC = () => {
    const navi = useNavigate()
    const [open, setOpen] = useState(false);
    const [lst_responsables, setlst_responsables] = useState<Responsable[]>([])

    useEffect(() => {
        get_responsables()
        
    }, [])
    

    const get_responsables = async ()=>{
        // const lst = await axios_.get("/api/responsables/lst")
        const lst = await api_service_responsable.lst()
        setlst_responsables(lst)
    }










    return (
        <div>
            <ScreenLoading is_visible={false} />
            <Navbar />

            <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16 }}>
                <AiOutlinePlus size={50} onClick={() => { navi("/crear_responsable")}} />
            </Fab>
            <TableContainer sx={{ maxWidth: ["100%", "90%"], mx: "auto", mt: 2 }}>
                <Table className='customTable' size='small'>
                    <TableHead>
                        <TableRow className='customTableRowHead'>
                            <TableCell className='cell_head'>Nombre</TableCell>
                            <TableCell className='cell_head'>Cargo</TableCell>
                            {/* <TableCell className='cell_head'>Acciones</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {validate_map(lst_responsables).map((responsable) => (
                            <TableRow key={responsable?.id}>
                                <TableCell className='customTableRowBody'>{responsable?.nombre}</TableCell>
                                <TableCell className='customTableRowBody'>{responsable?.cargo}</TableCell>

                                {/* <TableCell align='center' className='customTableRowBody'>

                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




        </div>
    );
};


