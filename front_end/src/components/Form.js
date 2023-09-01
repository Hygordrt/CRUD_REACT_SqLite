import React, { useEffect, useRef, useState  } from "react";
import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';

import { FormContainer , Input, InputArea, Button , Label } from '../components-style/Components-Styles.js';
import '../styles/style.css';

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();
    const [telefone, setTelefone] = useState('');
  
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
        };

        const user = ref.current;

        if (
          !e.target.nome?.value ||
          !e.target.email?.value ||
          !e.target.telefone?.value ||
          !e.target.pergunta_01?.value ||
          !e.target.pergunta_02?.value
        ) {
           return toast.warn("Preencha todos os campos!");
        }
        console.log("onEdit:", onEdit);
        if (onEdit) {
            debugger;
          await axios.put("http://localhost:3001/api/updateUser/" + onEdit.id, formData)
            .then(({ data }) => toast.success(data.message))
            .catch(({ data }) => toast.error(data.message));
        } else {
            await axios.post("http://localhost:3001/api/addUser", formData)
            .then(({ data }) => toast.success(data.message))
            .catch(({ data }) => toast.error(data.message));
        }
    
        user.nome.value = "";
        user.email.value = "";
        // user.telefone.value = "";
        setTelefone('');
        user.pergunta_01.value = "";
        user.pergunta_02.value = "";

        setOnEdit(null);
        getUsers();
    };

    // handleTelefoneChange = (e) => {
    //     this.setState({ telefone: e.target.value });
    // }
    
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
                    <InputMask
                        mask="(99) 99999-9999"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    >
                    {(inputProps) => <input {...inputProps} name="telefone" className="custom-input" />}
                    </InputMask>
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