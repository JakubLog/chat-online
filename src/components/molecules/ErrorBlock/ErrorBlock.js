import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Content } from './ErrorBlock.styles';

const defaultMessage = 'Sorry, something went wrong. Please try again or contact with support!';

const ErrorBlock = ({ message = defaultMessage }) => {
  return (
    <Wrapper>
      <Title>Ooops!</Title>
      <Content>{message}</Content>
    </Wrapper>
  );
};

ErrorBlock.propTypes = {
  message: PropTypes.string
};

export default ErrorBlock;
