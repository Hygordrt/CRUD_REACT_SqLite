import Styled from "styled-components";

// Style App.js

export const Container = Styled.div`
  width:100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = Styled.h2``;

// Style Form.js

export const FormContainer = Styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

export const InputArea = Styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = Styled.input`
    width: 220px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

export const Label = Styled.label``;

export const Button = Styled.button`
    padding: 0 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    width: 242px;

    &:hover {
        opacity: .9;
    }
`;

// Style Grid.js

export const Table = Styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = Styled.thead``;

export const Tbody = Styled.tbody``;

export const Tr = Styled.tr``;

export const Th = Styled.th`
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