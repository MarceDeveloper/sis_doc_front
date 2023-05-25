






import React, { useEffect, useState } from 'react'
import { Box, Center, FormControl, Input, VStack , Text, Pressable, Modal, Button, HStack, Select, CheckIcon} from 'native-base'
import { useForm ,Controller} from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { HiFolderDownload } from 'react-icons/hi';
import { useMediaQuery } from 'native-base';
import {use_documento} from '../../../hooks/hooks_api/documento/use_documento'
import {use_ZiseDevice} from '../../../hooks/use_ZiseDevice'
import {DTO_Documento,DTO_create_Docuemento} from '../../../hooks/hooks_api/documento/DTO_Documento'
import {Navbar} from '../../../components/Navbar/Navbar'
import { saveAs } from 'file-saver';
import moment_time from 'moment-timezone'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material'



import { useNavigate } from 'react-router-dom';
import { axios_ } from '../../../axios/_axios';
import styled from 'styled-components';
import CustomizedTables from '../../../ComponentsStyled/PruebaTable';
import { Checkbox, Grid, Button as ButtonMaterial } from '@mui/material';
import { use_reparticion } from '../../../hooks/hooks_api/reparticion/use_reparticion';
import { DTO_Reparticion } from '../../../hooks/hooks_api/reparticion/DTO_reparticion';
import { DTO_Estado_Documento } from '../../../hooks/hooks_api/estado_documento/DTO_estado_documento';
import { use_estado_documento } from '../../../hooks/hooks_api/estado_documento/use_estado_documento';
import { use_ElementHeight } from '../../../hooks/use_Element_Height';
import { FormartDateForMysql } from '../../../utils/Fechas/FormatDateForMysql';
import Swal from 'sweetalert2';
import { ScreenLoading } from '../../../components/ScreenLoading/ScreenLoading';
import { Colores } from '../../../config/config_style';
import {AiFillDelete} from 'react-icons/ai'
import {TfiWrite} from 'react-icons/tfi'


import { validate_map } from '../../../utils/validate_map';



// const color_colum_documento = "#005e58"
const color_colum_nombre_documento = Colores.color2
const color_colum_documento = Colores.color2


export const Documento_Page = () => {
  
  const {delete_documento} = use_documento()
  const [altura_nav, setaltura_nav] = useState(0)
  const [palabra_search, setpalabra_search] = useState("")
  const [row_touch, setrow_touch] = useState(-1)
  const navi = useNavigate()
  const {getAll_documentos} = use_documento()
  const {getAll_reparticion} = use_reparticion()
  const {getAll_estado_documento} = use_estado_documento()
  const [lst_documento, setLst_documento] = useState<DTO_Documento[]>([])
  const [lst_reparticion, setlst_reparticion] = useState<DTO_Reparticion[]>([])
  const [lst_estado_documento, setlst_estado_documento] = useState<DTO_Estado_Documento[]>([])
  const [todos_los_formatos, settodos_los_formatos] = useState(true)
  const [is_formato_fisico, setis_formato_fisico] = useState(false)
  const [is_formato_digital, setis_formato_digital] = useState(false)
  const [id_reparticion_select, setid_reparticion_select] = useState(-1)
  const [id_estado_select, setId_estado_select] = useState(-1)
  const {isMobile} = use_ZiseDevice()
  const {elementHeight,elementRef} = use_ElementHeight()
  
  const [Is_Loading, setIs_Loading] = useState(true)
 
  useEffect(() => {
   
    

    Promise.all([
      getAll_documentos().then((res)=> setLst_documento(res)),
      getAll_reparticion().then((res)=> setlst_reparticion(res)),
      getAll_estado_documento().then((res)=>setlst_estado_documento(res))

    ])
    .then(()=>setIs_Loading(false))
    .catch((error)=>{
      console.log(error)
      Swal.fire({title:"error al cargar datos"})
      setIs_Loading(false)
    })
    
  }, [])

  const FilterLst = (): DTO_Documento[] =>{
    const cadena = palabra_search.toUpperCase()
    let matchesSearch = true
    let matchesEstadoDocumento = true

    let matches_reparticion = true
    let matches_is_fisico = true
    let matches_is_digital = true
    
   

    if(!Array.isArray(lst_documento)){
      return []
    }
    
    return  lst_documento.filter((doc) => {
      if (cadena.length > 0 ) {
        matchesSearch = doc.nombre_documento.toUpperCase().includes(cadena)
        || doc.id_unidad.toString().toUpperCase().includes(cadena)
        || doc.codigo_reparticion.toString().toUpperCase().includes(cadena)
        || doc.nombre_reparticion.toString().toUpperCase().includes(cadena)


      }
      if (!todos_los_formatos) {
        if (is_formato_fisico) {
          matches_is_fisico = doc.formato_fisico == is_formato_fisico;
        }
        if (is_formato_digital) {
          matches_is_digital = doc.formato_digital == is_formato_digital;
        }
      }
      if (id_reparticion_select != -1) {
        matches_reparticion = doc.id_reparticion == id_reparticion_select
      }
      if (id_estado_select != -1) {
        matchesEstadoDocumento = doc.id_estado_documento == id_estado_select
      }
      

      console.log({
        matchesSearch , matches_is_fisico , matches_is_digital,nombre:doc.nombre_documento
      })
      return matchesSearch && matches_reparticion && matches_is_fisico && matches_is_digital && matchesEstadoDocumento;
    });
    // if (palabra_search.length == 0) {
    //   return lst_documento
    // }
    // const cadena = palabra_search.toUpperCase()
    // return lst_documento.filter((doc)=>{
    //   return doc.nombre_documento.toUpperCase().includes(cadena)
    // })
  }
  

  const DescargarDocumento = async (file_name:string)=>{
    try {
      if (file_name?.length > 0) {
        const response = await axios_.post('/files', {file_name:file_name},{ responseType: 'blob' });
        // Guardar la respuesta como un archivo
        saveAs(response.data, file_name);
      }
    } catch (error) {
      // Manejar errores
      console.error('Error al realizar la solicitud:', error);
    }
  }

  function confirmarEliminacionDocumento(id:number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el documento de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        delete_documento(id)
        getAll_documentos().then((res)=> setLst_documento(res))
      }
    });
  }


  return (
    <>
    <ScreenLoading is_visible={Is_Loading}/>
    <Box  style={{position:"relative"}}  >
        {/* <Pressable onPress={()=>{navi("/crear_documento")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={isMobile ? 8 : undefined} right={isMobile ? 8 : 10} top={isMobile?undefined : 20}>
          <AiOutlinePlus size={30} color="green"/>
        </Pressable> */}
        {/* {
          isMobile &&
          <Pressable onPress={()=>{navi("/crear_documento")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} bottom={8} right={8}>
            <AiOutlinePlus size={30} color="green"/>
          </Pressable>
        }
        {
          !isMobile &&
          <Pressable onPress={()=>{navi("/crear_documento")}} zIndex={1} borderRadius={50} borderWidth={1} borderColor={"green.400"} backgroundColor={"white"} p={2} position={"fixed"} top={20} right={10}>
            <AiOutlinePlus size={30} color="green"/>
          </Pressable>
        } */}
      <Navbar Height_Navbar={(h)=>setaltura_nav(h)}/>
      <Box ref={elementRef}    >
        <Grid px={3} mb={1} container spacing={2} style={{position:"sticky",top:altura_nav}}>
          <Grid item xs={12} lg={4}>
            <FormControl.Label>TIPO FORMATO</FormControl.Label>
            <HStack justifyContent={"space-around"}>
              <HStack alignItems={"center"}>
                <FormControl.Label>todos</FormControl.Label>
                <Checkbox checked={todos_los_formatos}  onChange={(event)=>{
                  settodos_los_formatos(event.target.checked)
                  setis_formato_digital(false)
                  setis_formato_fisico(false)
                }}/>
              </HStack>

              <HStack alignItems={"center"}>
                <FormControl.Label>formato fisico</FormControl.Label>
                <Checkbox disabled={todos_los_formatos} checked={is_formato_fisico} onChange={(event)=>{setis_formato_fisico(event.target.checked)}}/>
              </HStack>
              <HStack alignItems={"center"}>
                <FormControl.Label>formato digital</FormControl.Label>
                <Checkbox disabled={todos_los_formatos} checked={is_formato_digital} onChange={(event)=>{setis_formato_digital(event.target.checked)}}/>
              </HStack>
            </HStack>
          </Grid>
          <Grid item xs={12} lg={4}>
              <FormControl.Label>REPARTICION</FormControl.Label>
              <Select selectedValue={String(id_reparticion_select)} minWidth="200"  placeholder="reparticion" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={itemValue => {
                setid_reparticion_select(Number(itemValue))
              }}>
                <Select.Item label={"todos"} value={"-1"} />
                {
                  Array.isArray(lst_reparticion) &&
                  lst_reparticion.map((reparticion)=><Select.Item key={reparticion.id_reparticion} label={`${reparticion.codigo} - ${reparticion.nombre}`} value={String(reparticion.id_reparticion)} />)
                }
              </Select>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl.Label >ESTADO DOCUMENTO</FormControl.Label>
              <Select w={["100%","100%"]} selectedValue={String(id_estado_select)} minWidth="200"  placeholder="estado documento" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={itemValue => {
                console.log(itemValue)
                setId_estado_select(Number(itemValue))
              }}>
                <Select.Item label={"todos"} value={"-1"} />
                {
                  lst_estado_documento.map((estado)=><Select.Item key={estado.id_estado_documento} label={estado.nombre} value={String(estado.id_estado_documento)} />)
                }
              </Select>
          </Grid>
          <Grid pl={2} xs={12} lg={8}   >
            <FormControl.Label p={0} m={0} >BUSCAR POR NOMBRE</FormControl.Label>

            <Input w={"100%"} InputLeftElement={<FaSearch style={{marginLeft:5,marginRight:5}}/>}
              onChangeText={(text)=>setpalabra_search(text)}
            />
          </Grid>
          <Grid xs={12} lg={4} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <ButtonMaterial variant='contained' onClick={()=>{navi("/crear_documento")}}>Crear Documento</ButtonMaterial>
          </Grid>
          
      
        </Grid>
      </Box>
      <Box w={'full'} backgroundColor={'pink.300'} background={'pink.200'} >
      
        <TableContainer style={{position:"sticky",top:500, }} sx={{height:`calc(100vh - ${altura_nav + elementHeight  }px)`}}  component={Paper}>
        
          <Table  className="customTable" size='small' border={2}  aria-label="simple table">
          {/* <Table sx={{ minWidth: 700 }} aria-label="customized table"> */}

            <TableHead sx={{position:"sticky" , top:0 , zIndex:1}} >
              {/* <TableRow  classes={{ root: 'table-header' }}> */}
              <TableRow className='customTableRowHead' >

                <TableCell sx={{position:isMobile ? undefined :"sticky", left:0 , backgroundColor:color_colum_nombre_documento}} className='cell_head'  colSpan={1}></TableCell>
                <TableCell className='cell_head'  colSpan={1}></TableCell>
                <TableCell className='cell_head'  colSpan={1}></TableCell>
                <TableCell className='cell_head'  colSpan={1}></TableCell>

                <TableCell className='cell_head'  colSpan={7}></TableCell>
                <TableCell className='cell_head'  colSpan={5}>DOCUMENTO DE APROBACION</TableCell>
                <TableCell className='cell_head'  colSpan={1}>ESTADO</TableCell>
                <TableCell className='cell_head'  colSpan={1}>OBSERVACIONES</TableCell>
                <TableCell className='cell_head'  colSpan={1}>FECHA DE CREACION</TableCell>
                {/* <TableCell className='cell_head'  colSpan={1}>VIGENCIA</TableCell> */}
                <TableCell className='cell_head'  colSpan={1}>CODIGO</TableCell>
                <TableCell className='cell_head'  colSpan={1}>VERSION</TableCell>
                <TableCell className='cell_head'  colSpan={2}>FORMATO EN OyM</TableCell>
                {/* <TableCell className='cell_head'  colSpan={1}>UNIDAD</TableCell> */}
                <TableCell className='cell_head'  colSpan={1}>NUMERO DE DOCUMENTO</TableCell>
                <TableCell className='cell_head'  colSpan={1}>ACCIONES</TableCell>

                <TableCell sx={{position:isMobile ? undefined :"sticky", right:0 , backgroundColor:color_colum_documento}} className='cell_head'  colSpan={1}></TableCell>

              </TableRow>
              <TableRow className='customTableRowHead'>
                <TableCell sx={{position:isMobile ? undefined :"sticky", left:0 , backgroundColor:color_colum_nombre_documento}} colSpan={1}>NOMBRE DEL DOCUMENTO</TableCell>
                <TableCell colSpan={1}>REPARTICION</TableCell>
                <TableCell colSpan={1}>CODIGO_REPARTICION</TableCell>
                <TableCell colSpan={1}>ID_UNIDAD</TableCell>

                <TableCell colSpan={1}>ESTATUTO</TableCell>
                <TableCell colSpan={1}>CODIGO</TableCell>
                <TableCell colSpan={1}>REGLAMENTO</TableCell>
                <TableCell colSpan={1}>MANUAL PROCEDIMIENTO</TableCell>
                <TableCell colSpan={1}>GUIA</TableCell>
                <TableCell colSpan={1}>INSTRUCTIVO</TableCell>
                {/* <TableCell colSpan={1}>FORMATO</TableCell> */}
                <TableCell colSpan={1}>REGISTRO</TableCell>

                

                <TableCell colSpan={1}>ELEBORADO POR</TableCell>
                <TableCell colSpan={1}>REVISADO POR</TableCell>
                <TableCell colSpan={1}>APROBADO POR</TableCell>
                <TableCell colSpan={1}>RESOLUCION</TableCell>
                <TableCell colSpan={1}>FECHA</TableCell>

                <TableCell colSpan={1}></TableCell>
                
                <TableCell colSpan={1}></TableCell>

                <TableCell colSpan={1}></TableCell>

                {/* <TableCell colSpan={1}></TableCell> */}

                <TableCell colSpan={1}></TableCell>

                <TableCell colSpan={1}></TableCell>


                <TableCell colSpan={1}>FISICO</TableCell>
                <TableCell colSpan={1}>DIGITAL</TableCell>
                <TableCell colSpan={1}></TableCell>
                <TableCell colSpan={1}></TableCell>

                {/* <TableCell colSpan={1}></TableCell> */}
                
                <TableCell sx={{position:isMobile ? undefined :"sticky", right:0 , backgroundColor:color_colum_documento}} colSpan={1}>DOCUMENTO</TableCell>

                
              </TableRow>
            </TableHead>
            <TableBody >
              {
                validate_map(FilterLst()).map((doc,index)=>(
                  <TableRow style={{backgroundColor:row_touch == index ? "#41d6ed" : ""}} onClick={()=>{setrow_touch(index)}} key={doc.id_documento}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell className='customTableRowBody' sx={{position:isMobile ? undefined :"sticky", left:0, backgroundColor:color_colum_nombre_documento, color:"white" ,width: 100, maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis",  borderStyle: "border-box" }} component="th" scope="row">{doc.nombre_documento}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.nombre_reparticion}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.codigo_reparticion }</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.id_unidad}</TableCell>


                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.estatuto}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.codigo}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.reglamento}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.manual_procedimiento}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.guia}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.instructivo}</TableCell>
                    {/* <TableCell className='customTableRowBody' component="th" scope="row">{doc.formato}</TableCell> */}
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.registro}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.elaborado_por}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.revisado_por}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.aprobado_por}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.resolucion}</TableCell>
                    <TableCell className='customTableRowBody' style={{whiteSpace:"nowrap"}} component="th" scope="row">{moment_time.utc(doc.fecha).format('YYYY-MM-DD')}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.nombre_estado_documento}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.observaciones}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{moment_time.utc(doc.fecha_creacion).format('YYYY-MM-DD HH:mm:ss')}</TableCell>

                    {/* <Table className='customTableRowBody'Cell component="th" scope="row">{doc.fecha_creacion}</Table> */}
                    {/* <TableCell className='customTableRowBody' component="th" scope="row">{doc.vigencia}</TableCell> */}
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.codigo}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.version_documento }</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.formato_fisico ? "si" : "no"}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.formato_digital ? "si" : "no"}</TableCell>
                    {/* <TableCell component="th" scope="row">{doc.unidad}</TableCell> */}
                    <TableCell className='customTableRowBody' component="th" scope="row">{doc.numero_documento}</TableCell>
                    <TableCell className='customTableRowBody' component="th" scope="row">
                      <ButtonMaterial size='small' sx={{mr:1}} onClick={() => {confirmarEliminacionDocumento(doc.id_documento)}} variant='outlined' color='error'><AiFillDelete/></ButtonMaterial>
                      <ButtonMaterial size='small' sx={{ml:1}} onClick={() => {navi("/crear_documento",{state:{documento:doc}})}} variant='outlined' color='info'><TfiWrite/></ButtonMaterial>

                    </TableCell>

                    {/* <TableCell className='customTableRowBody' sx={{position:"sticky", right:0 , backgroundColor:color_colum_documento}} component="th" scope="row">{doc?.url_file.length > 0 && <HiFolderDownload onPress={()=>{DescargarDocumento(doc.url_file)}}>Descargar</HiFolderDownload>}</TableCell> */}
                    <TableCell className='customTableRowBody' sx={{position:isMobile ? undefined :"sticky", right:0 , backgroundColor:color_colum_documento}} component="th" scope="row" >{doc?.url_file.length > 0 && <Button m={"auto"} size={"xs"} onPress={()=>{DescargarDocumento(doc.url_file)}}>Descargar</Button>}</TableCell>

                  </TableRow>
                ))
              }
              
        
                  

                <TableRow></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
              

    </Box>
    </>
  )
}



