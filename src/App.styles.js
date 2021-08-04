import styled, { keyframes } from 'styled-components';

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

const sliceIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-150%);
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const ErrorMessage = styled.p`
  color: hsl(0, 70%, 60%);
  animation: ${sliceIn} 1.5s forwards;
`;
