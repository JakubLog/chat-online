import { useAuth } from 'hooks/useAuth';
import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { db } from './firebase';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 5px 20px -11px black;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  .MuiFormControl-root {
    margin-block: 10px;
  }
  button {
    margin-top: 20px;
  }
`;

export const ChatBlock = styled.div`
  width: 700px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 5px 20px -11px black;
  background-color: ${({ theme }) => theme.color.secondary};
  align-items: center;
  justify-content: center;
  padding: 20px;
  & > * {
    width: 100%;
  }
`;

export const Chat = styled.div`
  border-top: 4px solid white;
  background-color: ${({ theme }) => theme.color.secondaryDarken};
  height: 75%;
  border-radius: 0 0 10px 10px;
  padding: 10px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: hsl(220, 30%, 20%);
    border-radius: 0 0 10px 0;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.primary};
  }
`;
export const ChatSend = styled.form`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ChatInfo = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const App = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Authorized /> : <UnAuthorized />;
};

const Authorized = () => {
  const { currentUser, signOut } = useAuth();
  const { register, handleSubmit } = useForm();

  const chat = React.useRef(null);

  const updateChat = (data) => {
    const { nick, message } = data;
    chat.current.innerHTML += `<div style="color: black; display: flex; align-items: flex-start; padding: 7px 12px; background: white; border-radius: 10px; width: fit-content; flex-direction: column; max-width: 90%; margin: 15px 0;"><b>${nick}</b><span>${message}</span></div>`;
  };

  useEffect(() => {
    db.collection('messages')
      .orderBy('time', 'asc')
      .onSnapshot((snapshot) => {
        chat.current.innerHTML = '';
        snapshot.forEach((doc) => {
          updateChat(doc.data());
        });
      });
  }, []);

  const process = async ({ message }) => {
    const time = new Date().getTime();
    await db.collection('messages').doc().set({
      nick: currentUser.email,
      message,
      time
    });
  };

  return (
    <Wrapper>
      <ChatBlock>
        <ChatInfo>
          <p>
            <b style={{ color: '#fff' }}>User:</b> {currentUser.email}
          </p>
          <p onClick={signOut}>Wyloguj się</p>
        </ChatInfo>
        <Chat ref={chat}></Chat>
        <ChatSend onSubmit={handleSubmit(process)}>
          <Input
            style={{ width: '70%', marginRight: '20px' }}
            variant="outlined"
            placeholder="message"
            id="message"
            {...register('message', { required: true })}
          />
          <Button style={{ width: '30%' }} variant="contained" type="submit">
            Send Message
          </Button>
        </ChatSend>
      </ChatBlock>
    </Wrapper>
  );
};

const UnAuthorized = () => {
  const { register, handleSubmit } = useForm();
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
        <Input id="password" label="Password" type="password" {...register('password', { required: true })} />
        {error && <p>{error}</p>}
        <Button variant="outlined" type="submit">
          Sign in
        </Button>
        <Button variant="outlined" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Form>
    </Wrapper>
  );
};

export default App;
