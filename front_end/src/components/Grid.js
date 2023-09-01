import React from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Table , Thead , Tbody, Tr, Th , Td } from '../components-style/Components-Styles.js';
import { FaTrash, FaEdit } from "react-icons/fa";

const Grid = ({ users , setUsers , setOnEdit}) => {
    const handleEdit = (item) => {
        setOnEdit(item);
      };
      
    const handleDelete = async (id) => {
        await axios.delete("http://localhost:3001/api/deleteUser/" + id)
          .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);
    
            setUsers(newArray);
            toast.success(data.message);
          })
        .catch(({ data }) => toast.error(data.message));
    
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
                        <FaEdit cursor="pointer" onClick={() => handleEdit(item)}/>
                    </Td>
                    <Td alignCenter width="5%">
                        <FaTrash cursor="pointer" onClick={() => handleDelete(item.id)}/>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}

export default Grid