import React from 'react';
import { Container } from '../../style/GlobalStyles';
import { Title, Paragrafo } from './styled';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData();
  }, []);

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        laborum reiciendis impedit minima sunt quam blanditiis eveniet tempora,
        rem quisquam, perferendis magni non magnam distinctio! Iste quisquam at
        iure. Tempore.
      </Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
