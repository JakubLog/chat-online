import { useAuth } from 'hooks/useAuth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Wrapper, Form, ErrorMessage } from 'views/App.styles';
import { Title } from 'components/atoms/Title';
import { StyledLink } from 'components/atoms/StyledLink';

const Reset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { resetPassword } = useAuth();
  const [error, setError] = useState();

  const reset = async ({ email }) => {
    setError(null);
    try {
      await resetPassword(email);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(reset)}>
        <Title>Reset passsword</Title>
        <Input id="email" label="Email" placeholder="Your account email address" {...register('email', { required: true })} />
        {errors.email && <ErrorMessage>Email is required.</ErrorMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button variant="outlined" type="submit">
          Reset password
        </Button>
        <StyledLink to="/">Remember password?</StyledLink>
      </Form>
    </Wrapper>
  );
};

export default Reset;
