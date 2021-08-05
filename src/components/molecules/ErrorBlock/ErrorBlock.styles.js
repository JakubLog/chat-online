import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 150px;
  background: transparent;
  position: absolute;
  right: 25px;
  bottom: 15px;
  border: 5px solid hsl(0, 90%, 60%);
  border-radius: 15px;
  padding: 15px 20px;
  animation: ${fadeIn} 2s forwards, ${fadeOut} 1s 6s forwards;
`;

export const Title = styled.h3`
  color: hsl(0, 90%, 60%);
  font-size: 25px;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 4px solid hsl(0, 90%, 60%);
`;

export const Content = styled.p`
  margin: 0;
  margin-top: 10px;
  color: hsl(0, 90%, 60%);
`;
