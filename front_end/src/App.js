import GlobalStyle from "./styles/global";
import Styled from "styled-components";

import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
// import { toast } from "react-toastify/dist/components";

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
  return (
    <>
      <Container>
        <Title>Preencha o form abaixo.</Title>
        <Form/>
        
      </Container>
      {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
      <GlobalStyle />
    </>
  );
}

export default App;