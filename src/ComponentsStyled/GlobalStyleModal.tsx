import { createGlobalStyle } from "styled-components";
import {Colores} from '../config/config_style'


export const GlobalStyleModal = createGlobalStyle`

  .modal-container {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* width: 400px; */
    max-width: 90%;
    outline: none;
  }

`;


