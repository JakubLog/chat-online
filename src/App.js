import { useAuth } from 'hooks/useAuth';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { db } from './firebase';
import { Wrapper, ChatBlock, ChatInfo, Chat, ChatSend, Form, ErrorMessage } from 'App.styles';

const App = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Authorized /> : <UnAuthorized />;
};

const Authorized = () => {
  const [username, setUsername] = useState();
  const { currentUser, signOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

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

  useEffect(() => {
    const preparedName = currentUser.email.split('@')[0];
    setUsername(preparedName);
  }, [currentUser]);

  const process = async ({ message }) => {
    const time = new Date().getTime();
    await db.collection('messages').doc().set({
      nick: username,
      message,
      time
    });
  };

  return (
    <Wrapper>
      <ChatBlock>
        <ChatInfo>
          <p>
            <b style={{ color: '#fff' }}>User:</b> {username}
          </p>
          <p style={{ cursor: 'pointer' }} onClick={signOut}>
            Log out
          </p>
        </ChatInfo>
        <Chat ref={chat}></Chat>
        <ChatSend onSubmit={handleSubmit(process)}>
          <Input
            style={{ width: '70%', marginRight: '20px' }}
            variant="outlined"
            placeholder={errors.message ? 'Type something to send message!' : 'Type something...'}
            id="message"
            {...register('message', { required: true })}
          />
          <Button style={{ width: '30%' }} variant="contained" type="submit" isDark>
            Send Message
          </Button>
        </ChatSend>
      </ChatBlock>
    </Wrapper>
  );
};

const UnAuthorized = () => {
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
        <Button variant="outlined" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Form>
    </Wrapper>
  );
};

export default App;
