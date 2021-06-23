import React from 'react';

import { toast } from 'react-toastify';
import { Container } from '../../style/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  toast.success('oie');
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
