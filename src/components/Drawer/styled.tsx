import styled ,{keyframes,css} from "styled-components";
import { device } from "../../config/devices_size";
import { Colores } from "../../config/config_style";



export const WrapperDrawer = styled.div<{visible:boolean}>`
    position: fixed;
    top: 0;
    height: 100vh;
    z-index: 1050;
    overflow: hidden;
    background-color: ${Colores.Drawer_Box};
    transition: .5s;
    box-shadow: 11px 3px 12px -4px rgba(82,74,74,0.69);
    -webkit-box-shadow: 11px 3px 12px -4px rgba(82,74,74,0.69);
    -moz-box-shadow: 11px 3px 12px -4px rgba(82,74,74,0.69);

    width: ${(props)=>props.visible ? "20vw":"0"};

    @media ${device.tablet} {
      width: ${(props)=>props.visible ? "90vw":"0"};
    }
   
`
