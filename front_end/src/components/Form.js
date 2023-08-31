import React, { useEffect, useRef } from "react";
import axios from "axios";

import Styled from "styled-components";

const FormContainer = Styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadown: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = Styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = Styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

const Label = Styled.label``;

const Button = Styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();
  
    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
  
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.telefone.value = onEdit.telefone;
        user.pergunta_01.value = onEdit.pergunta_01;
        user.pergunta_02.value = onEdit.pergunta_02;
      }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            nome: e.target.nome.value,
            email: e.target.email.value,
            telefone: e.target.telefone.value,
            pergunta_01: e.target.pergunta_01.value,
            pergunta_02: e.target.pergunta_02.value,
          }

        const user = ref.current;
        console.log(e.target.nome?.value);
        console.log(e.target.email?.value);
        console.log(e.target.telefone?.value);
        console.log(e.target.pergunta_01?.value);
        console.log(e.target.pergunta_02?.value);
        console.log(ref.current);

        if (
          !e.target.nome?.value ||
          !e.target.email?.value ||
          !e.target.telefone?.value ||
          !e.target.pergunta_01?.value ||
          !e.target.pergunta_02?.value
        ) {
        //   return toast.warn("Preencha todos os campos!");
        }
    
        if (onEdit) {
          await axios.put("http://localhost:3001/api/updateUser/:" + onEdit.id, formData)
            // .then(({ data }) => toast.success(data))
            // .catch(({ data }) => toast.error(data));
        } else {
          await axios.post("http://localhost:3001/api/addUser", formData)
        //   {
        //       nome: user.nome.value,
        //       email: user.email.value,
        //       telefone: user.telefone.value,
        //       pergunta_01: user.pergunta_01.value,
        //       pergunta_02: user.pergunta_02.value,
        //     })
            // .then(({ data }) => toast.success(data))
            // .catch(({ data }) => toast.error(data));
        }
    
        // user.nome.value = "";
        // user.email.value = "";
        // user.telefone.value = "";
        // user.pergunta_01.value = "";
        // user.pergunta_02.value = "";

        setOnEdit(null);
        getUsers();
      };
    
      return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="telefone" />
            </InputArea>
            <InputArea>
                <Label>Empresa</Label>
                <Input name="pergunta_01" />
            </InputArea>
            <InputArea>
                <Label>Cargo</Label>
                <Input name="pergunta_02" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
  );
};

export default Form