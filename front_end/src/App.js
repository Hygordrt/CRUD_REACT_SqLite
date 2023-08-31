import GlobalStyle from "./styles/global";
import Styled from "styled-components";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Grid from "./components/Grid";

const Container = Styled.div`
  width:100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = Styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/data");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    // Recarregar sempre que houver um insert
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Preencha o formulário abaixo.</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      <GlobalStyle />
    </>
  );
}

export default App;