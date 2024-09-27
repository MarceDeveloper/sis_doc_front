import { createGlobalStyle } from "styled-components";
import { Colores } from '../config/config_style'


const GlobalStyle = createGlobalStyle`

  @media print {
      .no-print {
          display: none;
      }
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #F9FAFB;
    color: #4A4A4A;
  }
  .customTableRowHead{
    white-space: nowrap;
    /* background-color: #025666; */
    background-color: ${Colores.color2};

    color: white;
  }
  .customTableRowHead th{
    color: white;
    text-align: center;
  }
  .customTableRowBody{
    white-space: nowrap;
    /* background-color: #02663c; */
  }

  .table-header {
    background-color: ${Colores.color2} ;
    /* background-color: #a71515; */
    
  }
  
  .table-header th{
    color: white;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  a {
    color: #0066CC;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    
    &:hover {
      color: #003E7E;
    }
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #0066CC;
    color: #FFFFFF;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
      background-color: #0052A3;
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.5);
    }
  }
  

  /* Animaciones */
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .slide-in-from-left {
    animation: slideInFromLeft 0.5s ease-in-out both;
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in-out both;
  }

`;




export default GlobalStyle;
