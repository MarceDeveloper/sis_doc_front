import styled from "styled-components";
import { Paleta } from "../config/Paleta";

export const Wrapper_Table = styled.div`
  position: relative;
  /* height: 600px; */
  height: calc(100vh - 200px);
  width: 100%;
  overflow: auto;
  max-width: 100vw;
  box-sizing: border-box;
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;

  & thead tr th {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 16px;
    padding-left: 15px;
    border-left: 1px dotted rgba(200, 209, 224, 0.6);
    border-bottom: 1px solid #e8e8e8;
    background: ${Paleta.Head_Table};
    text-align: left;
    box-shadow: 0px 0px 0 2px #e8e8e8;
    font-weight: 500;
    color: ${Paleta.white};
  }

  & tbody tr td {
    border: 1px solid #e8e8e8;
    padding: 10px;
  }

  & tbody tr:hover {
    background: #e6f7ff;
  }
`;
export const TableStyleComun = styled(TableStyle)`
  padding: relative;
`;

export const Th = styled.th`
  /* border: 1px solid #ccc;
  padding: 10px;
  background-color: #f2f2f2; */
`;

export const Td = styled.td`
  /* border: 1px solid #ccc;
  padding: 10px;
  & span {
    color: orange;
  } */
`;