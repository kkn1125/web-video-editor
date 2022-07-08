import React from 'react';
import styled, { keyframes } from 'styled-components';

import color from '@/theme/colors';

interface Props {
  message: string;
}

const jump = keyframes`
  from {
    top:0px;
  }
  to {
    top:-70px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 9;
  opacity: 1;
  flex-direction: column;
  font-family: Sans-Serif;
  font-weight: bold;
  text-shadow: 0px 0px 20px ${color.WHITE};
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${color.BLACK};
  z-index: 10;
  opacity: 0.5;
  flex-direction: column;
`;

const StyledSubDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: -120px;
  z-index: 11;
`;

const Wave1 = styled.div`
  background: ${color.DARK_PURPLE};
  margin-right: 10px;
  height: 150px;
  position: relative;
  width: 50px;
  &:before {
    border-bottom: 35px solid ${color.DARK_PURPLE};
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  animation: ${jump} 0.4s 0s ease-in Infinite Alternate;
`;

const Wave2 = styled.div`
  background: ${color.PURPLE};
  height: 100px;
  margin-right: 10px;
  position: relative;
  width: 50px;
  &:before {
    border-bottom: 35px solid ${color.PURPLE};
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  animation: ${jump} 0.4s 0.1s ease-in Infinite Alternate;
`;

const Wave3 = styled.div`
  background: ${color.PALE_PURPLE};
  height: 85px;
  position: relative;
  width: 50px;
  animation: ${jump} 0.4s 0.2s ease-in Infinite Alternate;
`;

const Wave4 = styled.div`
  background: ${color.MEDIUM_BLUE};
  height: 100px;
  position: relative;
  margin-left: 10px;
  width: 50px;
  &:before {
    border-bottom: 35px solid ${color.MEDIUM_BLUE};
    border-left: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  animation: ${jump} 0.4s 0.3s ease-in Infinite Alternate;
`;

const Wave5 = styled.div`
  background: ${color.ROYAL_BLUE};
  height: 150px;
  position: relative;
  width: 50px;
  margin-left: 10px;
  &:before {
    border-bottom: 35px solid ${color.ROYAL_BLUE};
    border-left: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  animation: ${jump} 0.4s 0.4s ease-in Infinite Alternate;
`;

const StyledP = styled.p`
  color: ${color.WHITE};
  z-index: 15;
  font-size: 2rem;
`;

const Loading: React.FC<Props> = ({ message }) => {
  return (
    <StyledDiv>
      <Overlay />
      <StyledSubDiv>
        <Wave1 />
        <Wave2 />
        <Wave3 />
        <Wave4 />
        <Wave5 />
      </StyledSubDiv>
      <StyledP>{message}</StyledP>
    </StyledDiv>
  );
};

export default Loading;
