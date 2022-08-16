import styled from 'styled-components';
import React from 'react';

interface IPropsStyled {
  readonly open?: boolean | unknown;
}

interface IProps {
  readonly active?: boolean | unknown;
  readonly onClick: () => void;
}

const ButtonContainer = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  z-index: 999;
`;

const FirstLine = styled.span<IPropsStyled>`
  position: absolute;
  top: ${(p) => (p.open ? `50%` : '10px')};
  width: 100%;
  height: 2px;
  background: #eaeaea;
  border-radius: 50px;
  transition: all 0.4s ease-out;
  left: ${(p) => (p.open ? `0px` : '10px')};
  transform: ${(p) => (p.open ? 'rotate(-135deg)' : 'rotate(0deg)')};
`;
const SecondLine = styled.span<IPropsStyled>`
  position: absolute;
  top: 20px;
  width: 100%;
  transition: all 0.2s ease-out;
  left: ${(p) => (p.open ? `-100%` : '20px')};

  height: 2px;
  background: #eaeaea;
  border-radius: 50px;
`;
const ThirdLine = styled.span<IPropsStyled>`
  position: absolute;
  top: ${(p) => (p.open ? `50%` : '30px')};

  width: 100%;
  transition: all 0.4s ease-out;
  left: ${(p) => (p.open ? `0px` : '30px')};
  transform: ${(p) => (p.open ? 'rotate(135deg)' : 'rotate(0deg)')};

  height: 2px;
  background: #eaeaea;
  border-radius: 50px;
`;

const BurgerBtn = React.memo<IProps>(({ active, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <FirstLine open={active} />
      <SecondLine open={active} />
      <ThirdLine open={active} />
    </ButtonContainer>
  );
});

export default BurgerBtn;
