import { useAuth } from 'hooks/useAuth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Wrapper, Form, ErrorMessage } from 'App.styles';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { signIn, signInWithGoogle } = useAuth();
  const [error, setError] = useState();

  const process = async ({ email, password }) => {
    setError(null);
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(process)}>
        <Input id="email" label="Email" placeholder="example@domain.com" {...register('email', { required: true })} />
        {errors.email && <ErrorMessage>Email is required.</ErrorMessage>}
        <Input id="password" label="Password" type="password" {...register('password', { required: true, minLength: 8 })} />
        {errors.password && <ErrorMessage>Password should have at least 8 characters.</ErrorMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button variant="outlined" type="submit">
          Sign in
        </Button>
        <Link style={{ textAlign: 'center', marginTop: '20px', color: 'White', cursor: 'pointer' }} to="/reset/">
          Don't remeber password?
        </Link>
        <Button variant="outlined" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Form>
    </Wrapper>
  );
};

export default SignIn;
