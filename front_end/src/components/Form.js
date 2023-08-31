import React, { useRef } from 'react'
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

const Form = ({ onEdit }) => {
  const ref = useRef();
  
    return (
    <FormContainer ref={ref}>
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
            <Label>pergunta_01</Label>
            <Input name="pergunta_01" />
        </InputArea>
        <InputArea>
            <Label>pergunta_02</Label>
            <Input name="pergunta_02" />
        </InputArea>
        <InputArea>
            <Label>pergunta_03</Label>
            <Input name="pergunta_03" />
        </InputArea>

        <Button>Salvar</Button>
    </FormContainer>
  );
};

export default Form