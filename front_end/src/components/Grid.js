import React from 'react';
import axios from 'axios';

import Styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = Styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

const Thead = Styled.thead``;

const Tbody = Styled.tbody``;

const Tr = Styled.tr``;

const Th = Styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom:  5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = Styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

const Grid = ({ users , setUsers , setOnEdit}) => {
    const handleEdit = (item) => {
        setOnEdit(item);
      };
      
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:3001/api/deleteUser/:" + id)
          .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);
    
            setUsers(newArray);
            // toast.success(data);
          })
        //   .catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
      };

  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th onlyWeb>Telefone</Th>
            </Tr>
        </Thead>
        <Tbody>
            {users.map((item, i) => (
                <Tr key={i}>
                    <Td width="30%">{item.nome}</Td>
                    <Td width="30%">{item.email}</Td>
                    <Td width="20%" onlyWeb>{item.telefone}</Td>
                    <Td alignCenter width="5%">
                        <FaEdit onClick={() => handleEdit(item)}/>
                    </Td>
                    <Td alignCenter width="5%">
                        <FaTrash onClick={() => handleDelete(item.id)}/>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}

export default Grid