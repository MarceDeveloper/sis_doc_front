import { Box, Fab, Grid, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Navbar } from '../../../components/Navbar/Navbar'
import { useForm } from 'react-hook-form';
import { CrearInformePage } from '../Crear_Informe/Crear_Informe_Page';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { axios_ } from '../../../axios/_axios';
import { api_service } from '../../../api/api_service';
import { DTO_lst_informes } from '../../../api/DTO_Seguimiento/DTO_lst_informes';

import { Table, TableBody, Button, MenuItem, TableCell, TableContainer, Menu, TableHead, TableRow, Paper, Tooltip, IconButton } from '@mui/material';
import moment from 'moment-timezone';
import { api_service_informe } from '../../../api/service_informe';
import { Use_Modal } from '../../../hooks/Modal/Use_Modal';
import { CrearInformeForm } from './Form_Create_Informe';

import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Adm_Responsables_Informe } from './Adm_Responsables_Informe';
import { Adm_Descripcion } from './Adm_Descripcion';





type Informe = DTO_lst_informes['data'][0];


export const Seguimiento_Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [select_informe, setselect_informe] = useState<Informe | null>(null)

  const {
    Custom_Modal: Modal_Create,
    is_visible: is_visible_modal_create,
    set_Is_visible: set_is_visible_modal_create
  } = Use_Modal()
  const {
    Custom_Modal: Modal_Adm_Responsables,
    is_visible: is_visible_modal_adm_responsables,
    set_Is_visible: set_is_visible_modal_adm_responsables
  } = Use_Modal()

  const {
    Custom_Modal: Modal_Adm_Descripcion,
    is_visible: is_visible_modal_adm_descripcion,
    set_Is_visible: set_is_visible_modal_adm_descripcion
  } = Use_Modal()


  const navi = useNavigate()
  const [lst_informes, setLst_informes] = useState<Informe[]>([])

  useEffect(() => {
    get_informes()
  }, [])


  const get_informes = async () => {
    const lst = await api_service_informe.lst()
    setLst_informes(lst)
    console.log(lst)
  }

  const handleClickMenuInforme = (event: any) => {
    console.log(event)
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenuInforme = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
      {/* <CrearInformePage/> */}
      <Navbar />
      <Fab color='primary' aria-label="Add" onClick={() => { }} style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1 }}>
        <AiOutlinePlus size={50} onClick={() => {
          // navi("/crear_informe")
          set_is_visible_modal_create(true)
        }} />
      </Fab>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título aaaa</TableCell>
              <TableCell>Fecha de Recepción</TableCell>
              <TableCell>Informe de</TableCell>
              <TableCell>Número de Informe</TableCell>
              <TableCell>Tipo de Informe</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
              <TableCell>Formatos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lst_informes.map((informe) => (
              <TableRow key={informe.id}>
                <TableCell>{informe.id}</TableCell>
                <TableCell>{informe.titulo}</TableCell>
                <TableCell>{moment(informe.fecha_de_recepcion).utc().format("DD-MM-YYYY")}</TableCell>
                <TableCell>{informe.informe_de}</TableCell>
                <TableCell>{informe.numero_informe}</TableCell>
                <TableCell>{informe.tipo_de_informe}</TableCell>
                <TableCell>{informe.estado}</TableCell>

                <TableCell>
                  <div>
                    <Tooltip title="Acciones del Informe">
                      <IconButton onClick={handleClickMenuInforme}>
                        <MoreVertIcon />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenuInforme}
                    >
                      <MenuItem onClick={() => {
                        handleCloseMenuInforme()
                        setselect_informe(informe)
                        set_is_visible_modal_adm_responsables(true)
                      }}>
                        <EditIcon fontSize="small" />
                        Adm Responsables
                      </MenuItem>
                      <MenuItem onClick={() => {
                        handleCloseMenuInforme()
                        setselect_informe(informe)
                        set_is_visible_modal_adm_descripcion(true)
                      }}>
                        <DeleteIcon fontSize="small" />
                        Adm Descripcion
                      </MenuItem>
                      <MenuItem onClick={() => { }}>
                        <EditIcon fontSize="small" />
                        Editar Informe
                      </MenuItem>
                      <MenuItem onClick={() => { }}>
                        <DeleteIcon fontSize="small" />
                        Eliminar Informe
                      </MenuItem>
                    </Menu>

                  
                  </div>
                  {/* <Button variant='contained' sx={{ marginTop: 2 }} onClick={() => { navi("/detalle_informe", { state: { informe: informe } }) }}>Ver Detalle</Button>
                  <Button variant='contained' sx={{ marginTop: 2 }} onClick={() => { navi("/PDF_informe_formato_1", { state: { informe: informe } }) }}>Formato 1</Button>
                  <Button variant='contained' sx={{ marginTop: 2 }} onClick={() => { navi("/PDF_informe_formato_2", { state: { informe: informe } }) }}>Formato 2</Button> */}

                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal_Create handleCloseModal={() => { set_is_visible_modal_create(false) }}>
        <CrearInformeForm onCreate={() => { console.log("creado") }} />
      </Modal_Create>

      <Modal_Adm_Responsables handleCloseModal={() => { set_is_visible_modal_adm_responsables(false) }}>
        <Adm_Responsables_Informe id_informe={select_informe ? select_informe.id : 0} />
      </Modal_Adm_Responsables>
      <Modal_Adm_Descripcion handleCloseModal={() => { set_is_visible_modal_adm_descripcion(false) }}>
        <Adm_Descripcion onCreate={() => { }} />
      </Modal_Adm_Descripcion>
    </Box>
  )
}
