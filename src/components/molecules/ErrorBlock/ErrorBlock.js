import React from 'react';
import { Wrapper, Title, Content } from './ErrorBlock.styles';

const ErrorBlock = ({ message }) => {
  return (
    <Wrapper>
      <Title>Ooops!</Title>
      <Content>{message}</Content>
    </Wrapper>
  );
};

export default ErrorBlock;
